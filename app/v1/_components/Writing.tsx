import type { PostFrontmatter } from "@/content/types";

function PostItem({ post }: { post: PostFrontmatter }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex items-start justify-between gap-4 rounded-lg border border-transparent py-4 transition-colors hover:border-zinc-800 hover:bg-zinc-900/50 px-4 -mx-4"
    >
      <div className="min-w-0">
        <h3 className="mb-1 font-medium text-zinc-100 group-hover:text-violet-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-500 line-clamp-2">
          {post.summary}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-zinc-600">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <time className="shrink-0 font-mono text-xs text-zinc-600 mt-1">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>
    </a>
  );
}

export default function Writing({ posts }: { posts: PostFrontmatter[] }) {
  return (
    <section id="writing" className="border-t border-zinc-800/60 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Writing
          </h2>
          <a
            href="/blog"
            className="text-xs text-zinc-500 transition-colors hover:text-violet-400"
          >
            All posts →
          </a>
        </div>

        {posts.length === 0 ? (
          <p className="text-sm text-zinc-600">No posts yet. Coming soon.</p>
        ) : (
          <div className="divide-y divide-zinc-800/60">
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
