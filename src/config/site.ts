import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "Mdx Blog Template",
  description:
    "I'm building a web app with Next.js 13 and open sourcing everything. Follow along as we figure this out together.",
  author: "John Doe",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/devbertskie",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
