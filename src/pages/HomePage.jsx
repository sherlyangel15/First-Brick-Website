import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PagePagination from '../components/PagePagination';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const directoryPages = [
    { title: 'About First Brick', path: '/about', desc: 'Studio origin, philosophy & engineering vision.' },
    { title: 'Founder Profile', path: '/founder', desc: 'Aravinth Jaganathan profile & leadership.' },
    { title: 'Our Services', path: '/services', desc: 'Construction, engineering & management.' },
    { title: 'Our Process', path: '/process', desc: '8-stage civil execution roadmap.' },
    { title: 'Why First Brick', path: '/why-first-brick', desc: '6 key studio differentiators & site focus.' },
    { title: 'Project Capabilities', path: '/capabilities', desc: 'Villas, commercial builds & quantity surveying.' },
    { title: 'Quality & Approach', path: '/quality', desc: 'IS code compliance & concrete cube testing.' },
    { title: 'Client Commitment', path: '/commitment', desc: 'Transparency & accountability charter.' },
    { title: 'Company Credentials', path: '/credentials', desc: 'Licenses & structural certifications.' },
    { title: 'Terms & Conditions', path: '/terms', desc: 'Contractual terms & warranty guidelines.' },
    { title: 'Contact Studio', path: '/contact', desc: 'Salem TN headquarters & project inquiry.' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Cover Hero Section */}
        <HeroSection />

        {/* Studio Index Directory Grid */}
        <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <span className="section-tag">STUDIO DIRECTORY</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                marginBottom: '40px',
              }}
            >
              EXPLORE INDIVIDUAL <span className="text-orange">PAGES.</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {directoryPages.map((page, idx) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="editorial-card"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-orange)', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                      0{idx + 2} //
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', margin: '8px 0 4px 0' }}>
                      {page.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>{page.desc}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '16px' }}>
                    EXPLORE PAGE <ArrowUpRight size={14} color="#FF5A14" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
