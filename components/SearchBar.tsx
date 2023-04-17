"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function SearchBar() {
  return (
    <div className="flex flex-row justify-end items-center relative sm:text-sm md:text-lg lg:text-lg">
      <input
        className=" placeholder:text-gray-400  block bg-[#232229] w-full outline-none rounded-md py-2 sm:py-4 md:py-4 lg:py-4 pr-9 pl-3 shadow-sm "
        type="text"
        placeholder="Search for task..."
        name="search"
      />
      <MagnifyingGlassIcon
        // size={20}
        className="absolute text-gray-50 place-self-center mr-4 cursor-pointer h-6 w-6"
      />
    </div>
  );
}

export default SearchBar;
