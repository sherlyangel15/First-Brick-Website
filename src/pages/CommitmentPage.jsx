import React from 'react';
import CommitmentSection from '../components/home/CommitmentSection';
import PagePagination from '../components/PagePagination';

export default function CommitmentPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
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
              OUR CLIENT <br />
              <span className="text-orange">COMMITMENT.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Commitment Page Header Placeholder] We build lasting client relationships founded on transparency, open communication, and absolute site accountability.
            </p>
          </div>
        </section>

        <CommitmentSection />
      </div>

      <PagePagination />
    </div>
  );
}
