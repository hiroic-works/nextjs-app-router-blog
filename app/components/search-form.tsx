"use client";

import { useRef } from "react";

export default function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = () => {
    let val = "";
    if (typeof inputRef.current?.value === "string") {
      val = encodeURIComponent(inputRef.current?.value);
    }
    location.href = `/search?q=${val}`;
  };
  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="search"
        id="search-dropdown"
        className="block p-1.5 z-20 bg-gray-50 rounded border border-gray-300 focus:border-black focus:outline-none"
        placeholder="記事検索"
      />
      <button
        type="button"
        onClick={submitHandler}
        className="absolute top-0 right-0 p-1.5 text-sm font-medium text-white bg-black rounded-r border border-black hover:bg-slate-500 focus:outline-none focus:ring-black"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
