export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    discount: number | string | null; 
    category: string;
    gender: "Unisex" | string;
    inStock: boolean;
    color: string;
    material: string;
  };
  