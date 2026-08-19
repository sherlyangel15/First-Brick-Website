import React from 'react';
import PagePagination from '../components/PagePagination';
import { FileCheck, ShieldCheck } from 'lucide-react';

export default function CredentialsPage() {
  const credentialsTable = [
    { key: 'Business Name', val: 'First Brick by Aravinth Jaganathan' },
    { key: 'Constitution', val: 'Sole Proprietorship' },
    { key: 'Proprietor', val: 'Aravinth Jaganathan' },
    { key: 'Industry', val: 'Civil Construction & Engineering' },
    { key: 'Location', val: 'Salem, Tamil Nadu' },
    { key: 'GSTIN', val: 'To be added' },
    { key: 'Udyam No.', val: 'To be added' },
    { key: 'Phone', val: 'To be added' },
    { key: 'Email', val: 'To be added' },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Header */}
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
              Official business information and credentials for First Brick by Aravinth Jaganathan.
            </p>
          </div>
        </section>

        {/* Credentials Table Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            
            <div className="editorial-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--color-navy)' }}>
              
              <div style={{ backgroundColor: 'var(--color-navy)', color: '#FFF', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <FileCheck size={24} color="#FF5A14" />
                  <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#FFF', margin: 0 }}>
                    BUSINESS REGISTRATION & PARTICULARS
                  </h2>
                </div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-orange)', fontWeight: 700 }}>
                  OFFICIAL RECORD
                </span>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                  <tbody>
                    {credentialsTable.map((row, idx) => (
                      <tr
                        key={row.key}
                        style={{
                          backgroundColor: idx % 2 === 0 ? 'var(--color-white)' : 'var(--color-bg)',
                          borderBottom: '1px solid var(--color-border)',
                        }}
                      >
                        <td
                          style={{
                            padding: '18px 32px',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            color: 'var(--color-navy)',
                            width: '35%',
                            borderRight: '1px solid var(--color-border)',
                          }}
                        >
                          {row.key}
                        </td>
                        <td
                          style={{
                            padding: '18px 32px',
                            color: row.val === 'To be added' ? 'var(--color-orange)' : 'var(--color-text-primary)',
                            fontWeight: row.val === 'To be added' ? 600 : 500,
                          }}
                        >
                          {row.val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
