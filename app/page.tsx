import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Computer Science Student & Developer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900">
          Hi, I&apos;m Abhi Shah.
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-700">
          I am a Computer Science student interested in software engineering,
          web development, and building practical applications. I enjoy learning
          modern technologies like JavaScript, React, Next.js, and Tailwind CSS
          while improving my problem-solving and coding skills.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            View My Work
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-800 hover:bg-gray-100"
          >
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}