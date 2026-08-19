import React from 'react';
import PagePagination from '../components/PagePagination';

export default function TermsPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">LEGAL & CONTRACTUAL</span>
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
              TERMS & <br />
              <span className="text-orange">CONDITIONS.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              [Terms Page Header Placeholder] Standard construction agreements, stage payment schedules, structural warranty guidelines, and client terms for First Brick.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              
              <div>
                <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  1. Project Estimation & BOQ Scope
                </h2>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  [Terms Placeholder Paragraph] All construction timelines, material specifications, and cost estimations provided by First Brick are governed by the mutually agreed Bill of Quantities (BOQ) contract prior to excavation.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  2. Milestone Payment Schedule
                </h2>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  [Terms Placeholder Paragraph] Payments are tied strictly to completed site milestones (Foundation, RCC Slab, Brickwork, Plastering, Finishing, Handover) as detailed in the master agreement.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  3. Structural Warranty & Handover
                </h2>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  [Terms Placeholder Paragraph] First Brick issues a formal structural warranty upon final handover. Handover occurs upon completion of the joint site audit with lead engineer Aravinth Jaganathan.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
