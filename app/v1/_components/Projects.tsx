import type { Project } from "@/content/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="font-semibold text-zinc-100">{project.title}</h3>
        <div className="flex shrink-0 gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 transition-colors hover:text-violet-400"
            >
              Live ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 transition-colors hover:text-violet-400"
            >
              Repo ↗
            </a>
          )}
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-zinc-800/60 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
