import React from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

const About: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      className={`${styles.about} ${inView ? styles.visible : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <div className={styles.imageMain} />
            <div className={styles.imageSec} />
            <div className={styles.imageBadge}>
              <span className={styles.badgeNum}>25</span>
              <span className={styles.badgeLabel}>anos de<br />experiência</span>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Nossa História</span>
          <h2 className={styles.title}>
            Tradição que se<br /><em>reinventa</em>
          </h2>
          <div className={styles.divider}>
            <span className={styles.divLine} />
            <span className={styles.divGem}>◆</span>
            <span className={styles.divLine} />
          </div>
          <p className={styles.body}>
            Fundada em 1999, a Aurum Barbershop nasceu da paixão pelo ofício clássico da barbearia.
            Durante mais de duas décadas, transformamos o ritual do cuidado masculino em uma
            experiência de sofisticação e exclusividade.
          </p>
          <p className={styles.body}>
            Cada detalhe foi pensado para elevar o padrão: desde os instrumentos alemães de precisão
            até os produtos artesanais de cuidado. Aqui, você não apenas é atendido — você é bem-vindo.
          </p>
          <ul className={styles.features}>
            {[
              'Instrumentos alemães de alta precisão',
              'Produtos premium importados',
              'Ambiente exclusivo e reservado',
              'Agendamento rápido online',
            ].map(f => (
              <li key={f} className={styles.feature}>
                <span className={styles.featureIcon}>◆</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
