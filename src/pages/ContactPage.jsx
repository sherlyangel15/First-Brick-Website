import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from 'lucide-react';
import PagePagination from '../components/PagePagination';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Header */}
        <section className="section architectural-bg-grid" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '60px' }}>
          <div className="container">
            <span className="section-tag">BACK COVER // CONTACT STUDIO</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 900,
                color: 'var(--color-navy)',
                lineHeight: 1.05,
                marginBottom: '16px',
              }}
            >
              HAVE A PROJECT <br />
              <span className="text-orange">IN MIND?</span>
            </h1>
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '12px' }}>
              LET’S BUILD IT FROM THE FIRST BRICK.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '640px', lineHeight: 1.6 }}>
              Tell us about your project, requirements and expectations. We’ll help you understand the next steps.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
              
              {/* Studio Details */}
              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '24px' }}>
                  Studio Information
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 90, 20, 0.12)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', flexShrink: 0 }}>
                      <MapPin size={20} color="#FF5A14" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>Location</h3>
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>
                        FIRST BRICK Studio<br />
                        Salem, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 90, 20, 0.12)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', flexShrink: 0 }}>
                      <Phone size={20} color="#FF5A14" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>Phone</h3>
                      <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginTop: '4px' }}>
                        To be added
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 90, 20, 0.12)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', flexShrink: 0 }}>
                      <Mail size={20} color="#FF5A14" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>Email</h3>
                      <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginTop: '4px' }}>
                        To be added
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 90, 20, 0.12)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px', flexShrink: 0 }}>
                      <Globe size={20} color="#FF5A14" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>Website</h3>
                      <p style={{ color: 'var(--color-orange)', fontWeight: 600, marginTop: '4px' }}>
                        To be added
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architectural Map Box */}
                <div style={{ marginTop: '40px', height: '200px', border: '1px solid var(--color-navy)', backgroundColor: '#0B3475', position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ display: 'block' }}>
                    <rect width="400" height="200" fill="#0B3475" />
                    <g stroke="#FF5A14" strokeWidth="1" strokeDasharray="4 4" fill="none">
                      <line x1="0" y1="100" x2="400" y2="100" />
                      <line x1="200" y1="0" x2="200" y2="200" />
                      <circle cx="200" cy="100" r="35" strokeWidth="2" />
                    </g>
                    <text x="200" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="Outfit" fontWeight="800">
                      SALEM, TAMIL NADU
                    </text>
                  </svg>
                </div>

              </div>

              {/* Contact Form */}
              <div className="editorial-card" style={{ backgroundColor: 'var(--color-bg)' }}>
                <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '8px' }}>
                  Start a Conversation
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  Tell us about your project requirements to receive a call back from founder & lead engineer Aravinth Jaganathan.
                </p>

                {submitted ? (
                  <div style={{ padding: '32px', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-orange)', textAlign: 'center' }}>
                    <CheckCircle2 size={48} color="#FF5A14" style={{ margin: '0 auto 16px auto' }} />
                    <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>
                      Inquiry Received
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                      Thank you. Aravinth Jaganathan will reach out to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        style={{ width: '100%', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 Mobile"
                          style={{ width: '100%', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          style={{ width: '100%', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Project Type
                      </label>
                      <select
                        style={{ width: '100%', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '0.95rem', backgroundColor: '#FFF' }}
                      >
                        <option>Residential Construction / Individual House</option>
                        <option>Luxury Villa Project</option>
                        <option>Commercial Construction</option>
                        <option>Building Renovation</option>
                        <option>Engineering Consultancy & BOQ</option>
                        <option>Quantity Surveying & Estimation</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Project Details / Site Location
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your requirements, site dimensions, timeline..."
                        style={{ width: '100%', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '2px', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                      START A CONVERSATION
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>

      <PagePagination />
    </div>
  );
}
