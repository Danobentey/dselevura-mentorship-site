import { MentorCard } from '../../components/ui/Cards';

export const metadata = { title: 'Mentors | Dselevura' };

const mentors = [
  { name: 'Chinedu Okafor', expertise: 'Fullstack Engineering', image: '/images/mentor-placeholder.svg', linkedin: '#' },
  { name: 'Amina Diallo', expertise: 'Product Design', image: '/images/mentor-placeholder.svg', linkedin: '#' },
  { name: 'Tunde Adebayo', expertise: 'DevOps & Cloud', image: '/images/mentor-placeholder.svg', linkedin: '#' },
  { name: 'Lerato Maseko', expertise: 'Data Engineering', image: '/images/mentor-placeholder.svg', linkedin: '#' },
  { name: 'Samuel K.', expertise: 'Frontend Architecture', image: '/images/mentor-placeholder.svg', linkedin: '#' },
  { name: 'Nia Mensah', expertise: 'Backend Systems', image: '/images/mentor-placeholder.svg', linkedin: '#' }
];

export default function MentorsPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Mentors</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">Experienced builders guiding you with code reviews, design critiques, and career direction.</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mentors.map(m => <MentorCard key={m.name} {...m} />)}
      </div>
    </div>
  );
}
