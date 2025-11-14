export type BlogSection = {
  heading: string;
  body: string[];
  highlights?: string[];
  callout?: {
    title: string;
    body: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  outro: string;
  tags: string[];
};

const posts: BlogPost[] = [
  {
    slug: 'launching-dselevura',
    title: 'Launching Dselevura: Building Africa\'s Pathway From Curiosity to Career',
    date: '2025-10-01',
    readTime: '6 min read',
    author: 'Dselevura Team',
    excerpt:
      'Why we started Dselevura, how the programs work, and what success looks like for African learners ready to ship real products.',
    intro:
      'Dselevura began as a response to a pattern we kept seeing across African tech communities: brilliant, motivated learners who had devoured tutorials but still struggled to land roles or ship production-grade work. Today we are officially launching the Dselevura Mentorship Program to close that gap with a deliberate mix of training, mentorship, and career support.',
    sections: [
      {
        heading: 'Why we started',
        body: [
          'Over the past five years we have mentored student groups, junior developers, and career switchers from Lagos to Nairobi. The consistent blocker was not access to information—it was the lack of a structured path that connects theory to practice while surrounding talent with accountability.',
          'We mapped the biggest obstacles and grouped them into three buckets: isolated learning, nonexistent feedback loops, and limited visibility into industry expectations. Dselevura is our blueprint for removing each of those blockers.'
        ],
        highlights: [
          'Isolated learning without consistent accountability',
          'Limited feedback loops from experienced mentors',
          'Minimal visibility into real hiring expectations'
        ]
      },
      {
        heading: 'How the programs work',
        body: [
          'Learners choose between two bootcamps that interlock: the Training Bootcamp builds strong fundamentals through live weekend sprints and guided practice, while the Mentorship Bootcamp places advanced learners inside production-like environments with seasoned mentors.',
          'Every cohort ships portfolio projects, participates in critiques, and benefits from career coaching. We run weekly demo days, match learners with accountability partners, and track progress with measurable milestones rather than seat time.'
        ],
        highlights: [
          'Training Bootcamp: live weekend sprints, practice drills, foundation building',
          'Mentorship Bootcamp: production simulations, mentor pairing, architecture deep-dives',
          'Career services: weekly demo days, accountability partners, milestone tracking'
        ]
      },
      {
        heading: 'What success looks like',
        body: [
          'Success for us is not just certificates—it is the first internship, the first promotion, the confidence to lead a stand-up, and the ability to contribute to open-source or client work. We measure outcomes through shipping velocity, portfolio depth, and placements into internships and paid roles.',
          'Our long-term vision is to see Dselevura alumni embedded in companies across the continent and beyond, mentoring the next wave of builders behind them.'
        ],
        highlights: [
          'Learners earn internships and promotions within weeks of graduating',
          'Portfolios showcase production-grade problem solving instead of tutorial recreations',
          'Alumni return as mentors, compounding community impact across cohorts'
        ]
      },
      {
        heading: 'What comes next',
        body: [
          'In the coming months we will roll out additional tracks for product management and cloud engineering, expand our employer network, and publish curriculum toolkits for community partners. We are also investing in data dashboards that help learners visualize their growth and help mentors tailor feedback.',
          'If you are a founder, hiring manager, or educator interested in collaborating, we would love to hear from you. Together we can build a sustainable pathway from curiosity to career for African talent.'
        ],
        callout: {
          title: 'Looking to partner?',
          body: 'We welcome founders, hiring managers, and educators who want to co-design projects, host mock interviews, or recruit emerging talent.'
        }
      }
    ],
    outro:
      'We are thrilled to open applications for the next cohort. Join us if you are ready to learn actively, ship boldly, and grow with a community that believes in your potential.',
    tags: ['Launch', 'Programs', 'African Tech']
  },
  {
    slug: 'project-based-learning',
    title: 'Why Project-Based Learning Still Wins for African Tech Talent',
    date: '2025-09-20',
    readTime: '5 min read',
    author: 'Daniel Obentey',
    excerpt:
      'Passive consumption leads to stalled careers. Here is how Dselevura structures project-based learning so skills stick and portfolios stand out.',
    intro:
      'Scroll through any online forum and you will find countless learners stuck in tutorial purgatory. They can explain concepts but freeze when asked to build from scratch. Project-based learning is the antidote, and at Dselevura we have built our entire curriculum around it.',
    sections: [
      {
        heading: 'Passive learning creates fragile skills',
        body: [
          'When learning stays theoretical, the knowledge never reaches the muscle-memory layer required to debug real-world problems. Employers do not hire quiz champions—they hire builders who can navigate ambiguity.',
          'We interviewed 30 hiring managers across Lagos, Accra, and Kigali. Their feedback aligned: candidates who had only completed courses struggled in technical interviews and practical assessments. Those who shipped tangible projects, even small ones, adapted faster.'
        ],
        highlights: [
          'Tutorials rarely expose learners to ambiguous briefs and shifting requirements',
          'Without feedback, mistakes harden into habits that are expensive to unlearn later',
          'Employers prioritize candidates who have shipped usable products over course completions'
        ]
      },
      {
        heading: 'Our project-based framework',
        body: [
          'Each sprint inside the Training Bootcamp ends with a demoable deliverable: a research-backed UX prototype, a responsive marketing site, or a data story presented in a live review. Learners document the process, share blockers, and receive feedback from mentors and peers.',
          'In the Mentorship Bootcamp we escalate expectations. Learners integrate APIs, implement accessibility fixes, collaborate on Git branches, and run user tests with actual participants. Reflection sessions after every sprint capture lessons learned and feed into portfolio narratives.'
        ],
        highlights: [
          'Sprint deliverables: UX prototypes, responsive marketing sites, data storytelling decks',
          'Advanced practice: API integrations, accessibility audits, collaborative Git workflows',
          'Reflection rituals: weekly show-and-tell, blocker clinics, portfolio storytelling prompts'
        ]
      },
      {
        heading: 'Evidence that it works',
        body: [
          'Across the last two pilot cohorts, 92% of learners reported increased confidence shipping production work. Three project teams contributed features to partner startups, and six learners accepted internships within four weeks of graduation.',
          'Beyond metrics, the cultural shift is powerful: learners describe themselves as builders, not just students. They start spotting problems in their communities and prototyping solutions without waiting for permission.'
        ],
        callout: {
          title: 'Pilot results',
          body: '92% of learners reported stronger shipping confidence, three teams deployed features for partner startups, and six graduates secured internships within a month.'
        }
      }
    ],
    outro:
      'If you feel stuck in tutorial loops, project-based learning is your escape hatch. Join a Dselevura track, ship your next project alongside mentors, and show your future employer what you can actually build.',
    tags: ['Learning', 'Career Growth', 'Projects']
  },
  {
    slug: 'mentorship-matters',
    title: 'Mentorship That Compounds: How Guided Feedback Accelerates Growth',
    date: '2025-09-10',
    readTime: '4 min read',
    author: 'Emmanuel John',
    excerpt:
      'Mentorship is more than encouragement—it is a system of feedback loops, accountability, and network access that compounds over time.',
    intro:
      'At Dselevura we pair every learner with mentors who have shipped real products in African markets. This is intentional: context matters, and so does consistent feedback. Here is what we have learned about building a mentorship model that actually changes trajectories.',
    sections: [
      {
        heading: 'Feedback loops beat guesswork',
        body: [
          'In self-directed learning, it is easy to misjudge quality. Mentors close that gap by reviewing deliverables, pointing out blind spots, and recommending nuanced improvements that only come from experience.',
          'Our mentors host live office hours, async Loom reviews, and written code critiques. The goal is speed: learners should never stay stuck on a blocker for more than 24 hours.'
        ],
        highlights: [
          'Mentors review deliverables within 24 hours so momentum stays high',
          'Feedback arrives through Loom walkthroughs, async comments, and live critique sessions'
        ]
      },
      {
        heading: 'Community amplifies the mentorship effect',
        body: [
          'Alongside one-on-one sessions we run peer circles where learners present weekly wins and challenges. Celebrating progress publicly creates momentum, while hearing peers articulate their learning cements lessons for everyone.',
          'We also bring in guest mentors from partner companies to run mock interviews and share insight into hiring pipelines. Exposure to different perspectives keeps learners adaptable.'
        ],
        highlights: [
          'Peer circles normalize sharing blockers and celebrating weekly wins',
          'Guest mentors host mock interviews, design critiques, and product teardown sessions',
          'Community rituals reinforce accountability and inspire new career possibilities'
        ]
      },
      {
        heading: 'Mentorship beyond graduation',
        body: [
          'The relationship does not end on demo day. Alumni stay connected through the Dselevura community Slack, jump on career check-ins, and refer each other to opportunities. Mentors continue to advocate for graduates in their own organizations and networks.',
          'This compounding effect is why we invest heavily in mentor onboarding and support. A mentor who feels equipped can empower dozens of careers over time.'
        ],
        callout: {
          title: 'Why it matters',
          body: 'Mentorship ties extend beyond graduation, fueling referrals, ongoing accountability, and long-term advocacy for alumni.'
        }
      }
    ],
    outro:
      'If you are looking for a learning experience where people invest in your growth, the Mentorship Bootcamp is built for you. Apply to join a community where feedback, accountability, and belief travel with you long after the cohort ends.',
    tags: ['Mentorship', 'Community', 'Career Support']
  }
];

export function getAllPosts() {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug) ?? null;
}

export function getPostParams() {
  return posts.map(post => ({ slug: post.slug }));
}
