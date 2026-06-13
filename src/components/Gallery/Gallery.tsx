import React from 'react';
import { useInView } from '../../hooks/useInView';
import {
  ambienteB64, barbeiroB64, corteLateralB64,
  corteTopoB64, nucaB64, fadeB64
} from '../../assets/images';
import styles from './Gallery.module.css';

const items = [
  { src: ambienteB64,     label: 'Nosso ambiente',     span: true },
  { src: corteTopoB64,    label: 'Corte moderno',       span: false },
  { src: nucaB64,         label: 'Degradê perfeito',    span: false },
  { src: fadeB64,         label: 'Skin fade',           span: false },
  { src: corteLateralB64, label: 'Acabamento clássico', span: false },
  { src: barbeiroB64,     label: 'Mãos de mestre',      span: false },
];

const Gallery: React.FC = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="gallery"
      className={`${styles.section} ${inView ? styles.visible : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nosso trabalho</span>
          <h2 className={styles.title}>Galeria de <em>Cortes</em></h2>
          <p className={styles.sub}>
            Cada corte é uma obra de arte. Confira alguns dos nossos trabalhos mais recentes.
          </p>
        </div>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${item.span ? styles.itemSpan : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <img src={item.src} alt={item.label} className={styles.img} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
