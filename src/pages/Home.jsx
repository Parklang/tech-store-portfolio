import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: 'calc(100vh - var(--nav-height) - 100px)',
      textAlign: 'center', animation: 'fadeIn 0.5s ease'
    }}>
      <div style={{
        padding: '8px 16px', borderRadius: '20px',
        backgroundColor: 'var(--glass-bg)', border: '1px solid var(--border)',
        color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem',
        marginBottom: '24px', letterSpacing: '0.05em', textTransform: 'uppercase'
      }}>
        Internship Portfolio Project
      </div>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>
        Elevate Your <br />
        <span style={{ color: 'var(--accent)' }}>Digital Workspace</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
        Welcome to TechStore V2. This application demonstrates advanced React 18 patterns including browser routing, custom persistence hooks, and dynamic data filtering.
      </p>
      <Link to="/store" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        backgroundColor: 'var(--accent)', color: 'white',
        padding: '16px 32px', borderRadius: '12px', fontSize: '1.25rem',
        fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 8px 16px var(--accent-glow)'
      }}
      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px var(--accent-glow)'; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px var(--accent-glow)'; }}
      >
        Enter Store <ArrowRight size={24} />
      </Link>
    </div>
  );
};

export default Home;
