import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, Play } from 'lucide-react';

export default function Footer({ onReplayIntro }) {
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

            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 400 }}>
              From concept to completion. Delivering high-end civil construction, architectural engineering, and transparent project management.
            </p>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                style={{
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'var(--color-white)',
                  padding: '8px 16px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <Play size={14} fill="#FF5A14" color="#FF5A14" />
                Replay Brand Intro Animation
              </button>
            )}
          </div>

          {/* Column 2: Essential Pages */}
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
              WEBSITE PAGES
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Founder Profile', path: '/founder' },
                { name: 'Our Services', path: '/services' },
                { name: 'Execution Process', path: '/process' },
                { name: 'Projects Portfolio', path: '/projects' },
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

          {/* Column 3: Credentials & Legal */}
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
              APPROACH & CREDENTIALS
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Quality & Approach', path: '/quality' },
                { name: 'Client Commitment', path: '/commitment' },
                { name: 'Company Credentials', path: '/credentials' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Contact Studio', path: '/contact' },
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

          {/* Column 4: Contact & Office Location */}
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
              HEADQUARTERS
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="#FF5A14" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFF' }}>First Brick Studio</strong>
                  <br />
                  Salem, Tamil Nadu, India
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#FF5A14" style={{ flexShrink: 0 }} />
                <span>+91 (0) 98765 43210 [Placeholder]</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#FF5A14" style={{ flexShrink: 0 }} />
                <span>aravinth@firstbrick.in [Placeholder]</span>
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
            © {new Date().getFullYear()} <strong>FIRST BRICK</strong>. All Rights Reserved. Designed for Aravinth Jaganathan.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
