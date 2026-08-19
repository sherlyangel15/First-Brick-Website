import React from 'react';
import { ArrowUpRight, Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PagePagination from '../components/PagePagination';

export default function FounderPage() {
  const credentialsList = [
    {
      icon: GraduationCap,
      title: 'Diploma in Civil Engineering',
      desc: 'Formal technical education in civil structural design, material science, surveying, and building standards.',
    },
    {
      icon: Briefcase,
      title: '7+ Years Practical Experience',
      desc: 'Hands-on site experience across residential construction, estimation, quantity surveying, and billing.',
    },
    {
      icon: Award,
      title: 'Systemized Project Governance',
      desc: 'Specialized in bridging theoretical civil engineering with practical site execution and cost control.',
    },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Header */}
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">FOUNDER PROFILE</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 900,
                color: 'var(--color-navy)',
                lineHeight: 1.05,
                marginBottom: '16px',
              }}
            >
              ARAVINTH <br />
              <span className="text-orange">JAGANATHAN.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', fontWeight: 700, letterSpacing: '0.04em' }}>
              FOUNDER & CIVIL ENGINEERING PROFESSIONAL
            </p>
          </div>
        </section>

        {/* Profile Content */}
        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
              
              {/* Quote Card */}
              <div className="editorial-card" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', padding: '48px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-orange)', letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase' }}>
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
                    color: '#FFF',
                  }}
                >
                  “Not only first brick, last brick also.”
                </blockquote>
                
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6 }}>
                  For us, the first brick represents the beginning of a project, while the last brick represents our responsibility to see the project through to completion.
                </p>
              </div>

              {/* Biography & Practical Experience */}
              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '24px' }}>
                  Practical Experience & Engineering Discipline
                </h2>

                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', lineHeight: 1.75, marginBottom: '20px' }}>
                  Led by Aravinth Jaganathan, a Civil Engineering professional with practical experience in site execution, estimation, quantity surveying, billing and project coordination, First Brick combines technical knowledge with hands-on construction experience.
                </p>

                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Aravinth established First Brick to offer clients a transparent and structured construction journey. By combining rigorous pre-construction planning with daily site coordination, he ensures every residential and commercial project is delivered with structural integrity and budget clarity.
                </p>

                {/* Professional Highlights Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                  {credentialsList.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 90, 20, 0.12)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', flexShrink: 0 }}>
                          <IconComp size={20} color="#FF5A14" />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                            {item.title}
                          </h3>
                          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link to="/contact" className="btn-primary">
                  START A CONVERSATION
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
