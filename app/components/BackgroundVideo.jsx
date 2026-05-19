'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  // Autoplay guarantee on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented or video error: ', err);
      });
    }
  }, []);

  // GSAP animations for Video Slow Zoom
  useGSAP(() => {
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scale: 1.15,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden w-full h-full pointer-events-none" style={{ background: 'var(--bg-primary)' }}>
      {/* Base Layered Cinematic Gradients */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          zIndex: 1,
        }} 
      />

      {/* Cinematic Looping Background Video */}
      <video
        ref={videoRef}
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{
          opacity: 0.9,
          zIndex: 2,
          mixBlendMode: 'screen',
        }}
      />

      {/* Overlay Ambient Glows (Azure/Cyan AI glow + Indigo + Saffron Warmth) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle 800px at 80% 20%, rgba(34, 211, 238, 0.15), transparent 80%),
            radial-gradient(circle 600px at 20% 70%, rgba(99, 102, 241, 0.18), transparent 80%),
            radial-gradient(circle 500px at 50% 40%, rgba(249, 115, 22, 0.08), transparent 80%)
          `,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Digital Noise/Grain Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.02,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Depth Vignette */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 30%, rgba(11, 17, 32, 0.65) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

