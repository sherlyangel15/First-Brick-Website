import React from 'react';
import QualitySection from '../components/home/QualitySection';
import PagePagination from '../components/PagePagination';

export default function QualityPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">QUALITY PROTOCOLS</span>
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
              QUALITY & <br />
              <span className="text-orange">APPROACH.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Quality Page Header Placeholder] Unyielding structural standards, IS code material testing, and rigorous site inspection protocols.
            </p>
          </div>
        </section>

        <QualitySection />
      </div>

      <PagePagination />
    </div>
  );
}
