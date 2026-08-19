import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, Compass, ShieldCheck, Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'CONSTRUCTION',
      desc: 'Turnkey civil construction solutions tailored for residential & commercial builds.',
      items: [
        'Residential buildings',
        'Villas',
        'Individual houses',
        'Commercial construction',
        'Renovation',
      ],
      link: '/services#construction',
      svgPattern: (
        <svg width="100%" height="200" viewBox="0 0 400 200" style={{ display: 'block', backgroundColor: '#0B3475' }}>
          <rect width="400" height="200" fill="#0B3475" />
          <path d="M 50 160 L 150 50 L 250 160 Z" fill="none" stroke="#FF5A14" strokeWidth="3" />
          <path d="M 150 160 L 250 70 L 350 160 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
          <line x1="20" y1="160" x2="380" y2="160" stroke="#FF5A14" strokeWidth="3" />
          <text x="30" y="36" fill="#FFF" fontSize="13" fontFamily="Outfit" fontWeight="700" letterSpacing="2">BUILDING CONSTRUCTION</text>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'ENGINEERING',
      desc: 'Pre-construction engineering, quantity surveying, BOQ creation, and drafting.',
      items: [
        'Quantity surveying',
        'Estimation',
        'BOQ preparation',
        'AutoCAD drafting',
        'Site engineering',
        'Billing',
      ],
      link: '/services#engineering',
      svgPattern: (
        <svg width="100%" height="200" viewBox="0 0 400 200" style={{ display: 'block', backgroundColor: '#07224f' }}>
          <rect width="400" height="200" fill="#07224f" />
          <circle cx="200" cy="100" r="60" fill="none" stroke="#FF5A14" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="200" y1="20" x2="200" y2="180" stroke="#FFFFFF" opacity="0.5" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="300" y2="100" stroke="#FFFFFF" opacity="0.5" strokeWidth="1.5" />
          <text x="30" y="36" fill="#FFF" fontSize="13" fontFamily="Outfit" fontWeight="700" letterSpacing="2">ENGINEERING & BOQ</text>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'PROJECT MANAGEMENT',
      desc: 'End-to-end site governance, material procurement, labour coordination, and safety.',
      items: [
        'Procurement',
        'Labour coordination',
        'Quality control',
        'Cost monitoring',
        'Project scheduling',
      ],
      link: '/services#management',
      svgPattern: (
        <svg width="100%" height="200" viewBox="0 0 400 200" style={{ display: 'block', backgroundColor: '#041635' }}>
          <rect width="400" height="200" fill="#041635" />
          <rect x="60" y="60" width="70" height="90" fill="none" stroke="#FF5A14" strokeWidth="2" />
          <rect x="150" y="35" width="70" height="115" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="240" y="80" width="70" height="70" fill="none" stroke="#FF5A14" strokeWidth="2" />
          <text x="30" y="36" fill="#FFF" fontSize="13" fontFamily="Outfit" fontWeight="700" letterSpacing="2">SITE GOVERNANCE</text>
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
            <span className="section-tag">SERVICES & OFFERINGS</span>
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

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {item.items.map((sub) => (
                      <li key={sub} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                        <Check size={16} color="#FF5A14" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ padding: '0 32px 32px 32px' }}>
                <Link
                  to="/services"
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
                  }}
                >
                  LEARN MORE ABOUT {item.title}
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
