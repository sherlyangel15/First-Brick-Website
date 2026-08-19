import React from 'react';
import PhilosophySection from '../components/home/PhilosophySection';
import DifferenceSection from '../components/home/DifferenceSection';
import PagePagination from '../components/PagePagination';

export default function WhyPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">STUDIO ADVANTAGE</span>
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
              PLAN BETTER. BUILD BETTER. <br />
              <span className="text-orange">DELIVER BETTER.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '680px', lineHeight: 1.6 }}>
              A construction project can become expensive and complicated when decisions are made without proper planning. At First Brick, we focus on 5 fundamental principles and engineering discipline.
            </p>
          </div>
        </section>

        <PhilosophySection />
        <DifferenceSection />
      </div>

      <PagePagination />
    </div>
  );
}
