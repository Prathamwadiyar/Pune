'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function SectionBadge({ children, variant = 'blue' }) {
  const cls = variant === 'warm' ? 'section-badge-warm' : variant === 'green' ? 'section-badge-green' : 'section-badge';
  return (
    <motion.span variants={fadeUp} className={cls} style={{ display: 'inline-flex' }}>
      {children}
    </motion.span>
  );
}

export function SectionHeading({ children, className = '' }) {
  return (
    <motion.h2
      variants={fadeUp}
      className={`heading-lg ${className}`}
      style={{ 
        color: 'var(--text-primary)',
        fontFamily: "'Clash Display', 'Satoshi', sans-serif",
      }}
    >
      {children}
    </motion.h2>
  );
}

export function SectionSub({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="body-lg"
      style={{ 
        color: 'var(--text-secondary)', 
        maxWidth: 620, 
        margin: '0 auto',
        lineHeight: 1.7,
      }}
    >
      {children}
    </motion.p>
  );
}

export function IconBox({ children, variant = 'blue' }) {
  return <div className={`icon-box icon-box-${variant}`}>{children}</div>;
}

export function FeatureCard({ icon, title, desc, variant = 'blue' }) {
  return (
    <motion.div 
      variants={fadeUp} 
      className="glass-card" 
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ padding: '32px' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <IconBox variant={variant}>{icon}</IconBox>
        <h3 className="heading-sm" style={{ color: 'var(--text-primary)', fontFamily: "'Satoshi', sans-serif" }}>{title}</h3>
        <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{desc}</p>
      </div>
    </motion.div>
  );
}

export function StatCapsule({ value, label, icon }) {
  return (
    <motion.div 
      variants={fadeUp} 
      className="stat-capsule" 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
    >
      {icon && <div style={{ color: 'var(--accent-cyan)', fontSize: 20 }}>{icon}</div>}
      <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Clash Display', 'Satoshi', sans-serif" }}>{value}</div>
      <div className="body-xs" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{label}</div>
    </motion.div>
  );
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

export { fadeUp };

