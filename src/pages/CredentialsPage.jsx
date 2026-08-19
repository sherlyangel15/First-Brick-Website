import React from 'react';
import { FileCheck } from 'lucide-react';
import PagePagination from '../components/PagePagination';

export default function CredentialsPage() {
  const credentials = [
    { title: 'Licensed Civil Engineer', org: 'Government Authorized Engineering License', ref: 'REG-TN-CE-[Placeholder]' },
    { title: 'IS Code Structural Compliance', org: 'Bureau of Indian Standards Protocol', ref: 'IS 456 & IS 875 Compliant' },
    { title: 'Registered Construction Studio', org: 'Tamil Nadu Commercial Registration', ref: 'GST / CIN [Placeholder]' },
    { title: 'Safety & Site Governance', org: 'National Safety Council Standards', ref: 'Zero Accident Protocol' },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">VERIFIED CREDENTIALS</span>
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
              COMPANY <br />
              <span className="text-orange">CREDENTIALS.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Credentials Header Placeholder] Authorized civil engineering registration, structural safety compliance, and professional licenses under lead engineer Aravinth Jaganathan.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {credentials.map((cred) => (
                <div key={cred.title} className="editorial-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px' }}>
                    <FileCheck size={24} color="#FF5A14" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                    {cred.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>{cred.org}</p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-orange)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {cred.ref}
                  </span>
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
