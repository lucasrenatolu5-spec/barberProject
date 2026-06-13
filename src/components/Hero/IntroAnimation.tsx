import React, { useEffect, useState } from 'react';
import styles from './IntroAnimation.module.css';

interface Props { onComplete: () => void; }

const WORD = ['A','U','R','U','M'];

const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
  const [shownLetters, setShownLetters] = useState<number[]>([]);
  const [showDivider, setShowDivider] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Reveal letters one by one like a blade carving
    WORD.forEach((_, i) => {
      setTimeout(() => setShownLetters(prev => [...prev, i]), 500 + i * 100);
    });
    setTimeout(() => setShowDivider(true), 1100);
    setTimeout(() => setShowTagline(true), 1350);
    // Blade split open
    setTimeout(() => setOpening(true), 2400);
    // Done
    setTimeout(() => { setDone(true); onComplete(); }, 3300);
  }, [onComplete]);

  if (done) return null;

  return (
    <div className={`${styles.intro} ${opening ? styles.opening : ''}`}>
      {/* Background blurred image via CSS */}
      <div className={styles.introBg} />

      {/* Blade halves */}
      <div className={styles.bladeTop} />
      <div className={styles.bladeBot} />

      {/* Cut line + glint */}
      <div className={styles.cutLine} />
      <div className={styles.bladeGlint} />

      {/* Logo content */}
      <div className={styles.content}>
        <div className={styles.letters}>
          {WORD.map((letter, i) => (
            <span
              key={i}
              className={`${styles.letter} ${shownLetters.includes(i) ? styles.letterShow : ''}`}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className={`${styles.divider} ${showDivider ? styles.dividerShow : ''}`}>
          <span className={styles.divLine} />
          <span className={styles.divGem}>◆</span>
          <span className={styles.divLine} />
        </div>
        <p className={`${styles.tagline} ${showTagline ? styles.taglineShow : ''}`}>
          BARBERSHOP
        </p>
      </div>
    </div>
  );
};

export default IntroAnimation;
