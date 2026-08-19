import React from 'react';
import CommitmentSection from '../components/home/CommitmentSection';
import PagePagination from '../components/PagePagination';

export default function CommitmentPage() {
  const fullApproachStages = [
    {
      num: '01',
      title: 'CONCEPT',
      intro: 'We begin by understanding client requirements, lifestyle requirements, site dimensions, budget expectations, project type, functional requirements, and future requirements.',
    },
    {
      num: '02',
      title: 'PLANNING',
      intro: 'This stage includes site planning, space planning, construction planning, quantity assessment, material planning, preliminary costing, and project scheduling.',
    },
    {
      num: '03',
      title: 'ESTIMATION',
      intro: 'This includes BOQ preparation, material quantities, labour requirements, rate analysis, cost estimation, scope definition, and payment stages.',
    },
    {
      num: '04',
      title: 'PROCUREMENT',
      intro: 'Coordinating requirements for cement, steel, bricks/blocks, M-sand, aggregates, tiles, plumbing, electrical, doors/windows, and paint considering specifications and budget.',
    },
    {
      num: '05',
      title: 'CONSTRUCTION',
      intro: 'Execution includes coordination of labour, masonry, RCC works, plumbing, electrical works, plastering, flooring, doors/windows, painting, and external works.',
    },
    {
      num: '06',
      title: 'QUALITY CONTROL',
      intro: 'Focus areas include material quality, measurements, workmanship, construction sequence, level and alignment, concrete/RCC execution, waterproofing, and finishing quality.',
    },
    {
      num: '07',
      title: 'FINISHING',
      intro: 'Includes flooring, painting, fixtures, doors/windows, electrical fittings, plumbing fixtures, external works, cleaning, and final corrections.',
    },
    {
      num: '08',
      title: 'COMPLETION & HANDOVER',
      intro: 'Before handover, completed work is reviewed against the agreed scope to provide an organized, inspected project ready for use.',
    },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Header */}
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">CLIENT CHARTER</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 900,
                color: 'var(--color-navy)',
                lineHeight: 1.05,
                marginBottom: '20px',
              }}
            >
              WE DON’T JUST BUILD STRUCTURES. <br />
              <span className="text-orange">WE BUILD THE PROCESS BEHIND THEM.</span>
            </h1>
          </div>
        </section>

        <CommitmentSection />

        {/* Section: OUR PROMISE */}
        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div className="editorial-card" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', padding: '56px', marginBottom: '80px' }}>
              <span className="section-tag" style={{ backgroundColor: 'var(--color-orange)', color: '#FFF' }}>OUR PROMISE</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontFamily: 'var(--font-heading)', color: '#FFF', margin: '20px 0' }}>
                FROM THE FIRST CONVERSATION TO THE FINAL HANDOVER.
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.75, maxWidth: '800px' }}>
                At First Brick, we don’t want to be known simply as the people who build your house. We want to be known as the team that helps you plan it, understand it, build it and complete it properly.
              </p>

              <blockquote
                style={{
                  marginTop: '40px',
                  padding: '32px',
                  backgroundColor: 'rgba(255, 90, 20, 0.12)',
                  borderLeft: '5px solid var(--color-orange)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                  fontWeight: 700,
                  color: '#FFF',
                  lineHeight: 1.4,
                }}
              >
                “The first brick is only the beginning. The last brick is where our responsibility is fulfilled.”
              </blockquote>
            </div>

            {/* Section: END-TO-END APPROACH */}
            <div>
              <span className="section-tag">END-TO-END APPROACH</span>
              <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '32px' }}>
                THE COMPLETE 8-STAGE BUILDING SYSTEM
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {fullApproachStages.map((st) => (
                  <div key={st.num} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--color-orange)' }}>
                      {st.num}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', textTransform: 'uppercase' }}>
                      {st.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      {st.intro}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
