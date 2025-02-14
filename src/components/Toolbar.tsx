
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, ArrowUpDown } from "lucide-react";
import { useTranslations } from 'next-intl'; // declare this import
export const Toolbar = ({
    onLayoutChange,
    onSortChange,
    sortOption,
  }: {
    onLayoutChange: (layout: string) => void;
    onSortChange: (value: string) => void;
    sortOption: string;
  }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [activeLayout, setActiveLayout] = useState("3col"); // Track the active layout
      const t = useTranslations('General'); 
  
    const handleSortChange = (value: string) => {
      onSortChange(value); // Pass the selected sort option to the parent
      setIsOpen(false);
    };
  
    const handleLayoutChange = (layout: string) => {
      setActiveLayout(layout); 
      onLayoutChange(layout); 
    };
  
    const options = [
      {
        value: "price_asc",
        label: "Price: Low to High",
        icon: <ArrowUpDown className="w-4 h-4" />,
      },
      {
        value: "price_desc",
        label: "Price: High to Low",
        icon: <ArrowUpDown className="w-4 h-4" />,
      },
      {
        value: "name_asc",
        label: "Name: A to Z",
        icon: <ArrowUpDown className="w-4 h-4" />,
      },
      {
        value: "name_desc",
        label: "Name: Z to A",
        icon: <ArrowUpDown className="w-4 h-4" />,
      },
    ];
  
    return (
      <div className="w-full h-14 flex items-center justify-between border-y border-gray-300 px-6 bg-white text-black">
        {/* Grid Layout Icons */}
        <div className="flex space-x-4">
          {/* 3 col */}
          <button onClick={() => handleLayoutChange("3col")}>
            <Image
              src={"/gridx2.png"} 
              alt="3 Column Layout"
              width={20}
              height={20}
              className={`hover:opacity-80 transition-opacity cursor-pointer ${
                activeLayout === "3col" ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
          {/* 4 col */}
          <button onClick={() => handleLayoutChange("4col")}>
            <Image
              src={"/gridx3.png"} // Swap image based on active layout
              alt="4 Column Layout"
              width={20}
              height={20}
              className={`hover:opacity-80 transition-opacity cursor-pointer ${
                activeLayout === "4col" ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
          {/* 5 col */}
          <button onClick={() => handleLayoutChange("5col")}>
            <Image
              src={"/gridx4.png"} // Swap image based on active layout
              alt="5 Column Layout"
              width={20}
              height={20}
              className={`hover:opacity-80 transition-opacity cursor-pointer ${
                activeLayout === "5col" ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
        </div>
  
        {/* Product Count */}
        <div className="text-gray-700 text-sm flex justify-center gap-1  font-thin italic ">10 <h1>{t('products')}</h1></div>
  
        {/* Sort Dropdown */}
        <div className="relative inline-block">
          <div className="flex items-center space-x-2">
            <label
              id="sort-label"
              className="text-sm font-medium text-gray-700"
            >
              {t('sort')}
            </label>
  
            <button
              aria-labelledby="sort-label"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              className="flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="block truncate text-gray-900">
                {sortOption
                  ? options.find((opt) => opt.value === sortOption)?.label
                  : <span>{t("select_option")}</span>}
              </span>
              <ChevronDown className="w-4 h-4 ml-2 text-gray-900" />
            </button>
          </div>
  
          {isOpen && (
            <div className="absolute z-10 w-48 mt-1 bg-white rounded-md shadow-lg">
              <ul role="listbox" className="py-1">
                {options.map((option) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={sortOption === option.value}
                    className={`flex items-center px-3 py-2 text-sm cursor-pointer ${
                      sortOption === option.value
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-900"
                    } hover:bg-blue-50 hover:text-blue-700`}
                    onClick={() => handleSortChange(option.value)}
                  >
                    <span className="mr-2">{option.icon}</span>
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };