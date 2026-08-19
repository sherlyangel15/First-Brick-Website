import React from 'react';
import PagePagination from '../components/PagePagination';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
  const termsSections = [
    {
      num: '01',
      title: 'Project Scope & Definition',
      text: 'All civil construction, structural engineering, and finishing works provided by First Brick are governed strictly by the written agreement and mutually approved Bill of Quantities (BOQ). Any work outside the agreed BOQ scope is treated as an additional variation.',
    },
    {
      num: '02',
      title: 'Milestone Payment Schedule',
      text: 'Payments are linked directly to completed site milestones (such as Foundation, RCC Slab, Brickwork, Plastering, Finishing, and Handover). Invoices are issued upon verification of stage measurements, and payments must be cleared according to contractual terms to ensure uninterrupted site progress.',
    },
    {
      num: '03',
      title: 'Material Specifications & Brand Quality',
      text: 'Materials used (cement, steel, bricks/blocks, M-sand, aggregates, tiles, plumbing, electrical, paints) adhere strictly to agreed specifications. If a specified brand or grade becomes unavailable due to market supply disruptions, an equivalent grade approved by the engineer will be substituted with client consultation.',
    },
    {
      num: '04',
      title: 'Additional Works & Cost Variations',
      text: 'Any additional work requested by the client that is not included in the original estimate will be quantified, priced, and approved via a written work order variation prior to execution on-site.',
    },
    {
      num: '05',
      title: 'Client Changes & Architectural Revisions',
      text: 'Changes made to drawings or structural plans after execution has commenced may impact project cost and schedule. Revisions will be evaluated for structural feasibility and schedule adjustment before work proceeds.',
    },
    {
      num: '06',
      title: 'GST & Statutory Taxes',
      text: 'All estimates, quotations, and bills are subject to applicable Government taxes, including GST, as per statutory regulations in Tamil Nadu and India.',
    },
    {
      num: '07',
      title: 'Project Schedule & Unforeseen Delays',
      text: 'First Brick strives for strict schedule adherence. However, delays resulting from force majeure, severe weather conditions, local authority approval delays, or client payment delays may extend the completion date accordingly.',
    },
    {
      num: '08',
      title: 'Cancellation & Termination Protocol',
      text: 'In the event of contract termination by either party, completed site work and procured materials on-site will be measured and billed up to the date of cancellation.',
    },
    {
      num: '09',
      title: 'Completion & Handover Inspection',
      text: 'Before handover, a joint site walkthrough is conducted against the agreed scope. The project is formally handed over upon completion of final corrections, cleaning, and settlement of final accounts.',
    },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Header */}
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
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '680px', lineHeight: 1.6 }}>
              Professional guidelines governing project scope, milestone payments, material specifications, additional works, and building handover for First Brick by Aravinth Jaganathan.
            </p>
          </div>
        </section>

        {/* Terms Accordion / Cards List */}
        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {termsSections.map((item) => (
                <div key={item.num} className="editorial-card" style={{ borderLeft: '4px solid var(--color-navy)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-orange)' }}>
                      SECTION {item.num}
                    </span>
                    <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', margin: 0 }}>
                      {item.title}
                    </h2>
                  </div>
                  <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    {item.text}
                  </p>
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
