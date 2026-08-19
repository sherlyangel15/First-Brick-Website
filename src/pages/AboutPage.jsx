import React from 'react';
import AboutSection from '../components/home/AboutSection';
import PagePagination from '../components/PagePagination';
import { UserCheck, Layers, FileText, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const whoWeAreCards = [
    { title: 'Site Execution', desc: 'Direct, hands-on site supervision ensuring structural blueprints are followed to the millimeter.' },
    { title: 'Estimation & BOQ', desc: 'Pre-construction Bill of Quantities preventing budget overruns and unexpected cost inflations.' },
    { title: 'Quantity Surveying', desc: 'Rigorous calculation of cement, steel, masonry, and finishing materials prior to procurement.' },
    { title: 'Billing & Coordination', desc: 'Transparent stage-wise billing, legal documentation, and seamless site workforce coordination.' },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Page Header */}
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
              BUILT FROM THE FIRST IDEA <br />
              <span className="text-orange">TO THE FINAL BRICK.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '680px', lineHeight: 1.6 }}>
              First Brick by Aravinth Jaganathan is a civil construction and engineering venture based in Salem, Tamil Nadu, focused on delivering end-to-end construction solutions for residential and selected commercial projects.
            </p>
          </div>
        </section>

        <AboutSection />

        {/* Section: WHO WE ARE */}
        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
              <span className="section-tag">WHO WE ARE</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  marginTop: '12px',
                  marginBottom: '24px',
                }}
              >
                A PROFESSIONAL, TRANSPARENT & <span className="text-orange">ENGINEERING-ORIENTED</span> APPROACH.
              </h2>
              
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', lineHeight: 1.75, marginBottom: '20px' }}>
                First Brick was established with the objective of bringing a more professional, transparent and engineering-oriented approach to building construction.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
                Led by Aravinth Jaganathan, a Civil Engineering professional with practical experience in site execution, estimation, quantity surveying, billing and project coordination, First Brick combines technical knowledge with hands-on construction experience.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                Rather than treating construction as simply a collection of individual works, we approach every project as a complete system where planning, cost, materials, manpower, quality and time need to work together. Our objective is to make the construction journey more organised and understandable for the client.
              </p>
            </div>

            {/* Who We Are Capabilities Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {whoWeAreCards.map((item) => (
                <div key={item.title} className="editorial-card">
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
