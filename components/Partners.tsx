export default function Partners() {
  const partners = [
    'Eso City',
    'Money Trust MFB',
    'Fixxir',
    'DinnyTech'
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {partners.map((partner) => (
        <span
          key={partner}
          className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20"
        >
          {partner}
        </span>
      ))}
    </div>
  );
}
