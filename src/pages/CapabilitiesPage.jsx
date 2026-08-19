import React from 'react';
import ProjectsSection from '../components/home/ProjectsSection';
import PagePagination from '../components/PagePagination';

export default function CapabilitiesPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">PROJECT CAPABILITIES</span>
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
              OUR BUILDING <br />
              <span className="text-orange">CAPABILITIES.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              Explore our civil construction capabilities spanning individual homes, luxury villas, commercial projects, structural retrofitting, and quantity surveying.
            </p>
          </div>
        </section>

        <ProjectsSection />
      </div>

      <PagePagination />
    </div>
  );
}
