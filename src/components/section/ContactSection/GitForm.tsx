"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Contact = [
  { Category: "Dr David Ogbeuli" },
  { Category: "Dominion City Call Center" },
];

const Forms = [
  { Category: "Give Your Life To Christ" },
  { Category: "Pledge & Vows" },
  { Category: "Patnership" },
  { Category: "Voluteering" },
  { Category: "Counseling" },
  { Category: "Feedback" },
];

export default function Dropdown({ Con }: { Con: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(
    Con ? "Select Category" : "Who do you want to Contact"
  );

  const dropRef = useRef<HTMLDivElement>(null);
  const category = Object.values(Contact).map((item) => item.Category);
  const category2 = Object.values(Forms).map((item) => item.Category);
  const filteredList = (Con ? category2 : category).filter((item) =>
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
            className={`flex w-full justify-between items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium h-12 bg-background`}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpen(true)}
              placeholder={selectedItem}
              className={`outline-none w-full placeholder:text-gray-400`}
            />
            <button type="button" onClick={toggleDropdown}>
              <FaCaretDown className={`text-gray-400 `} />
            </button>
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 h-fit overflow-y-scroll rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
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
