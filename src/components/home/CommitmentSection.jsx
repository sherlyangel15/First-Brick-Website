import React from 'react';
import { ShieldCheck, MessageCircle, Sparkles, DollarSign, Clock, CheckSquare } from 'lucide-react';

export default function CommitmentSection() {
  const commitments = [
    {
      title: 'Transparency',
      icon: ShieldCheck,
      desc: 'We believe clients should understand what they are paying for and why. Our estimates, quotations, measurements and project costs are structured to provide clarity wherever possible.',
    },
    {
      title: 'Communication',
      icon: MessageCircle,
      desc: 'Keeping the client informed about important project decisions, material specs, site progress, and milestone schedules.',
    },
    {
      title: 'Quality',
      icon: Sparkles,
      desc: 'Quality begins with appropriate materials, correct construction practices, proper supervision, workmanship and quality checks throughout.',
    },
    {
      title: 'Budget Awareness',
      icon: DollarSign,
      desc: 'Preparing realistic pre-construction estimates and monitoring project costs to prevent unexpected variations.',
    },
    {
      title: 'Timeline Management',
      icon: Clock,
      desc: 'Coordinating labour, material procurement, and site activities systematically according to schedule.',
    },
    {
      title: 'Accountability',
      icon: CheckSquare,
      desc: 'Staying involved throughout the project until the agreed scope is completed and the property is ready for handover.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Main Heading */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <span className="section-tag">CLIENT CHARTER</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
              marginTop: '12px',
              lineHeight: 1.1,
            }}
          >
            WE DON’T JUST BUILD STRUCTURES. <br />
            <span className="text-orange">WE BUILD THE PROCESS BEHIND THEM.</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-muted)', marginTop: '16px' }}>
            Building trust before we build walls. Our 6-point client commitment framework.
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
