import type { ReactNode } from "react";
import { ContactForm } from "@/app/components/ContactForm";

const profile = {
  name: "Your Name",
  headline: "Software engineer · building reliable, user-focused products",
  location: "City, Country · open to remote",
  summary:
    "Replace this with a concise pitch: your core strengths, domain (e.g. web, data, infra), and what roles you want. Keep it under three sentences.",
  links: {
    email: "mailto:you@example.com",
    github: "https://github.com/johnphuongtran",
    linkedin: "https://www.linkedin.com/in/your-profile",
    resume: "/resume.pdf",
  },
};

const experience = [
  {
    company: "Company",
    title: "Role title",
    dates: "Month Year – Present",
    highlights: [
      "Impact-focused bullet with outcome (metrics if real).",
      "Tech you used and scope you owned.",
      "Another bullet recruiters can scan in seconds.",
    ],
  },
  {
    company: "Previous company",
    title: "Earlier role",
    dates: "Month Year – Month Year",
    highlights: [
      "Problem → what you shipped → result.",
      "Keep bullets parallel and easy to skim.",
    ],
  },
];

const projects = [
  {
    name: "Project name",
    description:
      "One or two sentences: what it does, who it’s for, and why it matters.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/",
    demo: "https://",
  },
  {
    name: "Another project",
    description: "Short description with your role called out clearly.",
    stack: ["Python", "PostgreSQL"],
    href: "https://github.com/",
    demo: null,
  },
];

const skillGroups = [
  { label: "Languages", items: ["TypeScript", "Python", "SQL"] },
  { label: "Frameworks & tools", items: ["Next.js", "React", "Git", "Docker"] },
];

const education = [
  {
    school: "University name",
    degree: "Degree · Major",
    dates: "Graduation or expected",
    detail: "Honors, coursework, or clubs—only if they strengthen your story.",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-zinc-200/80 py-14 first:border-t-0 first:pt-8 dark:border-zinc-800/80 md:py-16"
    >
      <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[color-mix(in_oklab,var(--background)_88%,transparent)] backdrop-blur-md dark:border-zinc-800/80">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            {profile.name}
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              About
            </a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Experience
            </a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Projects
            </a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Skills
            </a>
            <a href="#education" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Education
            </a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6 pb-24">
        <div className="pt-10 md:pt-14">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.location}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 md:text-xl dark:text-zinc-300">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.links.resume}
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              Download résumé
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
            <a
              href={profile.links.email}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Email
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            Add <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.7rem] dark:bg-zinc-800">public/resume.pdf</code>{" "}
            for the résumé button to work.
          </p>
        </div>

        <Section id="about" title="About">
          <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {profile.summary}
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.company}-${job.title}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{job.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{job.company}</p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">{job.dates}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 marker:text-zinc-400 dark:text-zinc-300">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="grid gap-8 sm:grid-cols-1">
            {projects.map((project) => (
              <li
                key={project.name}
                className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{project.name}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sky-700 hover:underline dark:text-sky-400"
                    >
                      Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-700 hover:underline dark:text-sky-400"
                      >
                        Live demo
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-white px-2 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 dark:ring-zinc-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">{group.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-6">
            {education.map((edu) => (
              <li key={edu.school}>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{edu.school}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{edu.degree}</p>
                <p className="mt-1 text-sm text-zinc-500">{edu.dates}</p>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">{edu.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-6 max-w-xl text-zinc-700 dark:text-zinc-300">
            Reach out with opportunities or questions — I&apos;ll reply as soon as I can.
          </p>
          <ContactForm />
        </Section>

        <footer className="mt-16 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} {profile.name}. Update copy in <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-xs dark:bg-zinc-800">app/page.tsx</code>.</p>
        </footer>
      </main>
    </>
  );
}
