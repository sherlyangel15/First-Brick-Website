import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const categories = [
    'All Categories',
    'Individual Houses',
    'Villas',
    'Commercial Buildings',
    'Renovation',
    'Engineering Consultancy',
    'Quantity Surveying',
  ];

  const [activeCategory, setActiveCategory] = useState('All Categories');

  const capabilitiesList = [
    {
      id: 1,
      title: 'Residential House Construction',
      category: 'Individual Houses',
      location: 'Salem, Tamil Nadu',
      specs: 'End-to-End Civil Build // Customized Floor Plans & BOQ',
      bgColor: '#0B3475',
      patternText: 'INDIVIDUAL HOUSES',
    },
    {
      id: 2,
      title: 'Bespoke Luxury Villa Project',
      category: 'Villas',
      location: 'Yercaud / Salem Region',
      specs: 'Architectural Framing, RCC Structural Engineering & Landscaping',
      bgColor: '#07224f',
      patternText: 'VILLAS',
    },
    {
      id: 3,
      title: 'Commercial Building Build',
      category: 'Commercial Buildings',
      location: 'Salem Commercial Hub',
      specs: 'Multi-Storey Structural Design, High Load Capacity & Approval Specs',
      bgColor: '#041635',
      patternText: 'COMMERCIAL BUILDINGS',
    },
    {
      id: 4,
      title: 'Structural Renovation & Retrofit',
      category: 'Renovation',
      location: 'Salem, TN',
      specs: 'Structural Audit, Load Elevation & Modern Architectural Finishing',
      bgColor: '#0B3475',
      patternText: 'RENOVATION',
    },
    {
      id: 5,
      title: 'Civil Engineering Consultancy',
      category: 'Engineering Consultancy',
      location: 'Tamil Nadu Region',
      specs: 'Structural Analysis, Soil Compliance & Technical Supervision',
      bgColor: '#07224f',
      patternText: 'ENGINEERING CONSULTANCY',
    },
    {
      id: 6,
      title: 'Quantity Surveying & Estimation',
      category: 'Quantity Surveying',
      location: 'Salem, TN',
      specs: 'Detailed BOQ Preparation, Material Cost Audit & Billing Verification',
      bgColor: '#041635',
      patternText: 'QUANTITY SURVEYING',
    },
  ];

  const filtered = activeCategory === 'All Categories'
    ? capabilitiesList
    : capabilitiesList.filter(item => item.category === activeCategory);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '20px' }}>
          <div>
            <span className="section-tag">PROJECT CAPABILITIES</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
              }}
            >
              BUILDING CAPABILITIES.
            </h2>
          </div>

          <Link to="/capabilities" className="btn-secondary" style={{ padding: '12px 28px' }}>
            VIEW FULL CAPABILITIES
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '20px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  backgroundColor: isActive ? 'var(--color-orange)' : 'var(--color-white)',
                  color: isActive ? 'var(--color-white)' : 'var(--color-navy)',
                  border: isActive ? '1px solid var(--color-orange)' : '1px solid var(--color-border)',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="editorial-card"
              style={{
                padding: '0',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 260"
                  style={{ display: 'block', backgroundColor: item.bgColor }}
                >
                  <rect width="400" height="260" fill={item.bgColor} />
                  <g stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.35">
                    <rect x="40" y="35" width="320" height="190" />
                    <line x1="40" y1="130" x2="360" y2="130" />
                    <line x1="200" y1="35" x2="200" y2="225" />
                  </g>
                  
                  <text x="50%" y="46%" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontFamily="Outfit" fontWeight="800" letterSpacing="3">
                    {item.patternText}
                  </text>
                  <text x="50%" y="58%" textAnchor="middle" fill="#FF5A14" fontSize="12" fontFamily="Inter" fontWeight="600" letterSpacing="2">
                    [PROJECT IMAGE PLACEHOLDER]
                  </text>
                </svg>

                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'var(--color-orange)',
                    color: 'var(--color-white)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '2px',
                  }}
                >
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '28px' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  {item.location}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
