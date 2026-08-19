import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, Compass, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'CONSTRUCTION',
      desc: '[Construction Service Description Placeholder] Turnkey residential & commercial building solutions, from structural foundation, brickwork, and reinforced concrete to interior finishing.',
      link: '/services#construction',
      icon: Building2,
      svgPattern: (
        <svg width="100%" height="220" viewBox="0 0 400 220" style={{ display: 'block', backgroundColor: '#0B3475' }}>
          <rect width="400" height="220" fill="#0B3475" />
          <path d="M 50 180 L 150 60 L 250 180 Z" fill="none" stroke="#FF5A14" strokeWidth="3" />
          <path d="M 150 180 L 250 80 L 350 180 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
          <line x1="20" y1="180" x2="380" y2="180" stroke="#FF5A14" strokeWidth="3" />
          <text x="40" y="40" fill="#FFF" fontSize="14" fontFamily="Outfit" fontWeight="700">FOUNDATION & CONCRETE</text>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'ENGINEERING',
      desc: '[Engineering Service Description Placeholder] Comprehensive structural design, load calculation, civil engineering analysis, estimation, and architectural compliance.',
      link: '/services#engineering',
      icon: Compass,
      svgPattern: (
        <svg width="100%" height="220" viewBox="0 0 400 220" style={{ display: 'block', backgroundColor: '#07224f' }}>
          <rect width="400" height="220" fill="#07224f" />
          <circle cx="200" cy="110" r="70" fill="none" stroke="#FF5A14" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="200" y1="20" x2="200" y2="200" stroke="#FFFFFF" opacity="0.5" strokeWidth="1.5" />
          <line x1="100" y1="110" x2="300" y2="110" stroke="#FFFFFF" opacity="0.5" strokeWidth="1.5" />
          <text x="40" y="40" fill="#FFF" fontSize="14" fontFamily="Outfit" fontWeight="700">STRUCTURAL ANALYSIS</text>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'PROJECT MANAGEMENT',
      desc: '[Project Management Description Placeholder] End-to-end site oversight, quantity surveying, material procurement, timeline scheduling, and site safety management.',
      link: '/services#management',
      icon: ShieldCheck,
      svgPattern: (
        <svg width="100%" height="220" viewBox="0 0 400 220" style={{ display: 'block', backgroundColor: '#041635' }}>
          <rect width="400" height="220" fill="#041635" />
          <rect x="60" y="70" width="80" height="100" fill="none" stroke="#FF5A14" strokeWidth="2" />
          <rect x="160" y="40" width="80" height="130" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="260" y="90" width="80" height="80" fill="none" stroke="#FF5A14" strokeWidth="2" />
          <text x="40" y="40" fill="#FFF" fontSize="14" fontFamily="Outfit" fontWeight="700">EXECUTION GOVERNANCE</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '60px', gap: '20px' }}>
          <div>
            <span className="section-tag">CORE CAPABILITIES</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
              }}
            >
              OUR SERVICES.
            </h2>
          </div>

          <Link to="/services" className="btn-secondary" style={{ padding: '12px 28px' }}>
            VIEW ALL SERVICES
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* 3 Large Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((item) => (
            <div
              key={item.num}
              className="editorial-card"
              style={{
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* SVG Visual Placeholder */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  {item.svgPattern}
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '20px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 900,
                      color: 'var(--color-white)',
                      opacity: 0.9,
                    }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '32px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--color-navy)',
                      marginBottom: '12px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div style={{ padding: '0 32px 32px 32px' }}>
                <Link
                  to={item.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--color-orange)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  VIEW SERVICE DETAILS
                  <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
