import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Real photo background */}
      <div className={styles.heroImg} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroOverlay2} />

      <div className={styles.bgGrid} />

      <div ref={parallaxRef} className={styles.parallaxLayer}>
        <div className={styles.orbLeft} />
        <div className={styles.orbRight} />
      </div>

      <div className={styles.container}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Desde 1999 · São Paulo, Brasil</span>
          <span className={styles.eyebrowLine} />
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineSmall}>A Excelência do</span>
          <span className={styles.headlineBig}>Barbeiro</span>
          <span className={styles.headlineBig2}>Clássico</span>
        </h1>

        <p className={styles.sub}>
          Onde cada corte é esculpido com precisão artesanal.<br />
          Experiências exclusivas para o homem que valoriza o detalhe.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Agendar Agora</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Serviços
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>25+</span>
            <span className={styles.statLabel}>Anos de tradição</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>12K+</span>
            <span className={styles.statLabel}>Clientes satisfeitos</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>8</span>
            <span className={styles.statLabel}>Barbeiros especialistas</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollBar} />
      </div>

      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />
    </section>
  );
};

export default Hero;
