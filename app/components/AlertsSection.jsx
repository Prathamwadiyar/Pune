'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, SectionBadge, SectionHeading, SectionSub } from './ui';

export default function AlertsSection() {
  const alerts = [
    { type: 'New', color: 'var(--accent-success)', title: 'PM-KISAN Installment Released', desc: 'Your 17th installment of ₹2,000 has been credited. Verify your bank account.', time: '2 hours ago' },
    { type: 'Deadline', color: 'var(--accent-warning)', title: 'Ayushman Bharat Renewal', desc: 'Your health card renewal deadline is in 15 days. Complete e-KYC now.', time: '5 hours ago' },
    { type: 'Update', color: 'var(--accent-primary)', title: 'New Scheme Available', desc: 'Karnataka State Housing Scheme matches your profile. Check eligibility.', time: '1 day ago' },
    { type: 'Action', color: 'var(--accent-secondary)', title: 'Document Pending', desc: 'Upload your income certificate to complete PM Awas Yojana application.', time: '2 days ago' },
  ];

  return (
    <section id="alerts" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)', background: 'transparent' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
        className="section-wrapper"
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <SectionBadge>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              Smart Alerts
            </SectionBadge>
          </div>
          <div style={{ marginBottom: 16 }}>
            <SectionHeading>
              Never Miss an <span className="text-gradient-blue">Important Update</span>
            </SectionHeading>
          </div>
          <SectionSub>
            Personalized alerts for new schemes, deadlines, payment credits, and required actions — delivered proactively.
          </SectionSub>
        </div>

        {/* Alert feed */}
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {alerts.map((a, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="glass-card" 
              whileHover={{ x: 2, scale: 1.005 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20 }}
            >
              <div style={{ 
                flexShrink: 0, 
                padding: '6px 12px', 
                borderRadius: 8, 
                fontSize: 10, 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                color: a.color, 
                background: `${a.color}0A`,
                border: `1px solid ${a.color}30`,
                boxShadow: `0 0 12px ${a.color}08`,
                fontFamily: "'General Sans', 'Inter', sans-serif"
              }}>
                {a.type}
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="body-md" style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4, fontFamily: "'Satoshi', sans-serif" }}>{a.title}</h4>
                <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
              <span className="body-xs" style={{ color: 'var(--text-muted)', flexShrink: 0, whiteSpace: 'nowrap', fontWeight: 500 }}>{a.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
