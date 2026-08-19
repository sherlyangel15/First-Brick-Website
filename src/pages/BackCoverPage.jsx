import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import PagePagination from '../components/PagePagination';

export default function BackCoverPage() {
  return (
    <div style={{ paddingTop:'110px' }}>

      {/* FULL BRAND STATEMENT */}
      <section style={{
        backgroundColor:'var(--color-navy)',
        minHeight:'90vh',
        display:'flex', flexDirection:'column', justifyContent:'center',
        position:'relative', overflow:'hidden',
      }}>
        {/* Grid background */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize:'80px 80px',
        }} />
        {/* Outline watermark */}
        <div style={{
          position:'absolute', bottom:'-40px', right:'-20px',
          fontSize:'clamp(5rem,20vw,18rem)', fontWeight:900,
          color:'transparent', WebkitTextStroke:'1.5px rgba(255,255,255,0.05)',
          fontFamily:'var(--font-heading)', userSelect:'none', lineHeight:0.9,
        }}>FIRST<br />BRICK</div>

        <div className="container" style={{ position:'relative', zIndex:2, paddingTop:'40px', paddingBottom:'80px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'32px' }}>
            <span style={{ width:'40px', height:'2px', backgroundColor:'var(--color-orange)' }} />
            <span style={{ fontSize:'0.72rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--color-orange)', fontWeight:700 }}>PAGE 13 / 13 — BACK COVER</span>
          </div>

          <h1 style={{
            fontFamily:'var(--font-heading)', fontWeight:900,
            fontSize:'clamp(4rem,12vw,12rem)', color:'var(--color-white)',
            lineHeight:0.95, letterSpacing:'-0.01em', marginBottom:'16px',
          }}>
            FIRST<br />BRICK
          </h1>

          <p style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(0.8rem,1.5vw,1.1rem)', letterSpacing:'0.18em', color:'var(--color-orange)', fontWeight:700, textTransform:'uppercase', marginBottom:'36px' }}>
            BY ARAVINTH JAGANATHAN
          </p>

          <blockquote style={{
            fontFamily:'var(--font-heading)', fontSize:'clamp(1.2rem,2.5vw,2rem)',
            fontStyle:'italic', color:'var(--color-white)', fontWeight:700,
            borderLeft:'4px solid var(--color-orange)', paddingLeft:'20px',
            maxWidth:'640px', lineHeight:1.4, marginBottom:'32px',
          }}>
            "Not only first brick, last brick also."
          </blockquote>

          <p style={{
            fontFamily:'var(--font-heading)', fontSize:'clamp(1rem,2vw,1.4rem)',
            fontWeight:700, color:'rgba(255,255,255,0.75)',
            letterSpacing:'0.05em', marginBottom:'52px',
          }}>
            From concept to completion.
          </p>

          {/* Contact details */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'24px', marginBottom:'52px' }}>
            {[
              { icon:<MapPin size={18} color="#FF5A14" />, label:'Salem, Tamil Nadu' },
              { icon:<Phone size={18} color="#FF5A14" />, label:'To be added' },
              { icon:<Mail size={18} color="#FF5A14" />, label:'To be added' },
              { icon:<Globe size={18} color="#FF5A14" />, label:'To be added' },
            ].map((item, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'10px', fontSize:'0.92rem', color:'rgba(255,255,255,0.75)', fontFamily:'var(--font-heading)', fontWeight:600 }}>
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'16px', alignItems:'center' }}>
            <Link to="/contact" className="btn-primary">
              START A PROJECT <ArrowRight size={16} />
            </Link>
            <Link to="/" style={{ fontFamily:'var(--font-heading)', fontSize:'0.85rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', textDecoration:'none' }}>
              BACK TO HOME →
            </Link>
          </div>
        </div>
      </section>

      {/* Services summary bar */}
      <section style={{ backgroundColor:'var(--color-orange)', padding:'24px 0' }}>
        <div className="container">
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'32px', alignItems:'center' }}>
            {['Civil Construction','Engineering','Quantity Surveying','Project Management'].map(s => (
              <span key={s} style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.88rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--color-white)' }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <PagePagination />
    </div>
  );
}
