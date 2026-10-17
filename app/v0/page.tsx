import ConstructionWrapper from "../ConstructionWrapper";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <ConstructionWrapper />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
          Under Construction
        </span>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Something&apos;s
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            coming soon
          </span>
        </h1>

        <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
          This site is being crafted. Good things take time.
        </p>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

        <a
          href="/test"
          className="pointer-events-auto rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-medium text-violet-400 transition-colors hover:bg-violet-500/20 hover:text-violet-300"
        >
          Preview →
        </a>
      </div>
    </main>
  );
}
