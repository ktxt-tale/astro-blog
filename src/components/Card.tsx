import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, tags = [] } = frontmatter;
  const Heading = secHeading ? "h2" : "h3";

  return (
    <li className="group border-b border-skin-line py-7 last:border-b-0 sm:py-8">
      <a href={href} className="block focus-visible:no-underline">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] opacity-55">
          <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
          {tags.slice(0, 2).map(tag => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <Heading
          style={{ viewTransitionName: slugifyStr(title) }}
          className="max-w-3xl text-xl font-semibold tracking-tight transition group-hover:text-skin-accent sm:text-2xl"
        >
          {title}
        </Heading>
        <p className="mt-3 max-w-2xl text-sm leading-6 opacity-65 sm:text-base sm:leading-7">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-skin-accent">
          Read article <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </a>
    </li>
  );
}
