import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CollectionsSection } from "./components/CollectionsSection";
import { ProductsSection } from "./components/ProductsSection";
import { SearchView } from "./components/SearchView";
import { FavoritesPanel } from "./components/FavoritesPanel";
import { CartSidebar } from "./components/CartSidebar";
import { SizeSelectionModal } from "./components/SizeSelectionModal";
import { CollectionsPage } from "./components/CollectionsPage";
import { CollectionDetailPage } from "./components/CollectionDetailPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { LoginPage } from "./components/LoginPage";
import { MyAccountPage } from "./components/MyAccountPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { StripeCheckoutPage } from "./components/StripeCheckoutPage";
import { OrderConfirmationPage } from "./components/OrderConfirmationPage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import { Product } from "./data/products";
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

const allProducts: Product[] = [
  { id: 1, category: "Men", name: "NEAR Protocol Hoodie", price: 65, image: imgProduct1 },
  { id: 2, category: "Women", name: "Classic NEAR Tee", price: 35, image: imgProduct2 },
  { id: 3, category: "Accessories", name: "NEAR Snapback Cap", price: 28, image: imgProduct3 },
  { id: 4, category: "Accessories", name: "Protocol Tote Bag", price: 22, image: imgProduct4 },
  { id: 5, category: "Accessories", name: "NEAR Coffee Mug", price: 18, image: imgProduct5 },
  { id: 6, category: "Exclusives", name: "Sticker Pack", price: 12, image: imgProduct6 },
  { id: 7, category: "Men", name: "Men's Essential Tee - Black", price: 32, image: "https://images.unsplash.com/photo-1667744565777-fa2eb22adeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3ZWFyaW5nJTIwYmxhY2slMjB0c2hpcnR8ZW58MXx8fHwxNzYzNjU1NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 8, category: "Men", name: "Men's Oversized Tee", price: 38, image: imgProduct8 },
  { id: 9, category: "Women", name: "Women's Crop Tee", price: 30, image: imgProduct9 },
  { id: 10, category: "Men", name: "Men's Polo Shirt", price: 45, image: imgProduct10 },
  { id: 11, category: "Women", name: "Women's Fitted Tee", price: 30, image: imgProduct11 },
  { id: 12, category: "Exclusives", name: "Founder's Edition Tee", price: 40, image: imgProduct12 },
  { id: 13, category: "Women", name: "Women's Crop Tee", price: 30, image: imgProduct13 },
  { id: 14, category: "Men", name: "Men's Oversized Tee", price: 38, image: imgProduct14 },
  { id: 15, category: "Exclusives", name: "Limited Edition Black Tee", price: 45, image: imgProduct15 },
  { id: 16, category: "Women", name: "Women's Hoodie", price: 68, image: imgProduct16 },
  { id: 17, category: "Accessories", name: "NEAR Backpack", price: 75, image: imgProduct17 },
  { id: 18, category: "Accessories", name: "NEAR Water Bottle", price: 20, image: imgProduct18 },
];

export default function App() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<{ [productId: number]: { quantity: number; size: string } }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isFavoritesPanelOpen, setIsFavoritesPanelOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "collections" | "collectionDetail" | "productDetail">("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<"Men" | "Women" | "Exclusives" | "Accessories" | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showMyAccount, setShowMyAccount] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Helper function to check if product requires size selection
  const requiresSize = (category: string) => {
    return ["Men", "Women", "Exclusives"].includes(category);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const isAdding = !prev.includes(productId);
      if (isAdding) {
        const product = allProducts.find(p => p.id === productId);
        if (product) {
          toast.success(`${product.name} added to favorites!`, {
            duration: 2000,
          });
        }
        return [...prev, productId];
      } else {
        return prev.filter(id => id !== productId);
      }
    });
  };

  const removeFavorite = (productId: number) => {
    setFavorites(prev => prev.filter(id => id !== productId));
  };

  const addToCart = (productId: number) => {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    // Check if product requires size selection
    if (requiresSize(product.category)) {
      // Show size selection modal
      setPendingProduct(product);
      setIsSizeModalOpen(true);
    } else {
      // Add directly to cart without size (for accessories)
      setCartItems(prev => ({
        ...prev,
        [productId]: {
          quantity: (prev[productId]?.quantity || 0) + 1,
          size: prev[productId]?.size || "N/A",
        },
      }));
      setIsCartSidebarOpen(true);
    }
  };

  const handleSizeConfirm = (size: string) => {
    if (!pendingProduct) return;

    setCartItems(prev => ({
      ...prev,
      [pendingProduct.id]: {
        quantity: (prev[pendingProduct.id]?.quantity || 0) + 1,
        size: prev[pendingProduct.id]?.size || size,
      },
    }));
    setPendingProduct(null);
    setIsCartSidebarOpen(true);
  };

  const updateCartQuantity = (productId: number, change: number) => {
    setCartItems(prev => {
      const currentItem = prev[productId];
      if (!currentItem) return prev;
      
      const newQuantity = currentItem.quantity + change;
      if (newQuantity <= 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [productId]: {
          ...currentItem,
          quantity: newQuantity,
        },
      };
    });
  };

  const updateCartSize = (productId: number, size: string) => {
    setCartItems(prev => {
      const currentItem = prev[productId];
      if (!currentItem) return prev;
      
      return {
        ...prev,
        [productId]: {
          ...currentItem,
          size,
        },
      };
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
    toast.success("Removed from cart");
  };

  // Calculate total cart count
  const cartCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Automatically switch to search view when user types
    if (query.trim()) {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      setIsSearchActive(true);
    }
  };

  const handleLogoClick = () => {
    setIsSearchActive(false);
    setSearchQuery("");
    setCurrentView("home");
    setSelectedCategory(null);
  };

  const handleFavoritesClick = () => {
    setIsFavoritesPanelOpen(true);
  };

  const handleCloseFavoritesPanel = () => {
    setIsFavoritesPanelOpen(false);
  };

  const handleExploreCollection = (category: string) => {
    setSelectedCategory(category);
    setIsSearchActive(true);
    setSearchQuery("");
  };

  const handleViewAllProducts = () => {
    setIsSearchActive(true);
    setSearchQuery("");
    setSelectedCategory(null);
  };

  const handleNavigateToCollections = () => {
    setCurrentView("collections");
    setIsSearchActive(false);
    setSearchQuery("");
  };

  const handleNavigateToCollectionDetail = (collection: "Men" | "Women" | "Exclusives" | "Accessories") => {
    setSelectedCollection(collection);
    setCurrentView("collectionDetail");
  };

  const handleNavigateToProductDetail = (productId: number) => {
    setSelectedProduct(productId);
    setCurrentView("productDetail");
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {showLogin ? (
        <LoginPage 
          onBack={() => setShowLogin(false)}
          onSignInSuccess={() => {
            setIsSignedIn(true);
            setShowLogin(false);
            setWalletAddress("alice.near"); // Set wallet address after sign in
          }}
        />
      ) : showMyAccount ? (
        <MyAccountPage 
          onBack={() => setShowMyAccount(false)} 
          onSignOut={() => {
            setIsSignedIn(false);
            setShowMyAccount(false);
            toast.success("Signed out successfully");
          }}
          userEmail="user@example.com"
        />
      ) : showCheckout ? (
        <CheckoutPage 
          cartItems={cartItems}
          products={allProducts}
          onBack={() => setShowCheckout(false)}
          onPaymentSelect={(method) => {
            if (method === "near") {
              toast.info("NEAR payment coming soon!");
            } else {
              setShowCheckout(false);
              setShowStripeCheckout(true);
            }
          }}
        />
      ) : showStripeCheckout ? (
        <StripeCheckoutPage 
          cartItems={cartItems}
          products={allProducts}
          onBack={() => setShowStripeCheckout(false)}
          onPaymentComplete={(generatedOrderNumber) => {
            setOrderNumber(generatedOrderNumber);
            setShowStripeCheckout(false);
            setShowCheckout(false);
            setShowOrderConfirmation(true);
            setCartItems({}); // Clear cart after successful payment
          }}
        />
      ) : showOrderConfirmation ? (
        <OrderConfirmationPage 
          orderNumber={orderNumber}
          customerEmail="davis@demo.everything"
          onBackToStore={() => {
            setShowOrderConfirmation(false);
            setCurrentView("home");
            setIsSearchActive(false);
          }}
        />
      ) : (
        <>
          <Header 
            cartCount={cartCount}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            onLogoClick={handleLogoClick}
            onFavoritesClick={handleFavoritesClick}
            favoritesCount={favorites.length}
            onNavigateToCollections={handleNavigateToCollections}
            onNavigateToCollection={handleNavigateToCollectionDetail}
            onCartClick={() => setIsCartSidebarOpen(true)}
            onProfileClick={() => setShowLogin(true)}
            isSignedIn={isSignedIn}
            onSignIn={() => setShowLogin(true)}
            onSignOut={() => {
              setIsSignedIn(false);
              toast.success("Signed out successfully");
            }}
            onMyAccount={() => setShowMyAccount(true)}
            walletAddress={walletAddress}
          />
          
          {isSearchActive ? (
            // Search View (with optional category filter)
            <SearchView 
              searchQuery={searchQuery}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onAddToCart={addToCart}
              categoryFilter={selectedCategory}
              onNavigateToProduct={handleNavigateToProductDetail}
            />
          ) : currentView === "collections" ? (
            // Collections Page
            <CollectionsPage
              onExploreCollection={handleExploreCollection}
              onViewAllProducts={handleViewAllProducts}
              onNavigateToDetail={handleNavigateToCollectionDetail}
            />
          ) : currentView === "collectionDetail" && selectedCollection ? (
            // Collection Detail Page
            <CollectionDetailPage
              collection={selectedCollection}
              onBack={handleNavigateToCollections}
              onViewAllCollections={handleNavigateToCollections}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onAddToCart={addToCart}
              onNavigateToProduct={handleNavigateToProductDetail}
            />
          ) : currentView === "productDetail" && selectedProduct ? (
            // Product Detail Page
            <ProductDetailPage
              product={allProducts.find(p => p.id === selectedProduct)!}
              allProducts={allProducts}
              onBack={() => setCurrentView("home")}
              onAddToCart={addToCart}
              onNavigateToProduct={handleNavigateToProductDetail}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ) : (
            // Home View
            <>
              <Hero />
              <CollectionsSection 
                onNavigateToCollections={handleNavigateToCollections}
                onNavigateToDetail={handleNavigateToCollectionDetail}
              />
              <ProductsSection 
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onAddToCart={addToCart}
                onNavigateToProduct={handleNavigateToProductDetail}
              />
            </>
          )}
          
          <Footer />

          {/* Favorites Panel */}
          <FavoritesPanel
            isOpen={isFavoritesPanelOpen}
            onClose={handleCloseFavoritesPanel}
            favorites={favorites}
            products={allProducts}
            onRemoveFavorite={removeFavorite}
            onAddToCart={addToCart}
          />

          {/* Cart Sidebar */}
          <CartSidebar
            isOpen={isCartSidebarOpen}
            onClose={() => setIsCartSidebarOpen(false)}
            cartItems={cartItems}
            products={allProducts}
            onUpdateQuantity={updateCartQuantity}
            onUpdateSize={updateCartSize}
            onRemoveItem={removeFromCart}
            onCheckout={() => {
              setIsCartSidebarOpen(false);
              setShowCheckout(true);
            }}
          />

          {/* Size Selection Modal */}
          <SizeSelectionModal
            isOpen={isSizeModalOpen}
            onClose={() => {
              setIsSizeModalOpen(false);
              setPendingProduct(null);
            }}
            product={pendingProduct}
            onConfirm={handleSizeConfirm}
          />

          {/* Toaster */}
          <Toaster />
        </>
      )}
    </div>
  );
}
