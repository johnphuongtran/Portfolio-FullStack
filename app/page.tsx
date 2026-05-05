import type { ReactNode } from "react";
import { ContactForm } from "@/app/components/ContactForm";

const profile = {
  name: "John Tran",
  headline:
    "HRIS Technical Solutions Analyst · integrations developer (Boomi, UKG Pro WFM & Payroll)",
  location: "Houston, Texas",
  summary:
    "Results-driven HRIS analyst focused on cloud integrations and reliable data movement between HR and workforce systems. I design and maintain integrations in Boomi for UKG Pro Workforce Management, including Workforce Management API flows, scripting (Python, Groovy), and secure file exchange. I’ve also built and supported payroll-side import pipelines—file layouts, field mappings, SFTP/PGP, and disciplined testing—to keep UKG Pro Payroll imports accurate and auditable. I like partnering with stakeholders to translate messy requirements into integrations that hold up in production.",
  links: {
    email: "mailto:johntran1055@gmail.com",
    github: "https://github.com/johnphuongtran",
    linkedin: "https://www.linkedin.com/in/john-tran-0197b7253/",
    resume: "/resume.pdf",
  },
};

/** Reverse chronological — Mitsubishi Heavy Industries America */
const experience = [
  {
    company: "Mitsubishi Heavy Industries America",
    location: "Houston, TX",
    title: "Technical Solutions Analyst — Integrations",
    dates: "October 2025 – Present",
    highlights: [
      "Design, develop, and maintain client integrations with Boomi for UKG Pro WFM; align technical delivery with business and security expectations.",
      "Build Python and Groovy ETL-style scripts to extract, transform, and load data for downstream payroll and workforce processes.",
      "Use the Workforce Management API to extract and update UKG WFM data where API-first patterns fit.",
      "Implement secure file transfers using PGP encryption and hardened transmission patterns.",
      "Serve as a primary technical contact for Workforce Management and UKG Pro Payroll questions—support, troubleshooting, and process improvement.",
    ],
  },
  {
    company: "Mitsubishi Heavy Industries America",
    location: "Houston, TX",
    title: "Jr. HRIS Analyst",
    dates: "May 2024 – October 2025",
    highlights: [
      "Designed file structures and field mappings for integrating SuccessFactors Employee Central with UKG Pro Payroll; reduced import errors through rigorous testing and clear specs.",
      "Documented daily file transfers: field requirements, encryption (PGP), and secure SFTP delivery.",
      "Provided tiered HRIS support (cases, SLAs), stakeholder coordination, documentation, and vendor/partner collaboration on incidents and releases.",
      "Contributed to UKG Pro rollout execution across multiple entities (including US and Canadian companies), improving workflows for large employee populations.",
    ],
  },
  {
    company: "Mitsubishi Heavy Industries America",
    location: "Houston, TX",
    title: "HRIS Specialist",
    dates: "October 2023 – May 2024",
    highlights: [
      "Day-to-day HR/payroll application support, triage, and guidance for new and existing users.",
      "Partnered on requirements, testing, security, and integration touchpoints with HR, vendors, and architecture.",
      "Created and maintained process documentation and user-facing guides.",
    ],
  },
  {
    company: "United Parcel Service",
    location: "Stafford, TX",
    title: "Human Resources Supervisor (Seasonal)",
    dates: "August 2022 – January 2023",
    highlights: [
      "Led peak-season hiring coordination across 20+ roles; reviewed high volumes of applications and supported onboarding for hundreds of new hires weekly.",
    ],
  },
  {
    company: "United Parcel Service",
    location: "Stafford, TX",
    title: "Human Resources Intern — Co-Operations (Temporary)",
    dates: "August 2021 – January 2022",
    highlights: [
      "Supported hiring and staffing operations; scheduled interviews and assisted with background checks and I-9 processing.",
    ],
  },
];

const spotlight = [
  {
    name: "UKG Pro WFM integrations (Boomi)",
    description:
      "End-to-end integration work on UKG Pro Workforce Management: Boomi processes, API usage where appropriate, transformation logic, and operational hardening so schedules and workforce data stay consistent.",
    stack: ["Boomi", "UKG Pro WFM", "Workforce Management API", "Python", "Groovy"],
    href: null as string | null,
    demo: null as string | null,
  },
  {
    name: "Payroll import & file-based integrations",
    description:
      "Payroll-focused pipelines for UKG Pro Payroll: file layouts, mapping discipline, SFTP/PGP, testing cycles, and documentation aimed at clean imports and fewer production surprises.",
    stack: ["UKG Pro Payroll", "SFTP", "PGP", "SuccessFactors EC", "SQL"],
    href: null,
    demo: null,
  },
];

const skillGroups = [
  {
    label: "Integration & platforms",
    items: [
      "Boomi",
      "UKG Pro WFM",
      "UKG Pro Payroll",
      "Workforce Management API",
      "SuccessFactors",
      "SFTP / secure file exchange",
      "PGP encryption",
    ],
  },
  {
    label: "Programming & data",
    items: ["Python", "Groovy", "SQL", "MySQL", "ETL-style transformations"],
  },
  {
    label: "HRIS ecosystem",
    items: ["Paylocity", "ADP", "Smartsheet", "E-Verify / I-9", "Microsoft Excel"],
  },
  {
    label: "Web & engineering coursework",
    items: ["HTML", "CSS", "JavaScript", "Full-stack fundamentals"],
  },
];

const certifications = [
  "Boomi Integrations — Professional Developer · Associate Developer · Associate Architect",
  "UKG Pro WFM — Boomi Empowerment · System Management (Advanced)",
  "UKG Pro Payroll — BI Reporting (Advanced) · System Management (Advanced)",
  "University of Houston — Corporate Entrepreneurship (Wolff Center)",
  "University of Houston — Lean Six Sigma Yellow Belt (Cullen College of Engineering)",
];

const education = [
  {
    school: "University of Houston — Cullen College of Engineering",
    degree: "Bachelor of Science, Computer Information Systems · Minor in Business Administration",
    dates: "",
    detail: "Honors: Cum Laude · Financed the majority of education through employment.",
    extras: [
      "Officer, UH Powerlifting Club — registration and member mentorship.",
      "Member, Asian Business Student Association.",
    ],
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
            <a href="#spotlight" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Spotlight
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
            if you want the résumé button to download a PDF.
          </p>
        </div>

        <Section id="about" title="About">
          <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            Fluent in English and Vietnamese.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.company}-${job.title}-${job.dates}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{job.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
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

        <Section id="spotlight" title="Spotlight">
          <ul className="grid gap-8 sm:grid-cols-1">
            {spotlight.map((item) => (
              <li
                key={item.name}
                className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{item.name}</h3>
                  {(item.href ?? item.demo) ? (
                    <div className="flex flex-wrap gap-3 text-sm">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-sky-700 hover:underline dark:text-sky-400"
                        >
                          Link
                        </a>
                      ) : null}
                      {item.demo ? (
                        <a
                          href={item.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-sky-700 hover:underline dark:text-sky-400"
                        >
                          Demo
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
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

        <Section id="skills" title="Skills & certifications">
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
          <div className="mt-10">
            <h3 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">Certifications</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {certifications.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-6">
            {education.map((edu) => (
              <li key={edu.school}>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{edu.school}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{edu.degree}</p>
                {edu.dates ? <p className="mt-1 text-sm text-zinc-500">{edu.dates}</p> : null}
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">{edu.detail}</p>
                {edu.extras?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.extras.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                ) : null}
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
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </main>
    </>
  );
}
