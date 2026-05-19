'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, SectionBadge, SectionHeading, SectionSub, IconBox } from './ui';

export default function ProblemSection() {
  const problems = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      stat: '₹2.7L Cr',
      label: 'Unclaimed Welfare',
      desc: 'Trillions in government benefits go unclaimed every year because citizens don\'t know they qualify.',
      variant: 'warm',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
      stat: '78%',
      label: 'Awareness Gap',
      desc: 'Nearly 4 out of 5 eligible citizens are unaware of the schemes they can access.',
      variant: 'blue',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      stat: '22+',
      label: 'Languages Excluded',
      desc: 'Most digital government services are English-first, leaving millions of non-English speakers behind.',
      variant: 'cyan',
    },
  ];

  return (
    <section id="problem" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
        className="section-wrapper"
        style={{ textAlign: 'center' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <SectionBadge variant="warm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            The Problem
          </SectionBadge>
        </div>

        <div style={{ marginBottom: 16 }}>
          <SectionHeading>
            India&apos;s Welfare Gap is <span className="text-gradient-warm">Massive</span>
          </SectionHeading>
        </div>
        <SectionSub>
          Millions of eligible citizens miss out on life-changing government benefits due to lack of awareness, language barriers, and complex processes.
        </SectionSub>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56 }}>
          {problems.map((p, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="glass-card" 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '32px 28px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 18 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconBox variant={p.variant}>{p.icon}</IconBox>
                <span className="body-xs" style={{ color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{p.label}</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Clash Display', 'Satoshi', sans-serif", letterSpacing: '-0.02em' }}>{p.stat}</span>
              </div>
              <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
