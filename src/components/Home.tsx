"use client";
import Image from "next/image";


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



  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto md:py-10 md:mt-20">
      <div>
        <Image
          src="/header.jpeg"
          alt="Grocery Store"
          width={1200}
          height={2000}
          className="text-black rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
  {products.map((product) => (
    <div className="bg-white overflow-hidden " key={product.id}>
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
          <button className="bg-black text-xs  text-white px-2 py-2 rounded-lg hover:bg-blue-700">
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
