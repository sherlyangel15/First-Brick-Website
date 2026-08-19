import React from 'react';
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
              WHY FIRST <br />
              <span className="text-orange">BRICK.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Why First Brick Header Placeholder] Discover our engineering-led approach, direct site supervision, and transparent cost management.
            </p>
          </div>
        </section>

        <DifferenceSection />
      </div>

      <PagePagination />
    </div>
  );
}
