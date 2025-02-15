import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Chips({
  inStockOnly,
  selectedCategory,
  selectedColor,
  selectedMaterial,
  onInStockChange,
  onCategoryChange,
  onColorChange,
  onMaterialChange,
}: {
  inStockOnly: boolean;
  selectedCategory: string;
  selectedColor: string;
  selectedMaterial: string;
  onInStockChange: (checked: boolean) => void;
  onCategoryChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
}) {
    const t = useTranslations("General");
  
  // Function to clear all filters
  const clearAllFilters = () => {
    onInStockChange(false);
    onCategoryChange("all_products");
    onColorChange("all_colors");
    onMaterialChange("all_materials");
  };

  // Function to clear a single filter
  const clearFilter = (filterType: string) => {
    switch (filterType) {
      case "inStock":
        onInStockChange(false);
        break;
      case "category":
        onCategoryChange("all_products");
        break;
      case "color":
        onColorChange("all_colors");
        break;
      case "material":
        onMaterialChange("all_materials");
        break;
      default:
        break;
    }
  };


  return (
    <div className="w-full flex gap-3 items-center pb-6">
      {/* Display active filters as chips */}
      {inStockOnly && (
        <div
          className="border py-2 px-3 cursor-pointer flex items-center"
          onClick={() => clearFilter("inStock")}
        >
          {t('in_stock_only')}<X size={20} strokeWidth={1.25} className=" ml-4" />
        </div>
      )}
      {selectedCategory !== "all_products" && (
        <div
          className="border py-2 px-3 cursor-pointer flex items-center capitalize"
          onClick={() => clearFilter("category")}
        >
          {t('product_type')}: {t(selectedCategory)} <X size={20} strokeWidth={1.25} className=" ml-4" />
        </div>
      )}
      {selectedColor !== "all_colors" && (
        <div
          className="border py-2 px-3 cursor-pointer flex items-center capitalize"
          onClick={() => clearFilter("color")}
        >
          {t('color')}: {t(selectedColor)} <X size={20} strokeWidth={1.25} className=" ml-4" />
        </div>
      )}
      {selectedMaterial !== "all_materials" && (
        <div
          className="border py-2 px-3 cursor-pointer flex items-center capitalize"
          onClick={() => clearFilter("material")}
        >
          {t('material')}: {t(selectedMaterial)} <X size={20} strokeWidth={1.25} className=" ml-4" />
        </div>
      )}

      {/* Clear All button */}
      {(inStockOnly ||
        selectedCategory !== "all_products" ||
        selectedColor !== "all_colors" ||
        selectedMaterial !== "all_materials") && (
        <div
          className="border-b py-2 px-2 cursor-pointer"
          onClick={clearAllFilters}
        >
          {t('clear_all')}
        </div>
      )}
    </div>
  );
}
