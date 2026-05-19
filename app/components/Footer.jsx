'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from './ui';

export default function Footer() {
  const columns = [
    { title: 'Platform', links: ['Scheme Finder', 'Voice Assistant', 'Gap Analysis', 'Community Portal'] },
    { title: 'Resources', links: ['Documentation', 'API Access', 'Data Sources', 'Privacy Policy'] },
    { title: 'Connect', links: ['About Us', 'Careers', 'Contact', 'Press Kit'] },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'transparent' }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        className="section-wrapper"
        style={{ paddingTop: 64, paddingBottom: 40 }}
      >
        {/* CTA Band */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: 12 }}>
            Ready to discover your benefits?
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 24px' }}>
            Join thousands of Indians who are already using Jan Saathi to access their rightful government benefits.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </motion.div>

        <div className="divider-glow" style={{ marginBottom: 40 }} />

        {/* Footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <img src="/logo.jpg" alt="Jan Saathi Logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>Jan Saathi</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              AI-powered governance platform making government welfare accessible to every Indian.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="body-sm" style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link, j) => (
                  <a key={j} href="#" className="body-sm" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="divider-glow" style={{ marginBottom: 24 }} />

        {/* Copyright */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <p className="body-xs" style={{ color: 'var(--text-muted)' }}>
            © 2026 Jan Saathi. Built for India. Built with ❤️
          </p>
          <p className="body-xs" style={{ color: 'var(--text-muted)' }}>
            🇮🇳 Designed for 1.4 billion citizens
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
