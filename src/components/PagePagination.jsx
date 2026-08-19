import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const PAGE_ROUTES = [
  { path: '/', label: 'Cover / Home', short: 'COVER' },
  { path: '/about', label: 'About First Brick', short: 'ABOUT' },
  { path: '/founder', label: 'Founder Profile', short: 'FOUNDER' },
  { path: '/services', label: 'Our Services', short: 'SERVICES' },
  { path: '/process', label: 'Our Process', short: 'PROCESS' },
  { path: '/why-first-brick', label: 'Why First Brick', short: 'WHY FIRST BRICK' },
  { path: '/capabilities', label: 'Project Capabilities', short: 'CAPABILITIES' },
  { path: '/quality', label: 'Quality & Approach', short: 'QUALITY' },
  { path: '/commitment', label: 'Client Commitment', short: 'COMMITMENT' },
  { path: '/credentials', label: 'Company Credentials', short: 'CREDENTIALS' },
  { path: '/terms', label: 'Terms & Conditions', short: 'TERMS' },
  { path: '/contact', label: 'Contact Us', short: 'CONTACT' },
  { path: '/back-cover', label: 'Back Cover', short: 'BACK COVER' },
];

export default function PagePagination() {
  const location = useLocation();
  const currentIndex = PAGE_ROUTES.findIndex(r => r.path === location.pathname);

  if (currentIndex === -1) return null;

  const prevPage = currentIndex > 0 ? PAGE_ROUTES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGE_ROUTES.length - 1 ? PAGE_ROUTES[currentIndex + 1] : null;

  return (
    <div
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-white)',
        padding: '36px 0',
        marginTop: '60px',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        
        {prevPage ? (
          <Link
            to={prevPage.path}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'var(--color-navy)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'var(--transition-smooth)',
            }}
          >
            <ArrowLeft size={18} color="#FF5A14" />
            <div>
              <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--color-orange)', letterSpacing: '0.15em' }}>PREVIOUS PAGE</span>
              {prevPage.short}
            </div>
          </Link>
        ) : (
          <div />
        )}

        <div style={{ textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', letterSpacing: '0.2em' }}>
            PAGE {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} OF 13
          </span>
        </div>

        {nextPage ? (
          <Link
            to={nextPage.path}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'var(--color-navy)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textAlign: 'right',
              transition: 'var(--transition-smooth)',
            }}
          >
            <div>
              <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--color-orange)', letterSpacing: '0.15em' }}>NEXT PAGE</span>
              {nextPage.short}
            </div>
            <ArrowRight size={18} color="#FF5A14" />
          </Link>
        ) : (
          <div />
        )}

      </div>
    </div>
  );
}
