import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, ArrowUpDown } from "lucide-react";
import { useTranslations } from "next-intl"; // declare this import


export const Toolbar = ({
  onLayoutChange,
  onSortChange,
  sortOption,
  onFilterClick
  
}: {
  onLayoutChange: (layout: string) => void;
  onSortChange: (value: string) => void;
  sortOption: string;
  onFilterClick: () => void; 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLayout, setActiveLayout] = useState("3col"); // Track the active layout
  const t = useTranslations("General");

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
<div className="w-full h-14 flex items-center justify-between border-y border-gray-300 px-3 md:px-6 bg-white text-black">

  {/* Grid Layout Icons - Move to the right on mobile */}
  <div className="flex  space-x-4 order-2 md:order-1">

    {/* 4 col */}


    {/* 5 col */}
    <button onClick={() => handleLayoutChange("5col")}>
      <Image
        src={"/gridx4.png"}
        alt="5 Column Layout"
        width={20}
        height={20}
        className={`hover:opacity-80 transition-opacity cursor-pointer hidden md:block ${
          activeLayout === "5col" ? "opacity-100" : "opacity-50"
        }`}
      />
    </button>
    <button onClick={() => handleLayoutChange("4col")}>
      <Image
        src={"/gridx3.png"}
        alt="4 Column Layout"
        width={20}
        height={20}
        className={`hover:opacity-80 transition-opacity cursor-pointer hidden md:block ${
          activeLayout === "4col" ? "opacity-100" : "opacity-50"
        }`}
      />
    </button>
    {/* 2 */}
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
    {/* 1 */}
    <button onClick={() => handleLayoutChange("1col")}>
      <Image
        src={"/black-square.png"}
        alt="1 Column Layout"
        width={20}
        height={20}
        className={`hover:opacity-80 transition-opacity cursor-pointer md:hidden ${
          activeLayout === "1col" ? "opacity-100" : "opacity-50"
        }`}
      />
    </button> 
  </div>

  {/* Product Count - Center */}
  <div className="absolute flex items-end gap-1 left-1/2 transform -translate-x-1/2 text-sm font-thin italic text-slate-900 tracking-widest">
    <h1 className="text-base hidden md:block">10</h1> <h1 className="text-base hidden md:block">{t("products")}</h1>
    <button
        className="md:hidden"
        onClick={onFilterClick} // Trigger the filter click handler
      >
        Filter
      </button>
  </div>


  {/* Sort Dropdown - Move to the left on mobile */}
  <div className="relative inline-block order-1 md:order-2">
    <div className="flex items-center justify-end space-x-2 h-full">
      <button
        aria-labelledby="sort-label"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center justify-between md:w-48 md:px-3 md:py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden md:block truncate text-gray-900">
          {sortOption ? (
            options.find((opt) => opt.value === sortOption)?.label
          ) : (
            <span> {t("sort")}</span>
          )}
        </span>
        <span className="block md:hidden"> {t("sort")}</span>

        <ChevronDown className="w-4 h-4 ml-2 text-gray-900" />
      </button>
    </div>

    {isOpen && (
      <div className="absolute top-8 md:-right-3 z-10 w-48 mt-1 bg-white rounded-md shadow-lg">
        <ul role="listbox" className="py-1">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={sortOption === option.value}
              className={`flex items-center p-3 py-3 text-sm cursor-pointer ${
                sortOption === option.value
                  ? "bg-blue-50 text-amber-700"
                  : "text-gray-900"
              } hover:bg-blue-50 hover:text-amber-700`}
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
