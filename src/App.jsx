import React, { useState } from 'react';
import Header from './components/layout/Header';
import ProductList from './features/ProductList';
import CartSidebar from './features/CartSidebar';
import ProductModal from './features/ProductModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-layout">
      <Header cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
      />

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={handleAddToCart} 
      />

      <main className="container" style={{
        paddingTop: 'calc(var(--nav-height) + 40px)',
        minHeight: '100vh'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Discover Premium Tech</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Explore our curated collection of high-end gadgets and workspace peripherals.
        </p>

        <ProductList onAddToCart={handleAddToCart} onProductSelect={setSelectedProduct} />
      </main>
    </div>
  );
}

export default App;
