import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
              BUILT FROM THE FIRST IDEA TO THE <span className="text-orange">FINAL BRICK.</span>
            </h2>
            
            <blockquote
              style={{
                marginTop: '32px',
                padding: '24px',
                backgroundColor: 'var(--color-bg)',
                borderLeft: '4px solid var(--color-orange)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--color-navy)',
                lineHeight: 1.4,
              }}
            >
              “Not only first brick, last brick also.”
            </blockquote>
          </div>

          {/* Right Column: Paragraph Content */}
          <div>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.7,
                marginBottom: '20px',
                fontWeight: 400,
              }}
            >
              First Brick by Aravinth Jaganathan is a civil construction and engineering venture based in Salem, Tamil Nadu, focused on delivering end-to-end construction solutions for residential and selected commercial projects.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              We believe that a successful building project begins long before construction starts. It begins with understanding the client’s requirements, studying the site, planning the project properly, preparing a realistic estimate, selecting the right materials and coordinating every stage of execution.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Our role is to bring these elements together under one coordinated approach—from concept, planning and estimation to construction, finishing and final handover. For us, the first brick represents the beginning of a project, while the last brick represents our responsibility to see the project through to completion.
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
              READ FULL ABOUT & WHO WE ARE
              <ArrowUpRight size={18} color="#FF5A14" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
