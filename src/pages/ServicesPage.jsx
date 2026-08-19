import React from 'react';
import ServicesSection from '../components/home/ServicesSection';
import PagePagination from '../components/PagePagination';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">FULL CAPABILITIES</span>
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
              OUR CIVIL <br />
              <span className="text-orange">SERVICES.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Services Header Placeholder] Comprehensive civil construction, structural engineering consultancy, and turnkey project management solutions.
            </p>
          </div>
        </section>

        <ServicesSection />
      </div>

      <PagePagination />
    </div>
  );
}
