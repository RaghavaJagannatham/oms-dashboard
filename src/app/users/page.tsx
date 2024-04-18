/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import React, { useState } from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
interface values{
  value: string; 
  label: string;
}

export default function UsersPage({}: Props) {

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to first option
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option:values) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <PageTitle title="Header here" className="mb-4"/>
      <div className="flex flex-col gap-5 w-3/4 border border-black p-4 mb-4">
      <div className="flex w-6/12">
        <label className="mt-4 mr-5">Filename:</label>
        <div className="relative h-11 w-full">
          <input placeholder="Standard"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label
            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Standard
          </label>
        </div>
      </div>
      <div className="flex w-4/12">
        <label htmlFor="file_input" className="block mt-2 mr-5 text-sm font-medium text-gray-900 dark:text-white">
        Uploadfile:
      </label>
      <input
        id="file_input"
        type="file"
        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        onChange={() => {}}
      />
      </div>
      <button className="bg-transparent w-1/4 hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          Button
        </button>

      </div>

      <div className="flex flex-col gap-5 w-3/4 border border-black p-4 mb-4">
      <div className="flex w-6/12">
        <label className="mt-4 mr-5">Filename:</label>
        <div className="relative inline-block w-full">
      <button
        className="relative z-10 flex items-center justify-between w-full h-11 border-b border-blue-gray-200 bg-transparent pl-4 pr-10 font-sans text-sm font-normal text-blue-gray-700 focus:outline-none focus:border-gray-500"
        onClick={toggleDropdown}
      >
        {selectedOption.label}
        <svg
          className="absolute right-4 top-3 w-5 h-5 pointer-events-none text-blue-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionChange(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
      <div className="flex w-4/12">
        <label htmlFor="file_input" className="block mt-2 mr-5 text-sm font-medium text-gray-900 dark:text-white">
        Uploadfile:
      </label>
      <input
        id="file_input"
        type="file"
        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        onChange={() => {}}
      />
      </div>
      <button className="bg-transparent w-1/4 hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          Button
        </button>

      </div>

      
    </div>
  );
}

