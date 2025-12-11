import { ArrowLeft, Heart, Plus } from "lucide-react";
import { useState } from "react";
import imgHeroMen from "figma:asset/a58558b1c27e4cf802cd3db6d252ee939e060236.png";
import imgHeroWomen from "figma:asset/fd32da6d955919681e059a5194a228ec74fb5883.png";
import imgHeroLegion from "figma:asset/1abbf3e6f5926f53e873d365dc5909350868bab2.png";
import imgHeroAccessories from "figma:asset/752ea4da164bcbcb76b2a46abbe7f5eecbe4a267.png";

// Product images
import imgProduct1 from "figma:asset/4fa8b39e9c2ac96748ac43f791167a77131c590e.png";
import imgProduct2 from "figma:asset/22e8cdddd9ab3900abde04f193e6b75a535503ff.png";
import imgProduct3 from "figma:asset/f088d7ec9f16661bc461a762417ac9e90242645d.png";
import imgProduct4 from "figma:asset/432e520b35ca5db7bb27272f597e5876cda9dd9a.png";
import imgProduct5 from "figma:asset/4bccc138d7d406e34e8558c132be301bebc7f3d7.png";
import imgProduct6 from "figma:asset/46ea705ffd78f4019918bb2fd2b66e6caa50008e.png";
import imgProduct7 from "figma:asset/91bb79150f84dc69e298818199169189c32fd5d7.png";
import imgProduct8 from "figma:asset/c90671806a221dfe4f2cfa2c496b9afe21957596.png";
import imgProduct9 from "figma:asset/60aeb6e8fae869d59657e4792208dcffbd4ed8de.png";
import imgProduct10 from "figma:asset/eb34852b4e297ee7b9fefd08cceddc7281c77866.png";
import imgProduct11 from "figma:asset/049a6e5cda93fc93492b0452f06f9ce2d1c062e4.png";
import imgProduct12 from "figma:asset/bfb0a76ed33c7802b805fae5c2717c5f337ffb87.png";
import imgProduct13 from "figma:asset/9b9e29faabe6d02fbddb40d7181f00f5169c1042.png";
import imgProduct14 from "figma:asset/024d1179f5b1864e85e8d66a4862ca6b0409319c.png";
import imgProduct15 from "figma:asset/d3e8201b26e4bdb300ee825201cf21d582bfda16.png";
import imgProduct16 from "figma:asset/f09776468c431cd80517f08553b3afb7b61d6f44.png";
import imgProduct17 from "figma:asset/24f726cdcbea5949b9b6f1df05e29d7f53d7b8bc.png";
import imgProduct18 from "figma:asset/3468de44fa3a04d3198a56a23dfc70c4d84eb9c8.png";

const allProducts = [
  { id: "1", category: "Men", name: "NEAR Protocol Hoodie", price: 65, image: imgProduct1 },
  { id: "2", category: "Women", name: "Classic NEAR Tee", price: 35, image: imgProduct2 },
  { id: "3", category: "Accessories", name: "NEAR Snapback Cap", price: 28, image: imgProduct3 },
  { id: "4", category: "Accessories", name: "Protocol Tote Bag", price: 22, image: imgProduct4 },
  { id: "5", category: "Accessories", name: "NEAR Coffee Mug", price: 18, image: imgProduct5 },
  { id: "6", category: "Exclusives", name: "Sticker Pack", price: 12, image: imgProduct6 },
  { id: "7", category: "Men", name: "Men's Essential Tee - Black", price: 32, image: imgProduct7 },
  { id: "8", category: "Men", name: "Men's Oversized Tee", price: 38, image: imgProduct8 },
  { id: "9", category: "Women", name: "Women's Crop Tee", price: 30, image: imgProduct9 },
  { id: "10", category: "Men", name: "Men's Polo Shirt", price: 45, image: imgProduct10 },
  { id: "11", category: "Women", name: "Women's Fitted Tee", price: 30, image: imgProduct11 },
  { id: "12", category: "Exclusives", name: "Founder's Edition Tee", price: 40, image: imgProduct12 },
  { id: "13", category: "Women", name: "Women's Crop Tee", price: 30, image: imgProduct13 },
  { id: "14", category: "Men", name: "Men's Oversized Tee", price: 38, image: imgProduct14 },
  { id: "15", category: "Exclusives", name: "Limited Edition Black Tee", price: 45, image: imgProduct15 },
  { id: "16", category: "Women", name: "Women's Hoodie", price: 68, image: imgProduct16 },
  { id: "17", category: "Accessories", name: "NEAR Backpack", price: 75, image: imgProduct17 },
  { id: "18", category: "Accessories", name: "NEAR Water Bottle", price: 20, image: imgProduct18 },
];

const collectionData = {
  Men: {
    title: "Men's Collection",
    description: "Premium fits designed specifically for men. From classic essentials to modern oversized styles, each piece is crafted with attention to detail and comfort.",
    features: [
      "Regular & Oversized Fits",
      "Premium 100% Cotton",
      "Modern Minimalist Designs",
      "Durable Construction"
    ],
    heroImage: imgHeroMen,
  },
  Women: {
    title: "Women's Collection",
    description: "Tailored fits designed for women. Comfortable, stylish, and sustainably made pieces that blend fashion with function.",
    features: [
      "Fitted & Crop Styles",
      "Premium Soft Fabrics",
      "Versatile Designs",
      "Sustainable Materials"
    ],
    heroImage: imgHeroWomen,
  },
  Exclusives: {
    title: "NEAR Legion Collection",
    description: "Limited edition designs created in collaboration with artists. Once they're gone, they're gone forever.",
    features: [
      "Limited Edition Items",
      "Artist Collaborations",
      "Unique Designs",
      "Collectible Pieces"
    ],
    heroImage: imgHeroLegion,
  },
  Accessories: {
    title: "Accessories",
    description: "Complete your look with our curated selection. From everyday essentials to statement pieces.",
    features: [
      "Functional & Stylish",
      "Premium Materials",
      "Versatile Designs",
      "Perfect for Gifting"
    ],
    heroImage: imgHeroAccessories,
  },
};

interface CollectionDetailPageProps {
  collection: "Men" | "Women" | "Exclusives" | "Accessories";
  onBack: () => void;
  onViewAllCollections: () => void;
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onAddToCart: (id: number) => void;
  onNavigateToProduct?: (productId: number) => void;
}

export function CollectionDetailPage({
  collection,
  onBack,
  onViewAllCollections,
  favorites,
  onToggleFavorite,
  onAddToCart,
  onNavigateToProduct,
}: CollectionDetailPageProps) {
  const data = collectionData[collection];
  const products = allProducts.filter(p => p.category === collection);

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Back Button */}
      <div className="border-b border-[rgba(0,0,0,0.1)] py-4">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16">
          <button
            onClick={onBack}
            className="flex items-center gap-3 text-neutral-950 hover:opacity-70 transition-opacity tracking-[-0.48px]"
          >
            <ArrowLeft className="size-4" />
            Back to Collections
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-[rgba(0,0,0,0.1)]">
        <div className="grid md:grid-cols-2">
          {/* Hero Image */}
          <div className="bg-[#ececf0] h-[400px] md:h-[529px] overflow-hidden">
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Collection Info */}
          <div className="border-l border-[rgba(0,0,0,0.1)] p-8 md:p-16 flex flex-col justify-center">
            <div className="space-y-8">
              <h1 className="tracking-[-0.48px]">{data.title}</h1>
              
              <p className="text-[#717182] text-[18px] leading-[28px] tracking-[-0.48px]">
                {data.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full" />
                    <p className="tracking-[-0.48px]">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4 border-t border-[rgba(0,0,0,0.1)]">
                <div>
                  <p className="text-[#717182] text-[14px] tracking-[-0.48px] mb-1">Products</p>
                  <p className="tracking-[-0.48px]">{products.length}</p>
                </div>
                <div>
                  <p className="text-[#717182] text-[14px] tracking-[-0.48px] mb-1">Category</p>
                  <p className="tracking-[-0.48px]">{collection}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 md:py-20 border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-neutral-950 mb-4 tracking-[-0.48px]">All {data.title}</h2>
            <p className="text-[#717182] tracking-[-0.48px]">
              Browse our complete {collection.toLowerCase()}'s collection
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isFavorite={favorites.includes(parseInt(product.id))}
                onToggleFavorite={onToggleFavorite}
                onAddToCart={onAddToCart}
                onNavigateToProduct={onNavigateToProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore More CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-neutral-950 mb-4 tracking-[-0.48px]">Explore More Collections</h2>
          <p className="text-[#717182] tracking-[-0.48px] mb-8">
            Discover other curated NEAR Protocol merchandise collections
          </p>
          <button
            onClick={onViewAllCollections}
            className="bg-white border border-[rgba(0,0,0,0.1)] px-6 py-3 hover:bg-gray-50 transition-colors tracking-[-0.48px]"
          >
            View All Collections
          </button>
        </div>
      </section>
    </div>
  );
}

interface ProductCardProps {
  id: string;
  category: string;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onAddToCart: (id: number) => void;
  onNavigateToProduct?: (productId: number) => void;
}

function ProductCard({
  id,
  category,
  name,
  price,
  image,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  onNavigateToProduct,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white border border-[rgba(0,0,0,0.1)] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigateToProduct?.(parseInt(id))}
    >
      {/* Image Container */}
      <div className="relative bg-[#ececf0] aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(parseInt(id));
          }}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`size-4 ${isFavorite ? "fill-black stroke-black" : "stroke-black"}`}
          />
        </button>

        {/* Quick Add Button - Appears on Hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 flex items-center justify-center p-6 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(parseInt(id));
            }}
            className="bg-neutral-950 text-white px-6 py-2 flex items-center gap-2 hover:bg-neutral-800 transition-colors tracking-[-0.48px]"
          >
            <Plus className="size-4" />
            QUICK ADD
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-[#717182] uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="text-neutral-950 mb-2 line-clamp-2 tracking-[-0.48px]">{name}</h3>
        <p className="text-neutral-950 tracking-[-0.48px]">${price}</p>
      </div>
    </div>
  );
}
