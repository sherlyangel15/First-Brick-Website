import React from 'react';
import AboutSection from '../components/home/AboutSection';
import PagePagination from '../components/PagePagination';
import { Building, Shield, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">ABOUT FIRST BRICK</span>
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
              THE STUDIO & <br />
              <span className="text-orange">PHILOSOPHY.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [About Page Header Placeholder] FIRST BRICK is a premium civil engineering and construction studio dedicated to structural excellence, material purity, and client transparency in Salem, Tamil Nadu.
            </p>
          </div>
        </section>

        <AboutSection />

        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Engineering Precision Meets Architectural Vision
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  [About Content Placeholder] Founded by Aravinth Jaganathan, First Brick was established to bring high-end engineering rigour and modern management practices to civil construction. We believe every building is an enduring legacy.
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  Our studio manages all facets of residential, commercial, and structural projects — ensuring every phase from soil test to handover adheres strictly to IS codes.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="editorial-card">
                  <Building size={32} color="#FF5A14" />
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', margin: '12px 0 6px 0' }}>Bespoke Builds</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Tailored civil construction for luxury homes and commercial spaces.</p>
                </div>
                <div className="editorial-card">
                  <Shield size={32} color="#FF5A14" />
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', margin: '12px 0 6px 0' }}>IS Compliance</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Certified cube testing, steel tensile analysis, and site safety.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
