import type { SiteContent } from "./types";

const content: SiteContent = {
  person: {
    name: "Your Name",
    role: "Software Engineer",
    tagline: "I build things for the web.",
    bio: "A short bio about yourself. What you work on, what you care about, what you're currently learning.",
    links: {
      github: "https://github.com/TNTErick",
      email: "xyqz.pw@gmail.com",
    },
  },

  projects: [
    {
      id: "personal-site",
      title: "Personal Site",
      description: "This site. A versioned personal homepage built with Next.js and Three.js.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Three.js"],
      repo: "https://github.com/TNTErick/personal-site",
      featured: true,
    },
  ],

  sites: [
    {
      id: "blog",
      title: "Blog",
      description: "Writing about software, tools, and ideas.",
      url: "/blog",
      type: "blog",
      internal: true,
    },
    {
      id: "cv",
      title: "CV",
      description: "My full curriculum vitae.",
      url: "/cv",
      type: "other",
      internal: true,
    },
  ],
};

export default content;
