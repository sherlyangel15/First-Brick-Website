import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, PhoneCall, Mail } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="architectural-bg-grid-dark"
    >
      {/* Orange Accent Top Bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', backgroundColor: 'var(--color-orange)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        <span className="section-tag" style={{ backgroundColor: 'var(--color-orange)', color: 'var(--color-white)', marginBottom: '24px' }}>
          READY TO BUILD?
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
            fontWeight: 900,
            color: 'var(--color-white)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: '1000px',
            margin: '0 auto 32px auto',
          }}
        >
          FROM THE FIRST IDEA <br />
          TO THE <span style={{ color: 'var(--color-orange)' }}>FINAL BRICK.</span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '640px',
            margin: '0 auto 48px auto',
            lineHeight: 1.6,
          }}
        >
          [CTA Subtitle Placeholder] Connect directly with founder & lead engineer Aravinth Jaganathan for site consultation, estimation, or engineering inquiry.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ padding: '20px 48px', fontSize: '1rem' }}
          >
            START A PROJECT
            <ArrowUpRight size={22} />
          </Link>

          <a
            href="tel:+919876543210"
            className="btn-white"
            style={{ padding: '20px 36px', fontSize: '1rem' }}
          >
            <PhoneCall size={20} color="#0B3475" />
            CALL STUDIO DIRECTLY
          </a>
        </div>

        {/* Supporting Quote */}
        <p
          style={{
            marginTop: '48px',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'var(--color-orange)',
            letterSpacing: '0.05em',
          }}
        >
          “Not only first brick, last brick also.”
        </p>

      </div>
    </section>
  );
}
