'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, SectionBadge, SectionHeading, IconBox } from './ui';

export default function EligibilitySection() {
  return (
    <section id="eligibility" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)', background: 'transparent' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
        className="section-wrapper"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* Left copy */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <SectionBadge variant="green">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Gap Analysis
              </SectionBadge>
            </div>
            <div style={{ marginBottom: 16 }}>
              <SectionHeading>
                Find Your <span className="text-gradient-blue">Eligibility Gaps</span>
              </SectionHeading>
            </div>
            <motion.p variants={fadeUp} className="body-lg" style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
              Jan Saathi doesn&apos;t just match — it analyzes what you&apos;re missing. Get actionable insights on which documents to submit, which criteria to meet, and how to bridge the gap.
            </motion.p>
            <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, text: 'OCR-powered document verification' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, text: 'Step-by-step gap resolution plan' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>, text: 'Eligibility score with improvement tips' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ 
                    width: 38, 
                    height: 38, 
                    borderRadius: 10, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0, 
                    background: 'rgba(34, 211, 238, 0.08)', 
                    border: '1px solid rgba(34, 211, 238, 0.15)',
                    color: 'var(--accent-cyan)' 
                  }}>
                    {item.icon}
                  </div>
                  <span className="body-md" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
 
          {/* Right visual card */}
          <motion.div 
            variants={fadeUp} 
            className="glass-card" 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 32, boxShadow: 'var(--shadow-lg), 0 0 30px rgba(34,211,238,0.05)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', color: 'var(--accent-cyan)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
              </div>
              <div>
                <p className="heading-sm" style={{ fontFamily: "'Satoshi', sans-serif" }}>Eligibility Report</p>
                <p className="body-xs" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Auto-generated for your profile</p>
              </div>
            </div>
            {[
              { label: 'PM-KISAN', pct: 92, color: 'var(--accent-success)' },
              { label: 'Ayushman Bharat', pct: 78, color: 'var(--accent-blue)' },
              { label: 'PM Awas Yojana', pct: 45, color: 'var(--accent-saffron)' },
              { label: 'Ujjwala Yojana', pct: 88, color: 'var(--accent-success)' },
            ].map((bar, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="body-sm" style={{ fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Satoshi', sans-serif" }}>{bar.label}</span>
                  <span className="body-sm" style={{ fontWeight: 700, color: bar.color }}>{bar.pct}%</span>
                </div>
                <div style={{ width: '100%', height: 6, borderRadius: 999, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ 
                      height: '100%', 
                      borderRadius: 999, 
                      background: bar.color,
                      boxShadow: `0 0 10px ${bar.color}40`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--accent-saffron)', boxShadow: '0 0 8px var(--accent-saffron)' }} />
              <span className="body-xs" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                Gap detected: <strong style={{ color: 'var(--text-primary)' }}>PM Awas</strong> — missing income certificate
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
