import type { Site } from "@/content/types";

const typeLabel: Record<Site["type"], string> = {
  blog: "Blog",
  tool: "Tool",
  project: "Project",
  other: "Other",
};

export default function Sites({ sites }: { sites: Site[] }) {
  if (sites.length === 0) return null;

  return (
    <section id="sites" className="border-t border-zinc-800/60 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          On this domain
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {sites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target={site.internal ? undefined : "_blank"}
              rel={site.internal ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-zinc-100">{site.title}</span>
                  <span className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-zinc-500">
                    {typeLabel[site.type]}
                  </span>
                </div>
                <p className="text-sm text-zinc-500">{site.description}</p>
              </div>
              <span className="ml-4 shrink-0 text-zinc-600 transition-colors group-hover:text-violet-400">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
