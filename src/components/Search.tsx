import Fuse from "fuse.js";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CollectionEntry } from "astro:content";

export type SearchItem = {
  title: string;
  description: string;
  data: CollectionEntry<"blog">["data"];
  slug: string;
};

interface Props {
  searchList: SearchItem[];
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const base = import.meta.env.BASE_URL;

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ["title", "description", "data.tags"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.38,
      }),
    [searchList]
  );

  const results = inputVal.trim().length > 1 ? fuse.search(inputVal.trim()) : [];

  useEffect(() => {
    const searchStr = new URLSearchParams(window.location.search).get("q") ?? "";
    setInputVal(searchStr);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (inputVal.trim()) params.set("q", inputVal.trim());
    else params.delete("q");
    const query = params.toString();
    history.replaceState(history.state, "", window.location.pathname + (query ? `?${query}` : ""));
  }, [inputVal]);

  return (
    <div>
      <label className="relative flex items-center rounded-2xl border border-skin-line bg-skin-card/40 px-4 py-1 transition focus-within:border-skin-accent">
        <span className="sr-only">Search writing</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 opacity-45">
          <path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={inputVal}
          onChange={e => setInputVal(e.currentTarget.value)}
          placeholder="Search ideas, tools, tags…"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent px-3 py-4 text-base outline-none placeholder:opacity-40 sm:text-lg"
        />
        {inputVal && (
          <button type="button" onClick={() => setInputVal("")} className="rounded-lg px-2 py-1 text-xs font-medium opacity-50 hover:bg-skin-card hover:opacity-100" aria-label="Clear search">
            Clear
          </button>
        )}
      </label>

      <div className="mb-3 mt-4 text-xs uppercase tracking-[0.16em] opacity-45">
        {inputVal.trim().length > 1
          ? `${results.length} ${results.length === 1 ? "result" : "results"}`
          : "Type at least 2 characters"}
      </div>

      {inputVal.trim().length > 1 && results.length === 0 && (
        <div className="rounded-2xl border border-dashed border-skin-line px-5 py-10 text-center">
          <p className="font-medium">No matching notes yet.</p>
          <span className="mt-1 block text-sm opacity-50">Try a broader keyword or browse Writing instead.</span>
        </div>
      )}

      <ul>
        {results.map(({ item }) => (
          <li key={item.slug} className="border-b border-skin-line py-7 last:border-b-0">
            <a href={`${base}posts/${item.slug}/`} className="group block focus-visible:no-underline">
              <div className="mb-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] opacity-45">
                <span>{new Date(item.data.pubDatetime).getFullYear()}</span>
                {item.data.tags?.slice(0, 2).map(tag => <span key={tag}>#{tag}</span>)}
              </div>
              <h2 className="text-xl font-semibold tracking-tight transition group-hover:text-skin-accent sm:text-2xl">{item.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 opacity-60 sm:text-base sm:leading-7">{item.description}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-skin-accent">Open note <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
