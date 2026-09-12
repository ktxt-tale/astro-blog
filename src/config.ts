import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ktxt-tale.github.io/astro-blog/",
  author: "KTXT",
  desc: "A product builder portfolio for projects, experiments, and writing.",
  title: "KTXT",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ktxt-tale",
    linkTitle: "KTXT on GitHub",
    active: true,
  },
  { name: "Facebook", href: "#", linkTitle: "Facebook", active: false },
  { name: "Instagram", href: "#", linkTitle: "Instagram", active: false },
  { name: "LinkedIn", href: "#", linkTitle: "LinkedIn", active: false },
  { name: "Mail", href: "#", linkTitle: "Email", active: false },
  { name: "Twitter", href: "#", linkTitle: "Twitter", active: false },
  { name: "Twitch", href: "#", linkTitle: "Twitch", active: false },
  { name: "YouTube", href: "#", linkTitle: "YouTube", active: false },
  { name: "WhatsApp", href: "#", linkTitle: "WhatsApp", active: false },
  { name: "Snapchat", href: "#", linkTitle: "Snapchat", active: false },
  { name: "Pinterest", href: "#", linkTitle: "Pinterest", active: false },
  { name: "TikTok", href: "#", linkTitle: "TikTok", active: false },
  { name: "CodePen", href: "#", linkTitle: "CodePen", active: false },
  { name: "Discord", href: "#", linkTitle: "Discord", active: false },
  { name: "GitLab", href: "#", linkTitle: "GitLab", active: false },
  { name: "Reddit", href: "#", linkTitle: "Reddit", active: false },
  { name: "Skype", href: "#", linkTitle: "Skype", active: false },
  { name: "Steam", href: "#", linkTitle: "Steam", active: false },
  { name: "Telegram", href: "#", linkTitle: "Telegram", active: false },
  { name: "Mastodon", href: "#", linkTitle: "Mastodon", active: false },
];
