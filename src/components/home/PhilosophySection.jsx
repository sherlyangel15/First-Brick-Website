import React from 'react';

export default function PhilosophySection() {
  const pillars = [
    {
      num: '01',
      title: 'PLANNING',
      desc: 'Every successful project starts with proper planning. We study the client’s requirements, site conditions, drawings, quantities, materials, construction methodology and expected budget before execution.',
    },
    {
      num: '02',
      title: 'TRANSPARENCY',
      desc: 'We believe clients should understand what they are paying for and why. Our estimates, quotations, measurements and project costs are structured to provide clarity wherever possible.',
    },
    {
      num: '03',
      title: 'QUALITY',
      desc: 'Quality is not limited to the final appearance of a building. It begins with appropriate materials, correct construction practices, proper supervision, workmanship and quality checks throughout the project.',
    },
    {
      num: '04',
      title: 'CONTROL',
      desc: 'Construction involves continuously changing quantities, materials, labour and schedules. We focus on controlling Cost + Quantity + Quality + Time to keep the project moving systematically.',
    },
    {
      num: '05',
      title: 'RESPONSIBILITY',
      desc: 'Our responsibility doesn’t end after starting the work. We believe in staying involved throughout the project until the agreed scope is completed and the property is ready for handover.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
          <span className="section-tag">OUR PHILOSOPHY</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
              marginTop: '12px',
              marginBottom: '20px',
            }}
          >
            PLAN BETTER. BUILD BETTER. <span className="text-orange">DELIVER BETTER.</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            A construction project can become expensive and complicated when decisions are made without proper planning. At First Brick, we focus on five fundamental principles:
          </p>
        </div>

        {/* 5 Numbered Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((item) => (
            <div
              key={item.num}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
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
                    fontSize: '1.35rem',
                    fontWeight: 800,
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
                    lineHeight: 1.65,
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
