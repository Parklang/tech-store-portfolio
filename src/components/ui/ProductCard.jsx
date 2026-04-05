import React from 'react';
import { Plus } from 'lucide-react';
import '../../styles/global.css';

const ProductCard = ({ product, onAdd, onSelect }) => {
  return (
    <div className="product-card glass" style={{
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    onClick={() => onSelect(product)}
    >
      <div style={{
        height: '220px',
        width: '100%',
        overflow: 'hidden'
      }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600,
          marginBottom: '8px'
        }}>{product.category}</p>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: '1.4' }}>{product.name}</h3>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.9rem', 
          lineHeight: '1.5',
          marginBottom: '20px',
          flex: 1
        }}>{product.description}</p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            ${product.price}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); onAdd(product); }}
            style={{
              backgroundColor: 'var(--accent)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
            title="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
