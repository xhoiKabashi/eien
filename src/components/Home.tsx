"use client";
import Image from "next/image";
import { Toolbar } from "./Toolbar";
import { useState } from "react";


const products = [
  {
    id: 1,
    name: "Basic Sweater",
    price: 35,
    image:
      "fd40280e8eeddae3651120e67f9fb723.jpg",
    discount: null,
    category: "Clothing",
    gender: "Unisex",
    desc: "Iru×IKENOHATA GINKAWATEN】PUEBLO LEATHER COMPACT WALLET IZUMIIRO / 受注生産 6月上旬〜6月中旬 発送予定"

  },
  {
    id: 2,
    name: "Bottle Grinder",
    price: 55,
    image:
      "fd3df298d5fb1ecb4f287b75190f3f3b.jpg",
    discount: 36,
    category: "Accessories",
    gender: "Unisex",
    desc: "Iru×IKENOHATA GINKAWATEN】PUEBLO LEATHER COMPACT WALLET IZUMIIRO / 受注生産 6月上旬〜6月中旬 発送予定"
  },
  {
    id: 3,
    name: "Circle Ceramic Vase",
    price: 45,
    image:
      "/fcb2ed75cf1f08041ed2c124a5d95c1c.jpg",
    discount: null,
    category: "Home",
    gender: "Unisex",
    desc: "Iru×IKENOHATA GINKAWATEN】PUEBLO LEATHER COMPACT WALLET IZUMIIRO / 受注生産 6月上旬〜6月中旬 発送予定"

  },
  {
    id: 4,
    name: "Minimalist Shirt",
    price: 29,
    image:
      "/d5c56d560922ce4f7925fdcfcbdfe42f.jpg",
    discount: "New",
    category: "Clothing",
    gender: "Male",
    desc: "Iru×IKENOHATA GINKAWATEN】PUEBLO LEATHER COMPACT WALLET IZUMIIRO / 受注生産 6月上旬〜6月中旬 発送予定"

  },
  {
    id: 5,
    name: "Vintage Cap",
    price: 20,
    image:
      "/5814a01e0c2728331b53f7504ac56f81.jpg",
    discount: 47,
    category: "Accessories",
    gender: "Female",
    desc: "Iru×IKENOHATA GINKAWATEN】PUEBLO LEATHER COMPACT WALLET IZUMIIRO / 受注生産 6月上旬〜6月中旬 発送予定"

  },
  {
    id: 6,
    name: "Designer Watch",
    price: 120,
    image:
      "4e2b33a166b82fde02cb85e6eab6fe8f.jpg",
    discount: 47,
    category: "Accessories",
    gender: "Male",
    desc: "【Iru×IKENOHATA GINKAWATEN】PUEBLO LEATHER COMPACT WALLET IZUMIIRO / 受注生産 6月上旬〜6月中旬 発送予定"

  },
];

export const ShoppingSection = () => {
  const [gridLayout, setGridLayout] = useState('3col'); // Default layout
  const [sortOption, setSortOption] = useState(""); // State for sort option

  const handleLayoutChange = (layout: string) => {
    setGridLayout(layout);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const getGridClass = () => {
    switch (gridLayout) {
      case '5col':
        return 'grid-cols-5';
      case '3col':
        return 'grid-cols-3';
      case '4col':
        return 'grid-cols-4';
      default:
        return 'grid-cols-3';
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
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
      />
      <div className={`grid ${getGridClass()} gap-4 w-[74%] mx-9`}>
        {sortedProducts.map((product) => (
          <div className="bg-white overflow-hidden" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
            <div className="p-2">
              <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2 overflow-hidden">{product.desc}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xl font-bold text-gray-900">{product.price} €</span>
                <button className="bg-black text-xs text-white px-2 py-2 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingSection;