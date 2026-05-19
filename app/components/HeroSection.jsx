'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, StatCapsule } from './ui';

const PARTICLE_DATA = [
  { id: 0, size: 3.2, top: "12%", left: "45%", opacity: 0.15, y: [0, -45], x: [0, 12], duration: 14 },
  { id: 1, size: 2.1, top: "78%", left: "23%", opacity: 0.22, y: [0, -72], x: [0, -8], duration: 18 },
  { id: 2, size: 4.8, top: "35%", left: "87%", opacity: 0.18, y: [0, -50], x: [0, 15], duration: 11 },
  { id: 3, size: 5.5, top: "62%", left: "54%", opacity: 0.28, y: [0, -80], x: [0, -18], duration: 19 },
  { id: 4, size: 2.7, top: "19%", left: "71%", opacity: 0.12, y: [0, -35], x: [0, 6], duration: 13 },
  { id: 5, size: 3.9, top: "84%", left: "68%", opacity: 0.25, y: [0, -60], x: [0, -12], duration: 16 },
  { id: 6, size: 4.2, top: "45%", left: "15%", opacity: 0.19, y: [0, -55], x: [0, 10], duration: 12 },
  { id: 7, size: 3.0, top: "28%", left: "89%", opacity: 0.24, y: [0, -65], x: [0, -14], duration: 15 },
  { id: 8, size: 5.1, top: "71%", left: "38%", opacity: 0.16, y: [0, -48], x: [0, 8], duration: 17 },
  { id: 9, size: 2.4, top: "53%", left: "80%", opacity: 0.21, y: [0, -78], x: [0, -16], duration: 20 },
  { id: 10, size: 3.6, top: "91%", left: "10%", opacity: 0.14, y: [0, -40], x: [0, 5], duration: 10 },
  { id: 11, size: 4.5, top: "15%", left: "32%", opacity: 0.27, y: [0, -70], x: [0, -10], duration: 22 },
  { id: 12, size: 2.8, top: "66%", left: "95%", opacity: 0.17, y: [0, -58], x: [0, 14], duration: 14 },
  { id: 13, size: 3.5, top: "39%", left: "59%", opacity: 0.23, y: [0, -62], x: [0, -9], duration: 16 },
  { id: 14, size: 5.8, top: "82%", left: "49%", opacity: 0.20, y: [0, -52], x: [0, 11], duration: 13 }
];

export default function HeroSection() {

  return (
    <section 
      id="hero" 
      className="hero-bg-gradient" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        paddingTop: 160, 
        paddingBottom: 110,
        borderBottom: '1px solid rgba(255, 255, 255, 0.02)'
      }}
    >
      {/* Immersive radial glows */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: 900, 
          height: 600, 
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.08), transparent 70%)', 
          pointerEvents: 'none' 
        }} 
      />
      <div 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          right: '10%', 
          width: 500, 
          height: 400, 
          background: 'radial-gradient(circle, rgba(249,115,22,0.04), transparent 75%)', 
          pointerEvents: 'none' 
        }} 
      />

      {/* Floating Particles in Hero Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {PARTICLE_DATA.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.id % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-saffron)',
              top: p.top,
              left: p.left,
              opacity: p.opacity,
            }}
            animate={{
              y: p.y,
              x: p.x,
              opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden" 
        animate="visible" 
        variants={stagger}
        className="section-wrapper"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Badge */}
        <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div className="section-badge" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.2)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            AI-Powered Governance Platform
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={fadeUp} 
          className="heading-xl" 
          style={{ 
            maxWidth: 950, 
            margin: '0 auto 24px',
            letterSpacing: '-0.04em',
            textShadow: '0 0 50px rgba(34, 211, 238, 0.05)',
            lineHeight: 1.1,
          }}
        >
          Every Indian Deserves
          <br />
          <span className="text-gradient-blue" style={{ textShadow: '0 0 40px rgba(34, 211, 238, 0.15)' }}>Their Government Benefits</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          variants={fadeUp} 
          className="body-lg" 
          style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: 680, 
            margin: '0 auto 40px',
            fontSize: '1.2rem',
            lineHeight: 1.7,
          }}
        >
          Jan Saathi uses AI to match citizens with 800+ government schemes, provide voice assistance, and bridge the welfare gap — for every Indian.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={fadeUp} 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 18, 
            marginBottom: 64 
          }}
        >
          <motion.button 
            className="btn-primary" 
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ padding: '16px 36px', fontSize: 16 }}
          >
            Check Eligibility
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: 6 }}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.button>
          <motion.button 
            className="btn-ghost" 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            style={{ padding: '16px 36px', fontSize: 16 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8, fill: 'currentColor' }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Watch How It Works
          </motion.button>
        </motion.div>

        {/* Stat Cards */}
        <motion.div 
          variants={stagger} 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 20, 
            maxWidth: 840, 
            margin: '0 auto' 
          }}
        >
          <StatCapsule value="847+" label="Govt Schemes" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>} />
          <StatCapsule value="9" label="Languages" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>} />
          <StatCapsule value="94%" label="Match Accuracy" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>} />
          <StatCapsule value="28" label="States Covered" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>} />
        </motion.div>
      </motion.div>
    </section>
  );
}

