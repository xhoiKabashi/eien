"use client";
import { Toolbar } from "./Toolbar";
import { useState } from "react";
import Filters from "./ui/Filters";
import Card from "./Card";
import Chips from "./Chips";
import { FilterDrawer } from "./ui/FilterDrawer";

const products = [
  {
    id: 1,
    name: "Minimalist Black Epsom mix Lizard Leather Wallet",
    price: 35,
    image: "/American_Football_Glove_Wallet_Card_Holder_19.jpg",
    discount: null,
    category: "wallet",
    gender: "Unisex",
    inStock: true,
    color: "black",
    material: "full_grain",
  },
  {
    id: 2,
    name: "Minimalist Black Leather Card Holder - American",
    price: 55,
    image: "/baseball_wallet_19.jpg",
    discount: 36,
    category: "wallet",
    gender: "Unisex",
    inStock: true,
    color: "black",
    material: "full_grain",
  },
  {
    id: 3,
    name: "Minimalist Black Leather Card Holder - Baseball Glove",
    price: 45,
    image: "/Epsom_Leather_Card_Holder_Wallet_Slim_14.jpg",
    discount: null,
    category: "wallet",
    gender: "Unisex",
    inStock: true,
    color: "black",
    material: "full_grain",
  },
  {
    id: 4,
    name: "Minimalist Black Leather Card Holder - Natural Streaks",
    price: 29,
    image: "/Minimalist_Epsom_Leather_Card_Holder_-_Ocean_Crest_1.jpg",
    discount: "New",
    category: "wallet",
    gender: "Male",
    inStock: true,
    color: "red",
    material: "full_grain",
  },
  {
    id: 5,
    name: "Minimalist Black Leather Card Holder - Patina Finish",
    price: 20,
    image: "/Minimalist_Leather_Card_Holder_-_Natural_Streaks_1.jpg",
    discount: 47,
    category: "card_holder",
    gender: "Female",
    inStock: true,
    color: "black",
    material: "full_grain",
  },
  {
    id: 6,
    name: "Minimalist Black Pueblo Leather Card Holder - Stupid Alligator",
    price: 120,
    image: "/Pueblo_Leather_Minimalist_Card_Holder_Seashell_20.jpg",
    discount: 47,
    category: "card_holder",
    gender: "Male",
    inStock: true,
    color: "red",
    material: "genuine_leather",
  },
  {
    id: 7,
    name: "Minimalist Ble Lizard mix Water Epsom Card Holder - Ocean Crest",
    price: 120,
    image: "/stupid_alligator_29.jpg",
    discount: 47,
    category: "card_holder",
    gender: "Male",
    inStock: false,
    color: "black",
    material: "genuine_leather",
  },
  {
    id: 8,
    name: "Minimalist Blue Leather Card Holder - American Football",
    price: 120,
    image: "/Slim_Leather_Card_Case_28.jpg",
    discount: 47,
    category: "card_holder",
    gender: "Male",
    inStock: false,
    color: "black",
    material: "genuine_leather",
  },
];

export const ShoppingSection = () => {
  const [gridLayout, setGridLayout] = useState("3col"); // Default layout
  const [sortOption, setSortOption] = useState(""); // State for sort option

  // Filter states
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all_products");
  const [selectedColor, setSelectedColor] = useState("all_colors");
  const [selectedMaterial, setSelectedMaterial] = useState("all_materials");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const handleLayoutChange = (layout: string) => {
    setGridLayout(layout);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const handleInStockChange = (checked: boolean) => {
    setInStockOnly(checked);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleColorChange = (value: string) => {
    setSelectedColor(value);
  };

  const handleMaterialChange = (value: string) => {
    setSelectedMaterial(value);
  };

  const getGridClass = () => {
    switch (gridLayout) {
      case "5col":
        return "md:grid-cols-5";
      case "4col":
        return "md:grid-cols-4";
      case "3col":
        return "grid-cols-2 md:grid-cols-3";
      case "1col":
        return "grid-cols-1 md:grid-cols-3";
      default:
        return "md:grid-cols-3";
    }
  };
  const handleFilterClick = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  // Apply filters
  const filteredProducts = products.filter((product) => {
    return (
      (!inStockOnly || product.inStock) &&
      (selectedCategory === "all_products" ||
        product.category === selectedCategory) &&
      (selectedColor === "all_colors" || product.color === selectedColor) &&
      (selectedMaterial === "all_materials" ||
        product.material === selectedMaterial)
    );
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col gap-10 w-full mx-auto justify-end items-end">
      <Toolbar
        onLayoutChange={handleLayoutChange}
        onSortChange={handleSortChange}
        sortOption={sortOption}
        onFilterClick={handleFilterClick}
      />
      <div className=" w-full flex">
      <FilterDrawer isOpen={isFilterDrawerOpen} onClose={() => setIsFilterDrawerOpen(false)}>
          <Filters
            inStockOnly={inStockOnly}
            selectedCategory={selectedCategory}
            selectedColor={selectedColor}
            selectedMaterial={selectedMaterial}
            onInStockChange={handleInStockChange}
            onCategoryChange={handleCategoryChange}
            onColorChange={handleColorChange}
            onMaterialChange={handleMaterialChange}
          />
        </FilterDrawer>
        <div className=" hidden md:block">
          <Filters
            inStockOnly={inStockOnly}
            selectedCategory={selectedCategory}
            selectedColor={selectedColor}
            selectedMaterial={selectedMaterial}
            onInStockChange={handleInStockChange}
            onCategoryChange={handleCategoryChange}
            onColorChange={handleColorChange}
            onMaterialChange={handleMaterialChange}
          />
        </div>
        <div className=" flex flex-col flex-1 mx-4 md:mr-10">
          <Chips
            inStockOnly={inStockOnly}
            selectedCategory={selectedCategory}
            selectedColor={selectedColor}
            selectedMaterial={selectedMaterial}
            onInStockChange={handleInStockChange}
            onCategoryChange={handleCategoryChange}
            onColorChange={handleColorChange}
            onMaterialChange={handleMaterialChange}
          />
          <div className={`grid ${getGridClass()} gap-4`}>
            {sortedProducts.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
