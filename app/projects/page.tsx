 "use client";

import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "JavaScript Counter and To-Do List",
    description:
      "A small interactive JavaScript page with a working counter and a dynamic to-do list. This project helped me practice DOM selection, event listeners, createElement, and appendChild.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It includes multiple pages, shared navigation, reusable components, and project filtering.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Student Data Practice Project",
    description:
      "A practice project idea using Python to organize and summarize student-related data. This project represents my interest in problem solving and data analysis.",
    tags: ["Python", "Data Analysis"],
  },
  {
    id: 4,
    title: "Responsive Web Layout Practice",
    description:
      "A web development practice project focused on creating clean page layouts, reusable sections, and responsive design using modern frontend tools.",
    tags: ["HTML", "CSS", "React"],
  },
];

const allTags = [
  "All",
  ...Array.from(new Set(projects.flatMap((project) => project.tags))),
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Projects</h1>

      <p className="mb-8 max-w-3xl leading-8 text-gray-700">
        These projects show my practice with JavaScript, React, Next.js,
        Tailwind CSS, and frontend development. Use the filter buttons below to
        view projects by technology.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              activeFilter === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </section>
    </main>
  );
}
