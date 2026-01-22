
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Testimonials from './components/Testimonials';
import AIChatbot from './components/AIChatbot';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Product, AppRoute } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentRoute(AppRoute.PRODUCT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setCurrentRoute(AppRoute.HOME);
    setSelectedProduct(null);
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string | null) => {
    // Switch to home route first if we are in product detail
    setCurrentRoute(AppRoute.HOME);
    setSelectedProduct(null);
    setSelectedCategory(category);
    setSearchQuery('');
    
    // Smooth scroll to product section with slight delay to ensure DOM is ready
    setTimeout(() => {
      const productSection = document.getElementById('product-section');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }
    }, 100);
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? p.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex flex-col">
      <Header 
        onHomeClick={handleBackHome} 
        onSearch={setSearchQuery} 
        onCategorySelect={handleCategorySelect}
        activeCategory={selectedCategory}
      />
      
      <main className="flex-grow pt-20 pb-12">
        {currentRoute === AppRoute.HOME ? (
          <div className="space-y-16">
            {/* Banner only shows on home when no specific category is selected, 
                or you can choose to keep it. In Shopee, selecting category usually leads to a dedicated page. */}
            {!selectedCategory && <Hero onActionClick={handleCategorySelect} />}
            
            <div id="product-section" className="max-w-7xl mx-auto px-4 scroll-mt-24">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div className="animate-slideUp">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 capitalize">
                    {selectedCategory ? `${selectedCategory} Collection` : "Koleksi Terbaru Kami"}
                  </h2>
                  <p className="text-pink-500 font-medium">Kualitas premium untuk kenyamanan Anda</p>
                </div>
                {selectedCategory ? (
                   <button 
                    onClick={() => handleCategorySelect(null)}
                    className="px-4 py-2 bg-pink-50 text-pink-600 font-bold rounded-full hover:bg-pink-100 transition-all border border-pink-200"
                   >
                     Tampilkan Semua Produk
                   </button>
                ) : (
                   <div className="hidden md:block px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold uppercase tracking-widest">
                     Explore Trends
                   </div>
                )}
              </div>

              <div className="animate-fadeIn">
                <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
              </div>
            </div>

            {!selectedCategory && (
              <>
                <FAQ />
                <Testimonials />
              </>
            )}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4">
            {selectedProduct && (
              <ProductDetail product={selectedProduct} onBack={() => setCurrentRoute(AppRoute.HOME)} />
            )}
          </div>
        )}
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;
