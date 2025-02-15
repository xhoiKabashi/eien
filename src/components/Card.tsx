import React from "react";
import Image from "next/image";
import { Product } from "../Types/Types";
interface CardProps {
  product: Product;
}
export default function Card({ product }: CardProps) {
  return (
    <div className="bg-white overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={1200}
        height={1200}
        className="w-full h-auto object-cover"
      />
      <div className="p-2 text-center space-y-2">
        <h3 className="text-sm  text-gray-700 font-thin">{product.name}</h3>
        <div className="">
          <span className="text-base text-center   text-gray-800">
            {product.price} €
          </span>
        </div>
      </div>
    </div>
  );
}
