import React from 'react';
import { Layers, Calculator, HardHat, FileText, MessageSquare, Target } from 'lucide-react';

export default function DifferenceSection() {
  const features = [
    {
      icon: Layers,
      title: 'End-to-End Coordination',
      desc: '[Feature Description Placeholder] Seamless integration between architectural design, structural engineering, site workforce, and material suppliers under single-point leadership.',
    },
    {
      icon: Calculator,
      title: 'Quantity & Cost Awareness',
      desc: '[Feature Description Placeholder] Comprehensive bill of quantities (BOQ) prepared prior to build, preventing cost inflation and budget overruns.',
    },
    {
      icon: HardHat,
      title: 'Site Experience',
      desc: '[Feature Description Placeholder] Hands-on civil engineering leadership directly on-site, ensuring immediate problem-solving and rigorous quality assurance.',
    },
    {
      icon: FileText,
      title: 'Professional Documentation',
      desc: '[Feature Description Placeholder] Standardized milestone reporting, architectural drawings compliance, legal approvals, and warranty handovers.',
    },
    {
      icon: MessageSquare,
      title: 'Client Communication',
      desc: '[Feature Description Placeholder] Scheduled weekly client walk-throughs, digital photo progress logs, and complete financial clarity.',
    },
    {
      icon: Target,
      title: 'Execution Focus',
      desc: '[Feature Description Placeholder] Unyielding commitment to timeline delivery without sacrificing structural durability or architectural detail.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
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
            WHAT MAKES <span style={{ color: 'var(--color-orange)' }}>FIRST BRICK</span> DIFFERENT.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '16px' }}>
            [Editorial Subtitle Placeholder] Unlike generic contractors, First Brick operates as an engineering-led construction studio, combining architectural sensitivity with rigorous civil discipline.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {features.map((item, idx) => {
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

                <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
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
