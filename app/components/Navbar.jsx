'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#scheme-matching' },
    { label: 'Community', href: '#sahayak' },
    { label: 'Updates', href: '#updates' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(11, 17, 32, 0.65)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(34, 211, 238, 0.08)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div 
        style={{ 
          maxWidth: 'var(--max-width)', 
          margin: '0 auto', 
          padding: '18px 24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}
      >
        {/* Logo Area */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 12, 
            textDecoration: 'none',
            padding: '2px 0'
          }}
        >
          <img 
            src="/logo.jpg" 
            alt="Jan Saathi Logo" 
            style={{ 
              width: 34, 
              height: 34, 
              borderRadius: 10, 
              objectFit: 'cover',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }} 
          />
          <span 
            style={{ 
              fontFamily: "'Clash Display', 'Satoshi', sans-serif",
              fontSize: 18, 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            Jan Saathi
          </span>
        </a>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {links.map((l) => (
            <motion.a 
              key={l.href} 
              href={l.href} 
              className="body-sm" 
              whileHover={{ y: -1, color: 'var(--accent-cyan)' }}
              transition={{ duration: 0.2 }}
              style={{ 
                fontFamily: "'General Sans', 'Inter', sans-serif",
                fontWeight: 600, 
                color: 'var(--text-secondary)', 
                textDecoration: 'none', 
              }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a 
          href="#hero" 
          className="btn-primary" 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ 
            padding: '10px 22px', 
            fontSize: 13,
            borderRadius: 'var(--radius-md)'
          }}
        >
          Get Started
        </motion.a>
      </div>
    </motion.header>
  );
}

