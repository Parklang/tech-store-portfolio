import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, totalAmount, onComplete }) => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/^\\S+@\\S+\\.\\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address.trim()) newErrors.address = 'Shipping address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', address: '' });
        onComplete();
      }, 3000);
    }
  };

  return (
    <>
      <div 
        style={{
          position: 'fixed', inset: 0, zIndex: 3000,
          backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.3s'
        }}
      />
      <div className="glass" style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '90%', maxWidth: '500px', zIndex: 3001, borderRadius: '24px', padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', animation: 'slideUp 0.3s'
      }}>
        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <CheckCircle size={64} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ marginBottom: '8px' }}>Order Confirmed!</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Thank you, {formData.name}. Your mock intern project order is successful.</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Checkout (${totalAmount.toFixed(2)})</h2>
              <button 
                onClick={onClose} 
                style={{ cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              ><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} 
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.2)', border: errors.name ? '1px solid #ef4444' : '1px solid var(--border)', color: 'white', outline: 'none' }} 
                  placeholder="John Doe" />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} 
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.2)', border: errors.email ? '1px solid #ef4444' : '1px solid var(--border)', color: 'white', outline: 'none' }} 
                  placeholder="john@example.com" />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Shipping Address</label>
                <textarea value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} 
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.2)', border: errors.address ? '1px solid #ef4444' : '1px solid var(--border)', color: 'white', outline: 'none', resize: 'vertical' }} 
                  placeholder="123 Tech Avenue..." rows={3} />
                {errors.address && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.address}</span>}
              </div>

              <button type="submit" style={{
                marginTop: '16px', width: '100%', padding: '16px', borderRadius: '12px',
                backgroundColor: 'var(--accent)', color: 'white', fontSize: '1.05rem', fontWeight: 600,
                border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', boxShadow: '0 4px 12px var(--accent-glow)'
              }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                 onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              >
                Complete Purchase
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default CheckoutModal;
