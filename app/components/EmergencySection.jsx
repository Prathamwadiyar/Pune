'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, SectionBadge, SectionHeading, SectionSub, IconBox } from './ui';

export default function EmergencySection() {
  const services = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      title: 'Emergency Helplines',
      desc: 'One-tap access to 112, women helpline (181), child helpline (1098), and state-specific emergency services.',
      variant: 'warm',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Cyber Crime Reporting',
      desc: 'Report online fraud, identity theft, phishing, and digital scams directly through the app with guided assistance.',
      variant: 'blue',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
      title: 'FIR Filing Assistance',
      desc: 'AI-guided complaint drafting in your language with automatic translation to English for official submission.',
      variant: 'green',
    },
  ];

  const helplines = [
    { num: '112', label: 'National Emergency' },
    { num: '181', label: 'Women Helpline' },
    { num: '1098', label: 'Child Helpline' },
    { num: '1930', label: 'Cyber Crime' },
  ];

  return (
    <section id="emergency" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)', background: 'transparent' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
        className="section-wrapper"
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <SectionBadge variant="warm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Emergency Services
            </SectionBadge>
          </div>
          <div style={{ marginBottom: 16 }}>
            <SectionHeading>
              Help When You <span className="text-gradient-warm">Need It Most</span>
            </SectionHeading>
          </div>
          <SectionSub>
            Instant access to emergency services, cyber crime reporting, and AI-assisted complaint filing — available 24/7 in your language.
          </SectionSub>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="glass-card" 
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '32px 28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}
            >
              <IconBox variant={s.variant}>{s.icon}</IconBox>
              <h3 className="heading-sm" style={{ color: 'var(--text-primary)', fontFamily: "'Satoshi', sans-serif" }}>{s.title}</h3>
              <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Helpline bar */}
        <motion.div 
          variants={fadeUp} 
          className="glass-card" 
          whileHover={{ scale: 1.005 }}
          style={{ 
            padding: '20px 32px', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 48, 
            flexWrap: 'wrap',
            borderColor: 'rgba(249, 115, 22, 0.15)',
            boxShadow: 'var(--shadow-md), 0 0 20px rgba(249, 115, 22, 0.04)'
          }}
        >
          {helplines.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                color: 'var(--accent-saffron)', 
                fontFamily: "'Clash Display', 'Satoshi', sans-serif",
                textShadow: '0 0 12px rgba(249, 115, 22, 0.2)' 
              }}>{h.num}</span>
              <span className="body-xs" style={{ color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
