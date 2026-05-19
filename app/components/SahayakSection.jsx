'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger, SectionBadge, SectionHeading, SectionSub, FeatureCard } from './ui';

export default function SahayakSection() {
  const features = [
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Community Volunteers', desc: 'Trained local volunteers who help citizens navigate schemes, fill applications, and track status.', variant: 'blue' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: 'Localized Support', desc: 'Region-specific guidance in your language — from your district, for your community.', variant: 'green' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title: 'Progress Tracking', desc: 'Real-time application tracking with status updates and proactive nudges for pending actions.', variant: 'cyan' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Verified Information', desc: 'All scheme data sourced from official government portals — verified, accurate, and up to date.', variant: 'warm' },
  ];

  return (
    <section id="sahayak" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
        className="section-wrapper"
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <SectionBadge>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              Community
            </SectionBadge>
          </div>
          <div style={{ marginBottom: 16 }}>
            <SectionHeading>
              Sahayak <span className="text-gradient-blue">Support Portal</span>
            </SectionHeading>
          </div>
          <SectionSub>
            A human-powered support layer — trained volunteers and community helpers bridging the digital divide at the grassroots level.
          </SectionSub>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} variant={f.variant} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
