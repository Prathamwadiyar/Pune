'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, SectionBadge, SectionHeading, SectionSub, IconBox } from './ui';

export default function SchemeMatchingSection() {
  const steps = [
    { num: '01', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, title: 'Share Your Profile', desc: 'Provide basic details — income, age, state, occupation. Voice or form input. Zero jargon.', variant: 'blue' },
    { num: '02', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'AI Scans 847+ Schemes', desc: 'Our NLP engine matches your profile against central & state-level schemes in real time.', variant: 'cyan' },
    { num: '03', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Get Matched Results', desc: 'Receive a ranked list of schemes you qualify for — with benefits, steps, and required documents.', variant: 'green' },
  ];

  const features = [
    { label: 'Central & State schemes', icon: '🏛️' },
    { label: 'Real-time eligibility check', icon: '⚡' },
    { label: 'Document checklist', icon: '📋' },
    { label: 'Apply guidance', icon: '🗺️' },
  ];

  return (
    <section id="scheme-matching" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)', background: 'transparent' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
        className="section-wrapper"
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <SectionBadge>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              AI Scheme Matching
            </SectionBadge>
          </div>
          <div style={{ marginBottom: 16 }}>
            <SectionHeading>
              Intelligent <span className="text-gradient-blue">Scheme Discovery</span>
            </SectionHeading>
          </div>
          <SectionSub>
            From PM-KISAN to Ayushman Bharat — our AI engine finds every benefit you deserve in seconds.
          </SectionSub>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
          {steps.map((s, i) => {
            const numColors = [
              'rgba(96, 165, 250, 0.05)',  // Blue
              'rgba(249, 115, 22, 0.05)',  // Saffron
              'rgba(16, 185, 129, 0.05)'   // Green
            ];
            const numGlows = [
              '0 0 20px rgba(96, 165, 250, 0.1)',
              '0 0 20px rgba(249, 115, 22, 0.1)',
              '0 0 20px rgba(16, 185, 129, 0.1)'
            ];
            return (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="glass-card" 
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 18, position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ 
                  position: 'absolute', 
                  top: 12, 
                  right: 20, 
                  fontSize: '3.5rem', 
                  fontWeight: 900, 
                  color: numColors[i] || 'rgba(255,255,255,0.03)',
                  fontFamily: "'Clash Display', 'Satoshi', sans-serif",
                  textShadow: numGlows[i] || 'none',
                  userSelect: 'none'
                }}>
                  {s.num}
                </div>
                <IconBox variant={s.variant}>{s.icon}</IconBox>
                <h3 className="heading-sm" style={{ color: 'var(--text-primary)', fontFamily: "'Satoshi', sans-serif", marginTop: 4 }}>{s.title}</h3>
                <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature pills */}
        <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.03, y: -1 }}
              className="body-sm" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8, 
                padding: '10px 20px', 
                borderRadius: 999, 
                fontWeight: 500, 
                background: 'rgba(34, 211, 238, 0.04)', 
                border: '1px solid var(--border)', 
                color: 'var(--text-secondary)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(8px)',
                cursor: 'default'
              }}
            >
              <span>{f.icon}</span> {f.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
