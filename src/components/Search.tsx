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
    <div className="search-shell">
      <label className="search-box">
        <span className="sr-only">Search writing</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={inputVal}
          onChange={e => setInputVal(e.currentTarget.value)}
          placeholder="Search ideas, tools, tags…"
          autoComplete="off"
          className="search-input"
        />
        {inputVal && (
          <button type="button" onClick={() => setInputVal("")} className="clear-btn" aria-label="Clear search">
            Clear
          </button>
        )}
      </label>

      <div className="search-meta">
        {inputVal.trim().length > 1
          ? `${results.length} ${results.length === 1 ? "result" : "results"}`
          : "Type at least 2 characters"}
      </div>

      {inputVal.trim().length > 1 && results.length === 0 && (
        <div className="empty-state">
          <p>No matching notes yet.</p>
          <span>Try a broader keyword or browse Writing instead.</span>
        </div>
      )}

      <ul className="result-list">
        {results.map(({ item }) => (
          <li key={item.slug} className="result-item">
            <a href={`${base}posts/${item.slug}/`} className="result-link">
              <div className="result-topline">
                <span>{new Date(item.data.pubDatetime).getFullYear()}</span>
                {item.data.tags?.slice(0, 2).map(tag => <span key={tag}>#{tag}</span>)}
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="result-cta">Open note →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
