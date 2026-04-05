import React, { useState, useMemo } from 'react';
import ProductList from '../features/ProductList';
import { products } from '../data/products';
import { Search } from 'lucide-react';

const Store = ({ onAddToCart, onProductSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Discover Premium Tech</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
        Explore our curated collection of high-end gadgets and workspace peripherals.
      </p>

      {/* Filter and Search Interface */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px',
        justifyContent: 'space-between', alignItems: 'center',
        padding: '16px', borderRadius: '16px', backgroundColor: 'var(--glass-bg)',
        border: '1px solid var(--border)'
      }}>
        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 16px', borderRadius: '20px', fontWeight: 500, fontSize: '0.95rem',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
                backgroundColor: activeCategory === cat ? 'var(--accent)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid var(--border)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{
          position: 'relative', flex: '1', minWidth: '250px', maxWidth: '350px'
        }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px 12px 42px', borderRadius: '12px',
              backgroundColor: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)',
              color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '1.25rem' }}>No products found matching your criteria.</p>
        </div>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={onAddToCart} onProductSelect={onProductSelect} />
      )}
    </div>
  );
};

export default Store;
