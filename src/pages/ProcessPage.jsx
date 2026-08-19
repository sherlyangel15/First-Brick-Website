import React from 'react';
import ProcessSection from '../components/home/ProcessSection';
import PagePagination from '../components/PagePagination';

export default function ProcessPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">ENGINEERING METHODOLOGY</span>
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
              HOW WE <br />
              <span className="text-orange">EXECUTE.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Process Header Placeholder] Our systematic 8-stage civil engineering roadmap guarantees structural integrity, zero budget inflation, and timely handover.
            </p>
          </div>
        </section>

        <ProcessSection />
      </div>

      <PagePagination />
    </div>
  );
}
