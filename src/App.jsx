import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CartSidebar from './features/CartSidebar';
import ProductModal from './features/ProductModal';
import Toast from './components/ui/Toast';
import Home from './pages/Home';
import Store from './pages/Store';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [cartItems, setCartItems] = useLocalStorage('techstore_cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setToastMessage(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="app-layout">
        <Header cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />

        <ProductModal 
          product={selectedProduct} 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={handleAddToCart} 
        />

        <Toast 
          message={toastMessage} 
          isVisible={!!toastMessage} 
          onClose={() => setToastMessage('')} 
        />

        <main className="container" style={{
          paddingTop: 'calc(var(--nav-height) + 40px)',
          minHeight: '100vh'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store onAddToCart={handleAddToCart} onProductSelect={setSelectedProduct} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
