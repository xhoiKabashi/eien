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

interface FiltersProps {
  inStockOnly: boolean;
  selectedCategory: string;
  selectedColor: string;
  selectedMaterial: string;
  onInStockChange: (checked: boolean) => void;
  onCategoryChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
}

interface FilterSectionProps {
  title: string;
  value: string;
  selectedValue: string;
  options: { value: string; label: string | React.ReactNode; id: string }[];
  onChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  value,
  selectedValue,
  options,
  onChange,
}) => (
  <Accordion type="single" collapsible defaultValue={value}>
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <RadioGroup value={selectedValue} onValueChange={onChange}>
          <div className="space-y-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.id} />
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
  const t = useTranslations("General");

  const categoryOptions = [
    { value: "all_products", label: t("all_products"), id: "all_products" },
    { value: "wallet", label: t("wallet"), id: "wallet" },
    { value: "card_holder", label: t("card_holder"), id: "card_holder" },
  ];

  const colorOptions = [
    { value: "all_colors", label: t("all_colors"), id: "all_colors" },
    { value: "black", label: <div className="h-4 w-4 bg-black" />, id: "black" },
    { value: "red", label: <div className="h-4 w-4 bg-red-600" />, id: "red" },
  ];

  const materialOptions = [
    { value: "all_materials", label: t("all_products"), id: "all_materials" },
    { value: "full_grain", label: t("full_grain"), id: "full_grain" },
    { value: "genuine_leather", label: t("genuine_leather"), id: "genuine_leather" },
  ];

  return (
    <div className="mx-4">
      <div className="w-[300px] px-6">
        {/* Availability filter section */}
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("availability")}</AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-4">
                <Switch checked={inStockOnly} onCheckedChange={onInStockChange} />
                {t("in_stock_only")}
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
