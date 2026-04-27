import React, { useEffect, useRef, useCallback } from 'react';

interface AnimatedSVGProps {
  src: string;
  alt: string;
  className?: string;
  replayInterval?: number; // In milliseconds, default 8000 (8 seconds)
  delay?: number; // Initial delay before starting the interval
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  src,
  alt,
  className = '',
  replayInterval = 8000,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const triggerAnimation = useCallback(() => {
    if (!containerRef.current) return;

    const svg = containerRef.current.querySelector('svg');
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach((path) => {
      // Remove and re-add class to restart animation
      path.classList.remove('animated-path');
      // Force reflow
      void path.getBoundingClientRect();
      path.classList.add('animated-path');
    });
  }, []);

  const setupAnimations = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      // Fetch the SVG content
      const response = await fetch(src);
      const svgText = await response.text();

      // Insert SVG into container
      containerRef.current.innerHTML = svgText;

      const svg = containerRef.current.querySelector('svg');
      if (!svg) return;

      // Fix viewBox if missing or incorrect
      try {
        const bbox = svg.getBBox();
        if (bbox) {
          const padding = 20;
          const viewBox = `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`;
          svg.setAttribute('viewBox', viewBox);
          svg.removeAttribute('width');
          svg.removeAttribute('height');
        }
      } catch (e) {
        console.error('Could not calculate BBox for SVG', e);
      }

      // Setup path animations
      const paths = svg.querySelectorAll('path');
      paths.forEach((path, index) => {
        const length = path.getTotalLength();

        // Set CSS variables for the animation
        (path as HTMLElement).style.setProperty('--length', `${length}`);
        (path as HTMLElement).style.setProperty('--delay', `${index * 0.05}s`);

        path.classList.add('animated-path');
      });
    } catch (error) {
      console.error('Error loading SVG:', error);
    }
  }, [src]);

  useEffect(() => {
    setupAnimations();

    // Setup periodic re-animation with initial delay
    if (replayInterval > 0) {
      timeoutRef.current = window.setTimeout(() => {
        // First replay after delay
        triggerAnimation();

        // Then continue at regular intervals
        intervalRef.current = window.setInterval(() => {
          triggerAnimation();
        }, replayInterval);
      }, delay + replayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src, replayInterval, delay, setupAnimations, triggerAnimation]);

  return (
    <div
      ref={containerRef}
      className={`svg-wrapper ${className}`}
      role="img"
      aria-label={alt}
    />
  );
};

export default AnimatedSVG;
