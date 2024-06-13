import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "Mdx Blog Template",
  description:
    "MDX Blog Template is a simple implementation of a markdown static blog. Built with Next.js 14 and velite js.",
  author: "devbertskie",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/devbertskie",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
