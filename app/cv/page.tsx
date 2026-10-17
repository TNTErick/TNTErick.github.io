const experience = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    location: "Remote",
    bullets: [
      "Led rewrite of core data pipeline, reducing p99 latency by 60%.",
      "Mentored a team of four engineers across two product squads.",
      "Designed and shipped the public API consumed by 200+ enterprise clients.",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Full-Stack Engineer",
    period: "2019 — 2022",
    location: "San Francisco, CA",
    bullets: [
      "Built the initial product from zero to 50k monthly active users.",
      "Owned frontend architecture migration from CRA to Next.js.",
      "Integrated third-party payment and auth providers end-to-end.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    period: "2017 — 2019",
    location: "Remote",
    bullets: [
      "Delivered web applications for clients across e-commerce and fintech.",
      "Maintained long-term contracts with two returning clients.",
    ],
  },
];

const education = [
  {
    school: "National Taiwan University",
    degree: "B.S. Computer Science",
    period: "2013 — 2017",
  },
];

const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "Python", "Go", "Rust"],
  Frameworks: ["React", "Next.js", "Node.js", "FastAPI"],
  Infrastructure: ["Docker", "Kubernetes", "AWS", "Terraform"],
  Tools: ["Git", "PostgreSQL", "Redis", "GraphQL"],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-400">{title}</h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      {children}
    </section>
  );
}

export default function CV() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl space-y-16">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Your Name</h1>
          <p className="text-lg text-zinc-400">Software Engineer</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500">
            <a href="mailto:you@example.com" className="transition-colors hover:text-violet-400">
              you@example.com
            </a>
            <a href="https://github.com/you" className="transition-colors hover:text-violet-400">
              github.com/you
            </a>
            <a href="https://linkedin.com/in/you" className="transition-colors hover:text-violet-400">
              linkedin.com/in/you
            </a>
            <span>Taipei, Taiwan</span>
          </div>
        </header>

        {/* Summary */}
        <Section title="About">
          <p className="leading-relaxed text-zinc-400">
            Engineer with 7+ years building web products end-to-end. Comfortable owning
            full-stack features, designing APIs, and working in distributed teams. Interested
            in developer tooling, performance, and anything that ships fast.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company} className="group relative pl-5">
                <div className="absolute left-0 top-1.5 h-full w-px bg-white/10 group-last:h-2" />
                <div className="absolute left-[-3px] top-1.5 h-1.5 w-1.5 rounded-full bg-violet-500" />
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="font-semibold text-white">{job.role}</span>
                    <span className="ml-2 text-zinc-400">· {job.company}</span>
                  </div>
                  <span className="text-xs text-zinc-600">{job.period} · {job.location}</span>
                </div>
                <ul className="space-y-1">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {education.map((ed) => (
            <div key={ed.school} className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-semibold text-white">{ed.degree}</span>
                <span className="ml-2 text-zinc-400">· {ed.school}</span>
              </div>
              <span className="text-xs text-zinc-600">{ed.period}</span>
            </div>
          ))}
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="space-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex flex-wrap items-start gap-2">
                <span className="w-24 shrink-0 pt-0.5 text-xs text-zinc-600">{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
