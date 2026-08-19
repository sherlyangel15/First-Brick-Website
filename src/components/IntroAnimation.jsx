import React, { useState, useEffect } from 'react';

/**
 * 5-Stage Cinematic Intro Loading Animation for FIRST BRICK
 * 
 * Plays on EVERY initial load / refresh. Zero localStorage or sessionStorage restrictions.
 * 
 * Stage 1: Orange screen (#FF5A14) with outlined white text FIRST BRICK
 * Stage 2: Left-to-right white fill animation across F -> I -> R -> S -> T -> B -> R -> I -> C -> K
 * Stage 3: Deep Navy (#0B3475) panel sweeps in from left, filling screen while text stays white
 * Stage 4: Architectural white slab sweeps across screen turning background to #FFFFFF
 * Stage 5: Architectural reveal & zoom with central brand FIRST BRICK in Deep Navy, overlay smoothly exits
 */
export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setStage(5);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }

    const timer1 = setTimeout(() => setStage(2), 900);
    const timer2 = setTimeout(() => setStage(3), 2400);
    const timer3 = setTimeout(() => setStage(4), 3600);
    const timer4 = setTimeout(() => setStage(5), 4500);
    const timer5 = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 5200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: stage < 3 ? '#FF5A14' : stage === 3 ? '#0B3475' : '#FFFFFF',
        transition: 'background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: stage === 5 ? 0 : 1,
        pointerEvents: stage === 5 ? 'none' : 'all',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#0B3475',
          transform: stage >= 3 ? 'translateX(0%)' : 'translateX(-100%)',
          transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#FFFFFF',
          transform: stage >= 4 ? 'translateX(0%)' : 'translateX(-100%)',
          transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '0 20px',
          transform: stage === 5 ? 'scale(1.04)' : stage >= 4 ? 'scale(1)' : 'scale(0.98)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h1
            style={{
              fontFamily: "'Outfit', 'Syne', sans-serif",
              fontSize: 'clamp(2.6rem, 8vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'transparent',
              WebkitTextStroke: stage >= 4 ? '2px #0B3475' : '2px #FFFFFF',
              margin: 0,
              lineHeight: 1,
              transition: 'WebkitTextStroke 0.5s ease',
            }}
          >
            FIRST BRICK
          </h1>

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              clipPath: stage >= 2 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              transition: 'clip-path 1.4s cubic-bezier(0.65, 0, 0.35, 1)',
              pointerEvents: 'none',
            }}
          >
            <h1
              style={{
                fontFamily: "'Outfit', 'Syne', sans-serif",
                fontSize: 'clamp(2.6rem, 8vw, 6.5rem)',
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: stage >= 4 ? '#0B3475' : '#FFFFFF',
                margin: 0,
                lineHeight: 1,
                transition: 'color 0.5s ease',
              }}
            >
              FIRST BRICK
            </h1>
          </div>
        </div>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(0.8rem, 2vw, 1.15rem)',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: stage >= 4 ? '#FF5A14' : 'rgba(255, 255, 255, 0.9)',
            marginTop: '20px',
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.7s ease 0.3s',
          }}
        >
          BY ARAVINTH JAGANATHAN
        </p>
      </div>
    </div>
  );
}
