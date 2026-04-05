import React from 'react';
import { X, ShoppingBag } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <>
      <div 
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
          zIndex: 1000, animation: 'fadeIn 0.3s ease'
        }}
      />
      <div className="glass" style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%', maxWidth: '800px', maxHeight: '90vh',
        zIndex: 1001, borderRadius: '24px', overflow: 'hidden',
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ flex: '1 1 300px', minHeight: '300px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: '1 1 300px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>{product.category}</p>
            <button onClick={onClose} style={{ color: 'var(--text-primary)', cursor: 'pointer', opacity: 0.8, transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <X size={24} />
            </button>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', lineHeight: '1.2' }}>{product.name}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', flex: 1 }}>{product.description}</p>
          
          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 700 }}>${product.price}</span>
            <button onClick={() => { onAddToCart(product); onClose(); }} style={{
              backgroundColor: 'var(--accent)', color: 'white',
              padding: '12px 24px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px',
              fontWeight: 600, fontSize: '1.1rem', transition: 'all 0.2s', cursor: 'pointer'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%, -45%); } to { opacity: 1; transform: translate(-50%, -50%); } }
        @media (max-width: 600px) {
          .glass { flex-direction: column !important; overflow-y: auto; max-height: 85vh; }
        }
      `}</style>
    </>
  );
};

export default ProductModal;
