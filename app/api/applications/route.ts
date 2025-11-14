import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_TAB = process.env.GOOGLE_SHEETS_TAB ?? 'Applications';
const MAX_RECEIPT_SIZE = 5 * 1024 * 1024; // 5MB

class BadRequestError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = 'BadRequestError';
    this.status = status;
  }
}

let sheetsClient: ReturnType<typeof google.sheets> | null = null;

async function getSheetsClient() {
  if (sheetsClient) {
    return sheetsClient;
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google service account credentials.');
  }

  privateKey = privateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES
  });

  await auth.authorize();
  sheetsClient = google.sheets({ version: 'v4', auth });
  return sheetsClient;
}

type ParsedForm = {
  name: string;
  email: string;
  phone: string;
  program: string;
  course: string;
  skill: string;
  motivation: string;
  referral: string;
  paymentIntent: string;
  receiptProvided: boolean;
  receiptName: string;
  receiptType: string;
  receiptDataUrl: string;
};

function getStringField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

async function parseForm(request: Request): Promise<ParsedForm> {
  const formData = await request.formData();
  const paymentIntent = getStringField(formData, 'paymentIntent') || 'later';

  const receipt = formData.get('receipt');
  let receiptProvided = false;
  let receiptName = '';
  let receiptType = '';
  let receiptDataUrl = '';

  if (receipt instanceof File && receipt.size > 0) {
    if (receipt.size > MAX_RECEIPT_SIZE) {
      throw new BadRequestError('Receipt file exceeds 5MB limit.', 413);
    }
    receiptProvided = true;
    receiptName = receipt.name;
    receiptType = receipt.type || 'application/octet-stream';
    const buffer = Buffer.from(await receipt.arrayBuffer());
    const base64 = buffer.toString('base64');
    receiptDataUrl = `data:${receiptType};base64,${base64}`;
  }

  return {
    name: getStringField(formData, 'name'),
    email: getStringField(formData, 'email'),
    phone: getStringField(formData, 'phone'),
    program: getStringField(formData, 'program'),
    course: getStringField(formData, 'course'),
    skill: getStringField(formData, 'skill'),
    motivation: getStringField(formData, 'motivation'),
    referral: getStringField(formData, 'referral'),
    paymentIntent,
    receiptProvided,
    receiptName,
    receiptType,
    receiptDataUrl
  };
}

export async function POST(request: Request) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!spreadsheetId) {
      throw new Error('Missing GOOGLE_SHEETS_ID environment variable.');
    }

    const parsed = await parseForm(request);
    const sheets = await getSheetsClient();

    const timestamp = new Date().toISOString();
    const values = [
      timestamp,
      parsed.name,
      parsed.email,
      parsed.phone,
      parsed.program,
      parsed.course,
      parsed.skill,
      parsed.motivation,
      parsed.referral,
      parsed.paymentIntent,
      parsed.receiptProvided ? 'Yes' : 'No',
      parsed.receiptName,
      parsed.receiptType,
      parsed.receiptDataUrl
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_TAB}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values]
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof BadRequestError) {
      return NextResponse.json({ success: false, error: error.message }, { status: error.status });
    }
    console.error('Failed to store application', error);
    return NextResponse.json(
      { success: false, error: 'Unable to submit application right now.' },
      { status: 500 }
    );
  }
}
