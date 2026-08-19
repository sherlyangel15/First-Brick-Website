import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', backgroundColor: 'var(--color-orange)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        <span className="section-tag" style={{ backgroundColor: 'var(--color-orange)', color: 'var(--color-white)', marginBottom: '24px' }}>
          HAVE A PROJECT IN MIND?
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 900,
            color: 'var(--color-white)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: '1000px',
            margin: '0 auto 28px auto',
          }}
        >
          LET’S BUILD IT FROM THE <br />
          <span style={{ color: 'var(--color-orange)' }}>FIRST BRICK.</span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '640px',
            margin: '0 auto 44px auto',
            lineHeight: 1.6,
          }}
        >
          Tell us about your project, requirements and expectations. We’ll help you understand the next steps.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ padding: '20px 48px', fontSize: '1rem' }}
          >
            START A CONVERSATION
            <ArrowUpRight size={22} />
          </Link>
        </div>

        <p
          style={{
            marginTop: '44px',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '1.05rem',
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
