import React from 'react';
import ProjectsSection from '../components/home/ProjectsSection';

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      
      <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
        <div className="container">
          <span className="section-tag">PROJECT PORTFOLIO</span>
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
            OUR BUILT <br />
            <span className="text-orange">WORKS.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
            [Projects Page Header Placeholder] Explore our portfolio of residential houses, luxury villas, commercial spaces, and structural engineering consultancies across Salem and Tamil Nadu.
          </p>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
}
