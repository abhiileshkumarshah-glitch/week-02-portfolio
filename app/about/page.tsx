 const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Problem Solving",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">About Me</h1>

        <p className="mb-5 leading-8 text-gray-700">
          My name is Abhi Shah. I am a Computer Science student who is focused
          on becoming a strong software developer. I am interested in building
          full-stack applications, learning modern web tools, and writing clean,
          understandable code.
        </p>

        <p className="mb-8 leading-8 text-gray-700">
          This portfolio is part of my Week 2 lab project. It shows my practice
          with React components, Next.js pages, Tailwind styling, reusable
          components, and interactive features using state.
        </p>

        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Skills and Interests
        </h2>

        <ul className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg bg-gray-100 px-4 py-3 font-medium text-gray-800"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
