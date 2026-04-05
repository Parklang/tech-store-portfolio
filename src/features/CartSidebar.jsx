import React from 'react';
import { X, Trash2 } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
            zIndex: 999, transition: 'opacity 0.3s'
          }}
        />
      )}
      
      {/* Sidebar */}
      <div className="glass" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '400px',
        maxWidth: '100%', zIndex: 1000,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
      }}>
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Your Cart</h2>
          <button onClick={onClose} style={{ color: 'var(--text-primary)', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
          >
            <X size={24} />
          </button>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '40px' }}>Your cart is currently empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{item.name}</h4>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--accent)', fontWeight: 'bold' }}>${item.price}</p>
                </div>
                <button 
                  onClick={() => onRemove(index)}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer', opacity: 0.7, padding: '8px' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.opacity = 1; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.opacity = 0.7; }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div style={{ padding: '24px', borderTop: '1px solid var(--border)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Total</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>${total.toFixed(2)}</span>
            </div>
            <button style={{
              width: '100%', padding: '16px', borderRadius: '12px',
              backgroundColor: 'var(--accent)', color: 'white',
              fontSize: '1.1rem', fontWeight: 600, transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
