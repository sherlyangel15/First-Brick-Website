import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PagePagination from '../components/PagePagination';

export default function FounderPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">LEADERSHIP & VISION</span>
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
              ARAVINTH <br />
              <span className="text-orange">JAGANATHAN.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              Founder & Lead Civil Engineer — Driving First Brick's commitment to technical mastery, transparent cost control, and flawless execution.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
              
              <div className="editorial-card" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', padding: '48px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-orange)', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>
                  FOUNDER STATEMENT
                </span>
                <blockquote
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontStyle: 'italic',
                    margin: '24px 0',
                    lineHeight: 1.4,
                    borderLeft: '4px solid var(--color-orange)',
                    paddingLeft: '20px',
                  }}
                >
                  “Not only first brick, last brick also.”
                </blockquote>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  [Founder Quote Placeholder] Every structure we take on is built as if it were our own. We stay involved at the site level until the final keys are handed over.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '20px' }}>
                  Hands-On Engineering Leadership
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  [Founder Biography Placeholder] Aravinth Jaganathan founded First Brick with a clear vision: to establish an engineering studio where structural safety, precise cost estimation, and clear client communication form the backbone of every project.
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                  With deep domain expertise in civil construction, structural analysis, and site management, Aravinth personally ensures every project meets international quality benchmarks.
                </p>

                <Link to="/contact" className="btn-primary">
                  CONNECT WITH ARAVINTH
                  <ArrowUpRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
