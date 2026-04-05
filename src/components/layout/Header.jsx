import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartCount, onOpenCart }) => {
  return (
    <header className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-height)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Tech<span style={{ color: 'var(--accent)' }}>Store.</span>
        </h1>
        <nav>
          <button style={{
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '8px',
            backgroundColor: 'var(--border)',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
           }}
           onClick={onOpenCart}
           onMouseOver={(e) => {
             e.currentTarget.style.backgroundColor = 'var(--accent)';
             e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)';
           }}
           onMouseOut={(e) => {
             e.currentTarget.style.backgroundColor = 'var(--border)';
             e.currentTarget.style.boxShadow = 'none';
           }}
           >
            <ShoppingCart size={20} />
            <span>Cart ({cartCount})</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
