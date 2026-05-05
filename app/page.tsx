import type { ReactNode } from "react";
import { ContactForm } from "@/app/components/ContactForm";
import { HeroActions } from "@/app/components/HeroActions";
import { ProfilePhoto } from "@/app/components/ProfilePhoto";
import { SiteHeader } from "@/app/components/SiteHeader";

const profile = {
  name: "John Tran",
  headline:
    "HRIS Technical Solutions Analyst · integrations developer (Boomi, UKG Pro WFM & Payroll)",
  location: "Houston, Texas",
  summary:
    "HRIS analyst specializing in enterprise integrations and disciplined data exchange between HR, payroll, and workforce platforms. I design, implement, and support Boomi-based integrations for UKG Pro Workforce Management, including Workforce Management API patterns, transformation logic in Python and Groovy, and secure file-based workflows. I also deliver payroll import capabilities for UKG Pro Payroll—end-to-end file design, field mapping, SFTP/PGP controls, and structured testing—to improve accuracy, traceability, and operational readiness. I work closely with business and technical stakeholders to clarify requirements, mitigate risk, and ship integrations that remain maintainable after go-live.",
  links: {
    email: "mailto:johntran1055@gmail.com",
    github: "https://github.com/johnphuongtran",
    linkedin: "https://www.linkedin.com/in/john-tran-0197b7253/",
    resume: "/resume.pdf",
  },
  /** Place image at public/profile.jpg (or change path below). Supported: jpg, png, webp */
  photoSrc: "/profile.jpg",
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
];

type SpotlightItem = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  demo?: string;
};

const spotlight: SpotlightItem[] = [
  {
    name: "UKG Pro WFM integrations (Boomi)",
    description:
      "End-to-end integration work on UKG Pro Workforce Management: Boomi processes, API usage where appropriate, transformation logic, and operational hardening so schedules and workforce data stay consistent.",
    stack: ["Boomi", "UKG Pro WFM", "Workforce Management API", "Python", "Groovy"],
  },
  {
    name: "Payroll import & file-based integrations",
    description:
      "Payroll-focused pipelines for UKG Pro Payroll: file layouts, mapping discipline, SFTP/PGP, testing cycles, and documentation aimed at clean imports and fewer production surprises.",
    stack: ["UKG Pro Payroll", "SFTP", "PGP", "SuccessFactors EC", "SQL"],
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
      className="scroll-mt-20 border-t border-[var(--border)] py-14 md:py-16"
    >
      <h2 className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm md:p-8 dark:shadow-none ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader name={profile.name} />

      <main id="main-content" className="mx-auto max-w-5xl px-6 pb-24 pt-6 md:px-8 md:pt-10">
        <div className="mb-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm md:mb-16 md:p-10 dark:shadow-none">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
            <ProfilePhoto name={profile.name} src={profile.photoSrc} />
            <div className="min-w-0 flex-1 text-center md:text-left">
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">{profile.location}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
                {profile.name}
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600 md:mx-0 md:text-xl dark:text-zinc-300">
                {profile.headline}
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <HeroActions
                  linkedin={profile.links.linkedin}
                  github={profile.links.github}
                  email={profile.links.email}
                  resumePath={profile.links.resume}
                />
              </div>
            </div>
          </div>
        </div>

        <Section id="about" title="About">
          <Card>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {profile.summary}
            </p>
            <p className="mt-5 max-w-3xl border-t border-[var(--border)] pt-5 text-sm text-zinc-600 dark:text-zinc-400">
              Fluent in English and Vietnamese.
            </p>
          </Card>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="flex flex-col gap-6">
            {experience.map((job) => (
              <li key={`${job.company}-${job.title}-${job.dates}`}>
                <Card className="p-6 md:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{job.title}</h3>
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ""}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {job.dates}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed md:text-[0.9375rem]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500/90" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="spotlight" title="Spotlight">
          <ul className="flex flex-col gap-6">
            {spotlight.map((item) => (
              <li key={item.name}>
                <Card className="p-6 md:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.name}</h3>
                    {item.href ?? item.demo ? (
                      <div className="flex flex-wrap gap-3 text-sm">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-sky-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:text-sky-400"
                          >
                            Link
                          </a>
                        ) : null}
                        {item.demo ? (
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-sky-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:text-sky-400"
                          >
                            Demo
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base dark:text-zinc-300">
                    {item.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800 ring-1 ring-zinc-200/80 dark:bg-zinc-950 dark:text-zinc-200 dark:ring-zinc-700/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills & certifications">
          <Card>
            <div className="grid gap-10 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.label}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-zinc-100 px-2.5 py-1 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-[var(--border)] pt-8">
              <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Certifications</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {certifications.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500/90" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Section>

        <Section id="education" title="Education">
          <Card>
            {education.map((edu) => (
              <div key={edu.school}>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{edu.school}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{edu.degree}</p>
                {edu.dates ? <p className="mt-1 text-sm text-zinc-500">{edu.dates}</p> : null}
                <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{edu.detail}</p>
                {edu.extras?.length ? (
                  <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.extras.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </Card>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base dark:text-zinc-300">
              Reach out with opportunities or questions — I&apos;ll reply as soon as I can.
            </p>
            <ContactForm />
          </Card>
        </Section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-10 text-sm text-zinc-500 md:flex-row dark:text-zinc-500">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:hover:text-zinc-200"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:hover:text-zinc-200"
            >
              GitHub
            </a>
            <a
              href={profile.links.email}
              className="hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:hover:text-zinc-200"
            >
              Email
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
