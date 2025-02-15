import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslations } from "next-intl";

/**
 * Props for the `Filters` component.
 */
interface FiltersProps {
  inStockOnly: boolean; // Whether to show only in-stock items
  selectedCategory: string; // Currently selected product category
  selectedColor: string; // Currently selected color
  selectedMaterial: string; // Currently selected material
  onInStockChange: (checked: boolean) => void; // Callback for in-stock toggle change
  onCategoryChange: (value: string) => void; // Callback for category selection change
  onColorChange: (value: string) => void; // Callback for color selection change
  onMaterialChange: (value: string) => void; // Callback for material selection change
}

/**
 * Props for the `FilterSection` component.
 */
interface FilterSectionProps {
  title: string; // Title of the filter section
  value: string; // Unique value for the AccordionItem
  selectedValue: string; // Currently selected value in the filter section
  options: { value: string; label: string | React.ReactNode; id: string }[]; // Options for the filter
  onChange: (value: string) => void; // Callback for value change
}

/**
 * A reusable component for rendering a filter section with an accordion and radio group.
 */
const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  value,
  selectedValue,
  options,
  onChange,
}) => (
  <Accordion type="single" collapsible>
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <RadioGroup value={selectedValue} onValueChange={onChange}>
          <div className="space-y-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                {/* Radio button for the option */}
                <RadioGroupItem value={option.value} id={option.id} />
                {/* Label for the radio button */}
                <Label className="cursor-pointer" htmlFor={option.id}>
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

/**
 * The main `Filters` component that renders multiple filter sections for availability,
 * product type, color, and material.
 */
export default function Filters({
  inStockOnly,
  selectedCategory,
  selectedColor,
  selectedMaterial,
  onInStockChange,
  onCategoryChange,
  onColorChange,
  onMaterialChange,
}: FiltersProps) {
  const t = useTranslations("General"); // Translation hook for localization

  // Options for the product category filter
  const categoryOptions = [
    { value: "all_products", label: t("all_products"), id: "all_products" },
    { value: "wallet", label: t("wallet"), id: "wallet" },
    { value: "card_holder", label: t("card_holder"), id: "card_holder" },
  ];

  // Options for the color filter
  const colorOptions = [
    { value: "all_colors", label: t("all_colors"), id: "all_colors" },
    { value: "black", label: <div className="h-4 w-4 bg-black" />, id: "black" },
    { value: "red", label: <div className="h-4 w-4 bg-red-600" />, id: "red" },
  ];

  // Options for the material filter
  const materialOptions = [
    { value: "all_materials", label: t("all_products"), id: "all_materials" },
    { value: "full_grain", label: t("full_grain"), id: "full_grain" },
    { value: "genuine_leather", label: t("genuine_leather"), id: "genuine_leather" },
  ];

  return (
    <div className=" mx-4">
      <div className="w-[300px] px-6">
        {/* Availability filter section */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('availability')}</AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4">
                {/* Switch to toggle in-stock only filter */}
                <Switch checked={inStockOnly} onCheckedChange={onInStockChange} />
                {t('in_stock_only')}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Product type filter section */}
        <FilterSection
          title={t("product_type")}
          value="item-2"
          selectedValue={selectedCategory}
          options={categoryOptions}
          onChange={onCategoryChange}
        />
        {/* Color filter section */}
        <FilterSection
          title={t("color")}
          value="item-3"
          selectedValue={selectedColor}
          options={colorOptions}
          onChange={onColorChange}
        />
        {/* Material filter section */}
        <FilterSection
          title={t("material")}
          value="item-4"
          selectedValue={selectedMaterial}
          options={materialOptions}
          onChange={onMaterialChange}
        />
      </div>
    </div>
  );
}