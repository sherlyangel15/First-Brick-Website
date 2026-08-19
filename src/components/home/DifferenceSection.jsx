import React from 'react';
import { Layers, Calculator, HardHat, FileText, MessageSquare, Target } from 'lucide-react';

export default function DifferenceSection() {
  const strengths = [
    {
      icon: Layers,
      title: 'End-to-End Coordination',
      desc: 'One coordinated approach from initial discussion through completion.',
    },
    {
      icon: Calculator,
      title: 'Quantity & Cost Awareness',
      desc: 'BOQ, estimation, measurements and project cost monitoring.',
    },
    {
      icon: HardHat,
      title: 'Site Experience',
      desc: 'Practical understanding of construction execution and site coordination.',
    },
    {
      icon: FileText,
      title: 'Professional Documentation',
      desc: 'Quotations, estimates, work orders, bills, measurements and project records.',
    },
    {
      icon: MessageSquare,
      title: 'Client Communication',
      desc: 'Keeping the client informed about important project decisions and progress.',
    },
    {
      icon: Target,
      title: 'Execution Focus',
      desc: 'Turning drawings and plans into properly coordinated site work.',
    },
  ];

  const workflowSteps = [
    'Requirement',
    'Design',
    'Estimate',
    'Procurement',
    'Execution',
    'Quality',
    'Finishing',
    'Handover',
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '850px', marginBottom: '48px' }}>
          <span className="section-tag" style={{ backgroundColor: 'var(--color-orange)', color: 'var(--color-white)' }}>
            STUDIO ADVANTAGE
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4vw, 4.2rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginTop: '16px',
            }}
          >
            ENGINEERING BEHIND <span style={{ color: 'var(--color-orange)' }}>EVERY DECISION.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '16px', lineHeight: 1.7 }}>
            We aim to combine the practical realities of construction sites with engineering-based planning. Instead of simply executing work, we look at the complete project ecosystem.
          </p>
        </div>

        {/* Process Flow Line Ribbon */}
        <div style={{ marginBottom: '60px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '24px 32px' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-orange)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '16px' }}>
            COMPLETE PROJECT LIFECYCLE
          </p>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span style={{ fontSize: '0.92rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#FFF' }}>
                  {step}
                </span>
                {idx < workflowSteps.length - 1 && (
                  <span style={{ color: 'var(--color-orange)', fontWeight: 900 }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 6 Key Strengths Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {strengths.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '36px',
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(255, 90, 20, 0.15)',
                      border: '1px solid var(--color-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                    }}
                  >
                    <IconComp size={24} color="#FF5A14" />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '12px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
