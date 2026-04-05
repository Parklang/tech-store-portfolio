import React from 'react';
import ProductCard from '../components/ui/ProductCard';

const ProductList = ({ products, onAddToCart, onProductSelect }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '32px',
      marginTop: '32px',
      paddingBottom: '64px'
    }}>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAdd={onAddToCart} 
          onSelect={onProductSelect}
        />
      ))}
    </div>
  );
};

export default ProductList;
