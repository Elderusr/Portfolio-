import { useRef, useCallback } from 'react';

export default function TiltCard({ children, className = '', maxTilt = 15, perspective = 1000, scale = 1.02, glare = true }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const cleanupRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

    // Dynamic glare
    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }

    // Dynamic shadow
    const shadowX = (rotateY / maxTilt) * 20;
    const shadowY = (rotateX / maxTilt) * 20;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.12), 0 0 0 1px rgba(59,130,246,0.1)`;
  }, [maxTilt, perspective, scale, glare]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.boxShadow = '';

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  }, [perspective, glare]);

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare effect */}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 z-10"
          style={{ opacity: 0, borderRadius: 'inherit' }}
        />
      )}
      {/* 3D content wrapper */}
      <div className="relative" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </div>
  );
}
