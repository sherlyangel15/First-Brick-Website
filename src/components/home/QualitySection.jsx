import React from 'react';
import { ShieldCheck, Check, Award, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QualitySection() {
  const qualityPillars = [
    { title: 'Material Selection', desc: 'Sourcing certified cement, steel, bricks, M-sand, and aggregates matching structural specs and project budget.' },
    { title: 'Structural Execution', desc: 'Concrete mix design, RCC framing, and masonry work adhering strictly to Indian Standard (IS) codes.' },
    { title: 'Site Supervision', desc: 'Direct daily oversight by civil engineering professionals ensuring zero deviation from blueprints.' },
    { title: 'Workmanship', desc: 'Skilled labour deployment for plastering, tile alignment, joinery, and watertight plumbing.' },
    { title: 'Measurements', desc: 'Precise quantity surveying and bill measurements ensuring complete clarity for every sq.ft built.' },
    { title: 'Quality Checks', desc: 'Multi-stage concrete cube testing, level/alignment verification, and waterproofing inspections.' },
    { title: 'Safety Governance', desc: 'Site safety protocols, protective equipment, and zero-compromise worker protection during execution.' },
    { title: 'Documentation', desc: 'Transparent quotations, estimates, work orders, bills, and complete structural project records.' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
          <span className="section-tag">CONSTRUCTION GOVERNANCE</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginTop: '12px',
              marginBottom: '20px',
            }}
          >
            QUALITY & CONSTRUCTION <span className="text-orange">APPROACH.</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Quality is not limited to the final appearance of a building. It begins with appropriate materials, correct construction practices, proper supervision, workmanship and quality checks throughout the project.
          </p>
        </div>

        {/* 8 Editorial Quality Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {qualityPillars.map((item, idx) => (
            <div key={item.title} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255, 90, 20, 0.12)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px' }}>
                    <Check size={18} color="#FF5A14" />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    0{idx + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
