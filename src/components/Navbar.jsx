import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MapPin, Mail } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const desktopPrimaryNav = [
    { name: 'Cover', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Why Us', path: '/why-first-brick' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Contact', path: '/contact' },
  ];

  const all12Pages = [
    { name: 'Cover / Home', path: '/', num: '01' },
    { name: 'About First Brick', path: '/about', num: '02' },
    { name: 'Founder Profile', path: '/founder', num: '03' },
    { name: 'Our Services', path: '/services', num: '04' },
    { name: 'Our Process', path: '/process', num: '05' },
    { name: 'Why First Brick', path: '/why-first-brick', num: '06' },
    { name: 'Project Capabilities', path: '/capabilities', num: '07' },
    { name: 'Quality & Approach', path: '/quality', num: '08' },
    { name: 'Client Commitment', path: '/commitment', num: '09' },
    { name: 'Company Credentials', path: '/credentials', num: '10' },
    { name: 'Terms & Conditions', path: '/terms', num: '11' },
    { name: 'Back Cover / Contact', path: '/contact', num: '12' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
          backgroundColor: scrolled ? 'rgba(247, 247, 245, 0.96)' : 'rgba(247, 247, 245, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '14px 0' : '24px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                color: 'var(--color-navy)',
                lineHeight: 1,
              }}
            >
              FIRST BRICK
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--color-orange)',
                marginTop: '3px',
                textTransform: 'uppercase',
              }}
            >
              by Aravinth Jaganathan
            </span>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav-only">
            {desktopPrimaryNav.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--color-orange)' : 'var(--color-navy)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '4px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--color-orange)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link
              to="/contact"
              className="btn-primary desktop-cta-only"
              style={{ padding: '10px 20px', fontSize: '0.78rem' }}
            >
              START A PROJECT
              <ArrowUpRight size={16} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Open menu drawer"
              style={{
                background: 'none',
                border: '1.5px solid var(--color-navy)',
                borderRadius: '2px',
                padding: '8px 12px',
                cursor: 'pointer',
                color: 'var(--color-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: 'var(--color-navy)',
          color: 'var(--color-white)',
          transform: mobileMenuOpen ? 'translateY(0%)' : 'translateY(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '110px 32px 40px 32px',
          overflowY: 'auto',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-orange)', fontWeight: 700, marginBottom: '24px' }}>
            INDIVIDUAL PAGES DIRECTORY (12 ROUTES)
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {all12Pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Link
                  key={page.path}
                  to={page.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--color-orange)' : 'var(--color-white)',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-orange)' }}>{page.num}</span>
                  {page.name}
                </Link>
              );
            })}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#FF5A14" /> Salem, Tamil Nadu, India
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#FF5A14" /> contact@firstbrick.in
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav-only {
            display: none !important;
          }
          .desktop-cta-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (min-width: 1025px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
