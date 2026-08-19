import React from 'react';
import { ShieldCheck, MessageCircle, Sparkles, DollarSign, Clock, CheckSquare } from 'lucide-react';

export default function CommitmentSection() {
  const commitments = [
    {
      title: 'Transparency',
      icon: ShieldCheck,
      desc: '[Commitment Placeholder] Complete open-book financial reporting, detailed material invoices, and no hidden cost surprises.',
    },
    {
      title: 'Communication',
      icon: MessageCircle,
      desc: '[Commitment Placeholder] Direct access to site engineers, weekly project updates, and photo progression logs.',
    },
    {
      title: 'Quality',
      icon: Sparkles,
      desc: '[Commitment Placeholder] Highest structural standards adhering to certified IS codes and premium brand materials.',
    },
    {
      title: 'Budget Awareness',
      icon: DollarSign,
      desc: '[Commitment Placeholder] Strict Bill of Quantities (BOQ) governance ensuring cost optimization without structural compromise.',
    },
    {
      title: 'Timeline Management',
      icon: Clock,
      desc: '[Commitment Placeholder] Phase-locked milestones and aggressive schedule adherence from site prep to final handover.',
    },
    {
      title: 'Accountability',
      icon: CheckSquare,
      desc: '[Commitment Placeholder] Single point founder ownership — Aravinth Jaganathan personally oversees key project handovers.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <span className="section-tag">OUR GUARANTEE</span>
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
            OUR SIX CLIENT <span className="text-orange">COMMITMENTS.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginTop: '12px' }}>
            [Commitment Subtitle Placeholder] Building trust before we build walls. Our 6-point client commitment framework.
          </p>
        </div>

        {/* 6 Visual Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {commitments.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="editorial-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: 'var(--color-navy)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2px',
                  }}
                >
                  <IconComp size={26} color="#FF5A14" />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
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
