"use client";

import { Category } from "@/app/types/posts";
import SearchForm from "@/app/components/search-form";
import Link from "next/link";
import { useState } from "react";

export default function Navgation({ categories }: { categories: Category[] }) {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeModal = () => {
    setIsNavOpen(false);
    setIsDropDownMenuOpen(false);
  };

  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <div
        className={`${
          isNavOpen ? "" : "hidden"
        } fixed top-0 left-0 z-10 w-full h-full bg-black/60 md:static`}
      />
      <button
        onClick={() => {
          setIsNavOpen((prev) => !prev);
        }}
        className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden md:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded={isNavOpen}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isNavOpen ? "" : "hidden"
        } w-full absolute z-10 top-0 left-0 md:static md:block md:w-auto`}
      >
        <ul className="flex flex-col items-center font-medium p-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:rounded-lg md:border-0 md:bg-white">
          <li>
            <Link
              onClick={closeModal}
              href="/"
              className="block py-2 pl-3 pr-4 rounded transition md:hover:border-b md:hover:border-gray-400 md:p-0 md:pb-0"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => {
                setIsDropDownMenuOpen((prev) => !prev);
              }}
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 transition md:hover:border-b md:hover:border-gray-400 md:p-0 md:pb-0 md:w-auto"
            >
              Category
              <svg
                className={`${
                  isDropDownMenuOpen ? "rotate-180" : ""
                } w-5 h-5 ml-1`}
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
            {/* <!-- Dropdown menu --> */}
            <div
              className={`${
                isDropDownMenuOpen ? "" : "hidden"
              } static w-full top-8 -right-1/2 z-10 font-normal bg-white divide-y divide-gray-100 md:shadow md:w-44 md:rounded-lg md:absolute`}
            >
              <ul
                className="py-2 text-sm"
                aria-labelledby="dropdownLargeButton"
              >
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      onClick={closeModal}
                      href={`/category/${cat.id}`}
                      className="block px-4 py-2 md:hover:bg-gray-100"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link
              onClick={closeModal}
              href="/about"
              className="block py-2 pl-3 pr-4 rounded transition md:hover:border-b md:hover:border-gray-400 md:p-0 md:pb-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeModal}
              href="/contact"
              className="block py-2 pl-3 pr-4 rounded transition md:hover:border-b md:hover:border-gray-400 md:p-0 md:pb-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <SearchForm />
          </li>
        </ul>
        <svg
          onClick={closeModal}
          className="absolute top-2 right-2 w-10 h-10 z-10 md:hidden"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
