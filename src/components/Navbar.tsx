// Navbar.tsx
"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (query: string) => {
    console.log(query);
    // Add your search logic here
  };

  const handleClose = () => {
    setNavOpen(false);
  };

  return (
    <div className="w-full">
      <nav className="flex flex-col justify-around items-center py-5 px-4    w-full fixed bg-white z-50">
        <div className="flex w-full items-center justify-between relative">
          <div className="flex items-center space-x-6">
            <Image
              src="/hamburger.png"
              alt="Grocery Store"
              width={18}
              height={18}
              className="text-black cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-base font-thin italic text-slate-900 tracking-widest">
            <p className="md:text-2xl  capitalize">eien handmade</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setNavOpen(!isNavOpen)}
            >
              <Image
                src="/magnify.png"
                alt="Search"
                width={18}
                height={18}
                className="text-black hover:opacity-80 transition-opacity"
              />
            </motion.button>
            <Image
              src="/user.png"
              alt="User"
              width={26}
              height={26}
              className="text-black hidden md:block hover:opacity-80 transition-opacity cursor-pointer"
            />
            <Image
              src="/trolley.png"
              alt="Cart"
              width={24}
              height={24}
              className="text-black hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            ref={searchBarRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 px-4 py-3"
          >
            <SearchBar 
              onSearch={handleSearch} 
              onClose={handleClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};