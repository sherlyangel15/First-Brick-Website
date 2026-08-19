import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';

export default function ProjectsSection() {
  const categories = [
    'All Projects',
    'Individual Houses',
    'Villas',
    'Commercial Buildings',
    'Renovation',
    'Engineering Consultancy',
    'Quantity Surveying',
  ];

  const [activeCategory, setActiveCategory] = useState('All Projects');

  const placeholderProjects = [
    {
      id: 1,
      title: 'Monolith Residence',
      category: 'Individual Houses',
      location: 'Salem, Tamil Nadu',
      specs: 'G+2 Residential Studio // 4,200 sq.ft',
      bgColor: '#0B3475',
      patternText: 'RESIDENTIAL HOUSE',
    },
    {
      id: 2,
      title: 'Aura Luxury Villa',
      category: 'Villas',
      location: 'Yercaud Foot Hills, Salem',
      specs: 'Bespoke Luxury Villa // 6,500 sq.ft',
      bgColor: '#07224f',
      patternText: 'LUXURY VILLA',
    },
    {
      id: 3,
      title: 'Apex Commercial Plaza',
      category: 'Commercial Buildings',
      location: 'Fairlands, Salem',
      specs: '5-Storey Commercial Complex // 18,000 sq.ft',
      bgColor: '#041635',
      patternText: 'COMMERCIAL PLAZA',
    },
    {
      id: 4,
      title: 'Heritage Villa Restoration',
      category: 'Renovation',
      location: 'Salem Town',
      specs: 'Structural Retrofit & Modernization',
      bgColor: '#0B3475',
      patternText: 'STRUCTURAL RENOVATION',
    },
    {
      id: 5,
      title: 'Skyline Concrete Frame Analysis',
      category: 'Engineering Consultancy',
      location: 'Coimbatore Highway',
      specs: 'RCC Structural Design & Seismic Audit',
      bgColor: '#07224f',
      patternText: 'ENGINEERING CONSULTANCY',
    },
    {
      id: 6,
      title: 'Industrial Park BOQ Survey',
      category: 'Quantity Surveying',
      location: 'Steel Plant Road, Salem',
      specs: 'Full Quantity Surveying & Cost Estimation',
      bgColor: '#041635',
      patternText: 'QUANTITY SURVEYING',
    },
  ];

  const filteredProjects = activeCategory === 'All Projects'
    ? placeholderProjects
    : placeholderProjects.filter(p => p.category === activeCategory);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '20px' }}>
          <div>
            <span className="section-tag">SELECTED WORKS</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
              }}
            >
              FEATURED PROJECTS.
            </h2>
          </div>

          <Link to="/projects" className="btn-secondary" style={{ padding: '12px 28px' }}>
            VIEW FULL PORTFOLIO
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

        {/* Project Grid Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card"
              style={{
                padding: '0',
                overflow: 'hidden',
              }}
            >
              {/* Architectural Image Placeholder Visual */}
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 280"
                  style={{ display: 'block', backgroundColor: project.bgColor }}
                >
                  <rect width="400" height="280" fill={project.bgColor} />
                  
                  {/* Wireframe Architectural Blueprint Shapes */}
                  <g stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4">
                    <rect x="40" y="40" width="320" height="200" />
                    <line x1="40" y1="140" x2="360" y2="140" />
                    <line x1="200" y1="40" x2="200" y2="240" />
                    <circle cx="200" cy="140" r="60" />
                  </g>
                  
                  <text x="50%" y="45%" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontFamily="Outfit" fontWeight="800" letterSpacing="3">
                    {project.patternText}
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
                  {project.category}
                </div>
              </div>

              {/* Project Card Info */}
              <div style={{ padding: '28px' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  {project.location}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)', marginBottom: '20px' }}>
                  {project.specs}
                </p>

                <Link
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-navy)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderBottom: '1.5px solid var(--color-navy)',
                    paddingBottom: '2px',
                  }}
                >
                  VIEW CASE STUDY
                  <ArrowUpRight size={14} color="#FF5A14" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
