import React from 'react';
import { Shield, Check, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QualitySection() {
  const benchmarks = [
    'IS Code Compliant Concrete & Steel Testing',
    'Multi-Tier Structural Integrity Verification',
    'Waterproofing & Thermal Moisture Barriers',
    'Zero-Tolerance Dimensional Tolerances',
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Side: Large Construction Image Visual */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                height: '480px',
                border: '1px solid var(--color-navy)',
                position: 'relative',
                boxShadow: '-20px 20px 0px rgba(255, 90, 20, 0.1)',
                overflow: 'hidden',
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 480"
                style={{ display: 'block', backgroundColor: '#0B3475' }}
              >
                <rect width="600" height="480" fill="#0B3475" />
                <path d="M 0 480 L 300 150 L 600 480 Z" fill="none" stroke="#FF5A14" strokeWidth="4" />
                <path d="M 100 480 L 300 240 L 500 480 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
                <line x1="300" y1="150" x2="300" y2="480" stroke="#FF5A14" strokeWidth="2" strokeDasharray="6 6" />
                <text x="50%" y="45%" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontFamily="Outfit" fontWeight="900" letterSpacing="3">
                  CONSTRUCTION QUALITY CONTROL
                </text>
                <text x="50%" y="54%" textAnchor="middle" fill="#FF5A14" fontSize="14" fontFamily="Inter" fontWeight="600" letterSpacing="2">
                  [LARGE CONSTRUCTION IMAGE PLACEHOLDER]
                </text>
              </svg>

              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  backgroundColor: 'var(--color-orange)',
                  color: 'var(--color-white)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderRadius: '2px',
                }}
              >
                <Award size={28} />
                <div>
                  <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>CERTIFIED</p>
                  <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>IS CODE STANDARDS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Heading & Quality Benchmarks */}
          <div>
            <span className="section-tag">UNCOMPROMISING STANDARDS</span>
            
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '16px 0 24px 0',
              }}
            >
              QUALITY IS NOT AN ACCIDENT. <br />
              IT IS OUR <span className="text-orange">ENGINEERING BASIS.</span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              [Quality Heading & Description Placeholder] Every raw material that arrives at a First Brick construction site undergoes strict quality verification. From steel tensile strength to concrete compressive testing, we implement zero-compromise site governance.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {benchmarks.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'rgba(255, 90, 20, 0.15)',
                      border: '1px solid var(--color-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={16} color="#FF5A14" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/quality" className="btn-primary">
              EXPLORE OUR QUALITY APPROACH
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
