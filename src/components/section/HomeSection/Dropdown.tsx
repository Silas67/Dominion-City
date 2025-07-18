"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { countries } from "countries-list";
import { Categories } from "@/components/constant";

export default function Dropdown({ Con, Bg }: { Con: boolean; Bg: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(
    Con ? "Select Country" : "Select Category"
  );

  const dropRef = useRef<HTMLDivElement>(null);
  const countryList = Object.values(countries).map((country) => country.name);
  const category = Object.values(Categories).map((item) => item.Category);
  const filteredList = (Con ? countryList : category).filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setSearchTerm(item);
    setIsOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex w-full" ref={dropRef}>
        <div className="relative w-full">
          {/* Dropdown button */}
          <div
            className={`flex w-full justify-between items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 ${
              Bg ? "bg-transparent text-white" : "bg-white text-primary"
            } text-sm font-medium  h-12`}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpen(true)}
              placeholder={selectedItem}
              className={`outline-none w-full placeholder:text-primary ${
                Bg
                  ? "bg-transparent text-white placeholder:text-white"
                  : "bg-white text-primary placeholder:text-primary"
              }`}
            />
            <button type="button" onClick={toggleDropdown}>
              <FaCaretDown
                className={`text-primary ${Bg ? "text-white" : "text-primary"}`}
              />
            </button>
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 h-56 overflow-y-scroll rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
              <div className="py-1">
                {filteredList.length > 0 ? (
                  filteredList.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-2 text-sm text-gray-500">
                    No matches found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
