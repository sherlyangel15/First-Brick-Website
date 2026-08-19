import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Small Orange Tag */}
        <div className="section-tag">ABOUT FIRST BRICK</div>

        {/* Two-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'flex-start',
            marginTop: '20px',
          }}
        >
          {/* Left Column: Large Heading */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              REDEFINING CIVIL CONSTRUCTION THROUGH <span className="text-orange">PRECISION & INTEGRITY.</span>
            </h2>
          </div>

          {/* Right Column: Short Paragraph Placeholder & CTA Link */}
          <div>
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.7,
                marginBottom: '24px',
                fontWeight: 400,
              }}
            >
              [About Paragraph Placeholder] FIRST BRICK is a specialized civil construction and structural engineering firm founded by Aravinth Jaganathan. Built on a foundation of technical mastery, end-to-end accountability, and meticulous cost control, we bridge the gap between visionary architectural concepts and flawless site execution.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}
            >
              Whether crafting bespoke residential homes, premium villas, or complex commercial structures, our studio guarantees rigorous engineering standards at every phase of build.
            </p>

            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-navy)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderBottom: '2px solid var(--color-orange)',
                paddingBottom: '4px',
                transition: 'var(--transition-smooth)',
              }}
            >
              READ FULL COMPANY PROFILE
              <ArrowUpRight size={18} color="#FF5A14" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
