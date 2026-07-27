import React, { useEffect, useRef, useState } from 'react';

/**
 * Wraps children in an animated container that reveals on scroll.
 * Variants: fade-up, fade-left, fade-right, zoom-in, fade-down
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.15,
  className = '',
  once = true,
  duration = 700,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const baseStyle = {
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  const variants = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(32px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-down': {
      initial: { opacity: 0, transform: 'translateY(-32px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-left': {
      initial: { opacity: 0, transform: 'translateX(-32px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'fade-right': {
      initial: { opacity: 0, transform: 'translateX(32px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'zoom-in': {
      initial: { opacity: 0, transform: 'scale(0.92)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
  };

  const v = variants[variant] || variants['fade-up'];
  const animStyle = visible ? { ...baseStyle, ...v.visible } : { ...baseStyle, ...v.initial };

  return (
    <div ref={ref} className={className} style={animStyle}>
      {children}
    </div>
  );
}
