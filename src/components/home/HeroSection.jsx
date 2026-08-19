import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '160px',
        paddingBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)',
      }}
      className="architectural-bg-grid"
    >
      {/* Background Watermark Outlined Text */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '-2%',
          fontSize: 'clamp(5rem, 18vw, 18rem)',
          fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(11, 52, 117, 0.08)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 0.8,
          zIndex: 0,
        }}
      >
        FIRST BRICK
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Tag & Founder Line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <span className="section-tag">CIVIL CONSTRUCTION • ENGINEERING • PROJECT MANAGEMENT</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
            SALEM, TAMIL NADU
          </span>
        </div>

        {/* Hero Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Hero Main Copy */}
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 5vw, 5.2rem)',
                fontWeight: 900,
                color: 'var(--color-navy)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}
            >
              BUILT FROM THE <br />
              <span className="outlined-text-orange" style={{ textTransform: 'uppercase' }}>
                FIRST IDEA
              </span> <br />
              TO THE FINAL BRICK.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                maxWidth: '560px',
                marginBottom: '40px',
                fontWeight: 400,
              }}
            >
              First Brick by Aravinth Jaganathan is a civil construction and engineering venture based in Salem, Tamil Nadu, focused on delivering end-to-end construction solutions for residential and selected commercial projects.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
              <Link to="/contact" className="btn-primary">
                START A PROJECT
                <ArrowUpRight size={20} />
              </Link>
              <Link to="/process" className="btn-secondary">
                EXPLORE OUR APPROACH
              </Link>
            </div>
          </div>

          {/* Hero Visual Architectural Graphic */}
          <div style={{ position: 'relative' }}>
            <div
              className="img-placeholder-wrapper"
              style={{
                height: '520px',
                border: '1px solid var(--color-navy)',
                position: 'relative',
                boxShadow: '24px 24px 0px rgba(11, 52, 117, 0.06)',
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                style={{ display: 'block', backgroundColor: '#0B3475' }}
              >
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B3475" />
                    <stop offset="50%" stopColor="#07224f" />
                    <stop offset="100%" stopColor="#041635" />
                  </linearGradient>
                  <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 90, 20, 0.15)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="800" height="600" fill="url(#heroGrad)" />
                <rect width="800" height="600" fill="url(#gridPattern)" />

                {/* Crane & Architectural Structure Art */}
                <g stroke="#FF5A14" strokeWidth="2" fill="none" opacity="0.85">
                  <line x1="560" y1="600" x2="560" y2="120" strokeWidth="4" />
                  <line x1="560" y1="140" x2="760" y2="140" strokeWidth="3" />
                  <line x1="560" y1="140" x2="420" y2="140" strokeWidth="3" />
                  <path d="M 560 120 L 575 140 L 560 140 Z" fill="#FF5A14" />
                  <line x1="720" y1="140" x2="720" y2="260" strokeDasharray="4 4" stroke="#FFF" strokeWidth="1.5" />
                  <rect x="710" y="260" width="20" height="20" fill="#FF5A14" />
                  
                  <rect x="150" y="200" width="320" height="400" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="150" y1="280" x2="470" y2="280" stroke="#FFFFFF" opacity="0.4" />
                  <line x1="150" y1="360" x2="470" y2="360" stroke="#FFFFFF" opacity="0.4" />
                  <line x1="150" y1="440" x2="470" y2="440" stroke="#FFFFFF" opacity="0.4" />
                  <line x1="150" y1="520" x2="470" y2="520" stroke="#FFFFFF" opacity="0.4" />
                </g>

                <text x="180" y="250" fill="#FFFFFF" fontSize="22" fontFamily="Outfit" fontWeight="800" letterSpacing="3">
                  CIVIL ENGINEERING STUDIO
                </text>
                <text x="180" y="280" fill="#FF5A14" fontSize="13" fontFamily="Inter" fontWeight="600" letterSpacing="2">
                  SALEM, TAMIL NADU // ARAVINTH JAGANATHAN
                </text>
              </svg>

              {/* Floating Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  backgroundColor: 'var(--color-navy)',
                  color: 'var(--color-white)',
                  padding: '16px 24px',
                  borderLeft: '4px solid var(--color-orange)',
                }}
              >
                <p style={{ fontSize: '0.75rem', color: 'var(--color-orange)', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>
                  OUR PHILOSOPHY
                </p>
                <p style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: '2px' }}>
                  “Not only first brick, last brick also.”
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div style={{ marginTop: '80px', display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-navy)' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-navy)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
            EXPLORE STUDIO DIRECTORY
          </span>
          <ChevronDown size={18} color="#FF5A14" />
        </div>

      </div>
    </section>
  );
}
