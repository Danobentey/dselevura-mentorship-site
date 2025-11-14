import { MentorCard } from "../../components/ui/Cards";

export const metadata = { title: "Mentors | Dselevura" };

const mentors = [
  {
    name: "Samuel Menim",
    expertise: "Software Engineering & DevOps",
    image: "/images/mentors/Samuel_Menim.png",
    linkedin: "https://www.linkedin.com/in/samuel-menim-0ba16813b/",
  },
  {
    name: "Emmanuel John",
    expertise: "Product Design",
    image: "/images/mentors/emmanuel_john.jpg",
    linkedin: "https://www.linkedin.com/in/john-emmanuel-3327a11a1/",
  },
  {
    name: "Daniel Obentey",
    expertise: "Fullstack Engineering",
    image: "/images/mentors/Daniel_Obentey.jpeg",
    linkedin: "https://www.linkedin.com/in/Daniel-Obentey/",
  },
];

export default function MentorsPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Mentors</h1>
      <p className="mt-4 max-w-prose text-charcoal/70">
        Experienced builders guiding you with code reviews, design critiques,
        and career direction.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {mentors.map((m) => (
          <MentorCard key={m.name} {...m} />
        ))}
      </div>
    </div>
  );
}
