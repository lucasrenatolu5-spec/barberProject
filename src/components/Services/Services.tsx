import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    icon: '✂',
    name: 'Corte Clássico',
    desc: 'Técnica tradicional com navalha e tesoura alemã. Acabamento impecável com máquina de precisão.',
    price: 'R$ 80',
    time: '45 min',
    badge: 'Popular',
  },
  {
    id: 2,
    icon: '🪒',
    name: 'Barbear com Toalha Quente',
    desc: 'Ritual completo de barbear com toalha quente, espuma artesanal e navalha reta. A experiência definitiva.',
    price: 'R$ 70',
    time: '40 min',
    badge: 'Exclusivo',
  },
  {
    id: 3,
    icon: '👑',
    name: 'Pacote Premium',
    desc: 'Corte + Barba + Sobrancelha + Hidratação facial. O tratamento completo que você merece.',
    price: 'R$ 180',
    time: '90 min',
    badge: 'Premium',
  },
  {
    id: 4,
    icon: '💆',
    name: 'Hidratação Capilar',
    desc: 'Tratamento profundo com produtos importados. Restaura o brilho e a saúde do cabelo.',
    price: 'R$ 90',
    time: '50 min',
    badge: null,
  },
  {
    id: 5,
    icon: '✦',
    name: 'Design de Barba',
    desc: 'Modelagem completa com definição de contorno, hidratação e pigmentação opcional.',
    price: 'R$ 55',
    time: '35 min',
    badge: null,
  },
  {
    id: 6,
    icon: '◈',
    name: 'Ritual Ouro',
    desc: 'Experiência VIP com corte, barba, massagem capilar, máscara de argila e drink exclusivo.',
    price: 'R$ 320',
    time: '2h',
    badge: 'VIP',
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que oferecemos</span>
          <h2 className={styles.title}>
            Serviços <em>Exclusivos</em>
          </h2>
          <p className={styles.sub}>Cada serviço é uma experiência cuidadosamente elaborada para superar suas expectativas</p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.card} ${hovered === s.id ? styles.cardHovered : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {s.badge && <span className={styles.badge}>{s.badge}</span>}
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardName}>{s.name}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardTime}>{s.time}</span>
                <span className={styles.cardPrice}>{s.price}</span>
              </div>
              <button
                className={styles.cardBtn}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar
              </button>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
