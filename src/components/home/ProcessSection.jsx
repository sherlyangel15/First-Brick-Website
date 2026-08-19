import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'Concept', desc: '[Concept Stage] Initial architectural brief, site assessment, and client vision alignment.' },
    { num: '02', title: 'Planning', desc: '[Planning Stage] 2D/3D structural drafting, soil testing, and local authority compliance.' },
    { num: '03', title: 'Estimation', desc: '[Estimation Stage] Transparent Bill of Quantities (BOQ), material specs, and budget lock.' },
    { num: '04', title: 'Procurement', desc: '[Procurement Stage] Sourcing premium grade steel, cement, bricks, and structural materials.' },
    { num: '05', title: 'Construction', desc: '[Construction Stage] Structural excavation, footing, RCC framing, and masonry work.' },
    { num: '06', title: 'Quality Control', desc: '[Quality Control] Multi-stage cube testing, plumbing pressure tests, and site audits.' },
    { num: '07', title: 'Finishing', desc: '[Finishing Stage] Electrical fitting, plastering, custom flooring, painting, and joinery.' },
    { num: '08', title: 'Handover', desc: '[Completion & Handover] Final walkthrough, structural certificate, key handover.' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '700px', marginBottom: '60px' }}>
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
            [Process Subtitle Placeholder] A disciplined engineering workflow designed to eliminate budget surprises and ensure structural perfection.
          </p>
        </div>

        {/* Desktop Horizontal Scrolling Editorial Timeline */}
        <div className="desktop-timeline-only" style={{ position: 'relative', paddingBottom: '20px' }}>
          
          {/* Horizontal Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: 0,
              right: 0,
              height: '3px',
              backgroundColor: 'var(--color-border)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              paddingTop: '10px',
              paddingBottom: '30px',
              scrollbarWidth: 'thin',
              zIndex: 2,
              position: 'relative',
            }}
          >
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  minWidth: '280px',
                  maxWidth: '300px',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  padding: '30px 24px',
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'var(--transition-smooth)',
                }}
                className="editorial-card"
              >
                {/* Stage Badge Circle */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-orange)',
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2px',
                    marginBottom: '20px',
                    boxShadow: '0 4px 12px rgba(255, 90, 20, 0.3)',
                  }}
                >
                  {step.num}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
            <span>Scroll horizontally to view full process</span>
            <ArrowRight size={14} color="#FF5A14" />
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mobile-timeline-only" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                display: 'flex',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: 'var(--color-orange)',
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
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
