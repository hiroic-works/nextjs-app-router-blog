"use client";

import { useScroll } from "@/app/libs/hooks/useScroll";

export default function Footer() {
  const { isShowScroll, scrollTop } = useScroll();
  return (
    <>
      <button
        onClick={scrollTop}
        className={`${
          isShowScroll
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity duration-300 fixed right-8 bottom-8 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white`}
      >
        <svg
          className={`rotate-180 w-7 h-7`}
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </>
  );
}
