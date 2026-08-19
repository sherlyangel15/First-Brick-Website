import React from 'react';

export default function PhilosophySection() {
  const cards = [
    {
      num: '01',
      title: 'Planning',
      desc: '[Planning Description Placeholder] Comprehensive pre-construction estimation, structural blueprints, and material forecasting before excavation begins.',
    },
    {
      num: '02',
      title: 'Transparency',
      desc: '[Transparency Description Placeholder] Open-book material invoicing, real-time site updates, and crystal clear client communication with zero hidden charges.',
    },
    {
      num: '03',
      title: 'Quality',
      desc: '[Quality Description Placeholder] Uncompromising material selection, multi-stage concrete cure testing, and strict compliance with IS building codes.',
    },
    {
      num: '04',
      title: 'Control',
      desc: '[Control Description Placeholder] Direct site supervision by qualified engineers ensuring schedule adherence and rigorous budget governance.',
    },
    {
      num: '05',
      title: 'Responsibility',
      desc: '[Responsibility Description Placeholder] From the initial foundation brick to structural handover, we assume 100% end-to-end accountability.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '60px' }}>
          <span className="section-tag">OUR CORE PHILOSOPHY</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
            }}
          >
            FIVE PILLARS OF <span className="text-orange">FIRST BRICK.</span>
          </h2>
        </div>

        {/* 5 Numbered Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {cards.map((item) => (
            <div
              key={item.num}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '320px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    color: 'var(--color-orange)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {item.num}
                </span>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  height: '2px',
                  width: '40px',
                  backgroundColor: 'var(--color-orange)',
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
