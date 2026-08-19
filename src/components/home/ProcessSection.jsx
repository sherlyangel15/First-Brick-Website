import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'CONCEPT',
      intro: 'We begin by understanding the client’s vision and functional goals.',
      items: [
        'Client requirements',
        'Lifestyle requirements',
        'Site dimensions',
        'Budget expectations',
        'Project type',
        'Functional requirements',
        'Future requirements',
      ],
    },
    {
      num: '02',
      title: 'PLANNING',
      intro: 'Coordinating project requirements with drawings and technical info.',
      items: [
        'Site planning',
        'Space planning',
        'Construction planning',
        'Quantity assessment',
        'Material planning',
        'Preliminary costing',
        'Project scheduling',
      ],
    },
    {
      num: '03',
      title: 'ESTIMATION',
      intro: 'Establishing expected requirements before construction begins to avoid unexpected variations.',
      items: [
        'BOQ preparation',
        'Material quantities',
        'Labour requirements',
        'Rate analysis',
        'Cost estimation',
        'Scope definition',
        'Payment stages',
      ],
    },
    {
      num: '04',
      title: 'PROCUREMENT',
      intro: 'Coordinating timely availability of specified building materials considering quality and budget.',
      items: [
        'Cement & Steel',
        'Bricks / blocks',
        'M-sand & Aggregates',
        'Tiles & Flooring',
        'Plumbing materials',
        'Electrical materials',
        'Doors, windows & Paint',
      ],
    },
    {
      num: '05',
      title: 'CONSTRUCTION',
      intro: 'Moving into site execution following strict project sequence and site safety.',
      items: [
        'Labour & Masonry',
        'RCC structural works',
        'Plumbing & Electrical',
        'Plastering & Flooring',
        'Doors / windows installation',
        'Painting & Finishing',
        'External works',
      ],
    },
    {
      num: '06',
      title: 'QUALITY CONTROL',
      intro: 'Checks incorporated throughout construction rather than waiting until the end.',
      items: [
        'Material quality & testing',
        'Measurements & Workmanship',
        'Construction sequence',
        'Level and alignment',
        'Concrete / RCC execution',
        'Waterproofing checks',
        'Finishing quality',
      ],
    },
    {
      num: '07',
      title: 'FINISHING',
      intro: 'Bringing together interior, exterior, and utility fittings for handover readiness.',
      items: [
        'Flooring & Painting',
        'Sanitary & Plumbing fixtures',
        'Doors, windows & Joinery',
        'Electrical fittings',
        'External works & Cleaning',
        'Final site corrections',
      ],
    },
    {
      num: '08',
      title: 'COMPLETION & HANDOVER',
      intro: 'Reviewing completed work against agreed scope to deliver an inspected property.',
      items: [
        'Agreed scope review',
        'Final quality walkthrough',
        'Organised documentation',
        'Site cleaning & handover',
        'Key delivery',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '750px', marginBottom: '60px' }}>
          <span className="section-tag">EXECUTION ROADMAP</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
              marginTop: '12px',
            }}
          >
            OUR 8-STAGE <span className="text-orange">PROCESS.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginTop: '12px' }}>
            A disciplined engineering workflow designed to reduce unexpected cost variations and deliver organized building handover.
          </p>
        </div>

        {/* Interactive Desktop Stage Selector Tabs */}
        <div className="desktop-timeline-only" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '8px', borderBottom: '2px solid var(--color-border)', paddingBottom: '16px' }}>
            {steps.map((st, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={st.num}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive ? '3px solid var(--color-orange)' : '3px solid transparent',
                    paddingBottom: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: isActive ? 'var(--color-orange)' : 'var(--color-text-muted)' }}>
                    {st.num}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: isActive ? 'var(--color-navy)' : 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Display */}
          <div className="editorial-card" style={{ padding: '40px', backgroundColor: 'var(--color-bg)', marginTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-orange)', lineHeight: 1 }}>
                {steps[activeTab].num}
              </span>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', textTransform: 'uppercase' }}>
                  {steps[activeTab].title}
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)' }}>
                  {steps[activeTab].intro}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: '24px' }}>
              {steps[activeTab].items.map((sub) => (
                <div key={sub} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FFF', padding: '12px 16px', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                  <CheckCircle2 size={16} color="#FF5A14" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-navy)', fontWeight: 600 }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mobile-timeline-only" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: 'var(--color-bg)',
                borderLeft: '4px solid var(--color-orange)',
                borderTop: '1px solid var(--color-border)',
                borderRight: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: 'var(--color-orange)',
                  }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase' }}>
                  {step.title}
                </h3>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                {step.intro}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {step.items.map((sub) => (
                  <div key={sub} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                    <span style={{ color: '#FF5A14' }}>—</span> {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-timeline-only {
            display: none !important;
          }
          .mobile-timeline-only {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-timeline-only {
            display: none !important;
          }
          .desktop-timeline-only {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
