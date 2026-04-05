import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
      backgroundColor: 'var(--glass-bg)', border: '1px solid var(--accent)',
      padding: '12px 24px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '12px',
      zIndex: 2000, boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      animation: 'toastSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)', backdropFilter: 'blur(12px)'
    }}>
      <CheckCircle2 size={20} color="var(--accent)" />
      <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'white' }}>{message}</span>
      <style>{`
        @keyframes toastSlideUp {
          from { opacity: 0; transform: translate(-50%, 40px) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Toast;
