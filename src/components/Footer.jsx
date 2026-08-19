import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        paddingTop: '100px',
        paddingBottom: '40px',
        borderTop: '4px solid var(--color-orange)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="architectural-bg-grid-dark"
    >
      {/* Background Watermark Outlined Text */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          fontSize: 'clamp(4rem, 15vw, 14rem)',
          fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.05)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}
      >
        FIRST BRICK
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '60px',
            marginBottom: '80px',
          }}
        >
          {/* Column 1: Brand & Quote */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--color-white)',
                letterSpacing: '0.06em',
                marginBottom: '4px',
              }}
            >
              FIRST BRICK
            </h2>
            <p
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: 'var(--color-orange)',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              BY ARAVINTH JAGANATHAN
            </p>

            <blockquote
              style={{
                fontSize: '1.15rem',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                color: '#FFFFFF',
                borderLeft: '3px solid var(--color-orange)',
                paddingLeft: '16px',
                marginBottom: '16px',
                lineHeight: 1.4,
              }}
            >
              “Not only first brick, last brick also.”
            </blockquote>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 400 }}>
              From concept to completion. Civil Construction • Engineering • Quantity Surveying • Project Management in Salem, Tamil Nadu.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: 'var(--color-orange)',
                textTransform: 'uppercase',
                marginBottom: '24px',
                fontWeight: 700,
              }}
            >
              MAIN PAGES
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Cover / Home', path: '/' },
                { name: 'About First Brick', path: '/about' },
                { name: 'Founder Profile', path: '/founder' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Process', path: '/process' },
                { name: 'Why First Brick', path: '/why-first-brick' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-heading)',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ color: 'var(--color-orange)' }}>—</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Approach & Legal Links */}
          <div>
            <h3
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: 'var(--color-orange)',
                textTransform: 'uppercase',
                marginBottom: '24px',
                fontWeight: 700,
              }}
            >
              CAPABILITIES & LEGAL
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Project Capabilities', path: '/capabilities' },
                { name: 'Quality & Approach', path: '/quality' },
                { name: 'Client Commitment', path: '/commitment' },
                { name: 'Company Credentials', path: '/credentials' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Back Cover / Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-heading)',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ color: 'var(--color-orange)' }}>—</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h3
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: 'var(--color-orange)',
                textTransform: 'uppercase',
                marginBottom: '24px',
                fontWeight: 700,
              }}
            >
              STUDIO LOCATION
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="#FF5A14" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFF' }}>FIRST BRICK Studio</strong>
                  <br />
                  Salem, Tamil Nadu, India
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#FF5A14" style={{ flexShrink: 0 }} />
                <span>Phone: <strong style={{ color: 'var(--color-orange)' }}>To be added</strong></span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#FF5A14" style={{ flexShrink: 0 }} />
                <span>Email: <strong style={{ color: 'var(--color-orange)' }}>To be added</strong></span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Globe size={18} color="#FF5A14" style={{ flexShrink: 0 }} />
                <span>Website: <strong style={{ color: 'var(--color-orange)' }}>To be added</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>FIRST BRICK</strong>. All Rights Reserved. Founded by Aravinth Jaganathan.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
            <Link to="/credentials" style={{ color: 'inherit', textDecoration: 'none' }}>Credentials</Link>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
