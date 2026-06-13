import React, { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rafael Mendonça',
    role: 'Empresário',
    text: 'A Aurum redefiniu o que eu esperava de uma barbearia. A atenção aos detalhes e a qualidade do serviço são incomparáveis. É o único lugar onde eu confio minha imagem.',
    stars: 5,
  },
  {
    name: 'Gabriel Ferreira',
    role: 'Advogado',
    text: 'Vim pela primeira vez indicado por um colega e nunca mais fui a outro lugar. O ambiente é impecável, os profissionais são verdadeiros artistas. O Ritual Ouro é transformador.',
    stars: 5,
  },
  {
    name: 'Thiago Albuquerque',
    role: 'Médico',
    text: 'Não é apenas um corte de cabelo, é uma experiência completa de bem-estar. Saio de lá renovado, confiante e pronto para enfrentar qualquer desafio profissional.',
    stars: 5,
  },
  {
    name: 'Lucas Cavalcanti',
    role: 'Diretor de Marketing',
    text: 'O barbear com toalha quente é simplesmente sublime. Você se sente em outro nível de cuidado pessoal. A Aurum elevou meu padrão e agora não aceito menos.',
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>O que dizem nossos <em>clientes</em></h2>
        </div>

        <div className={styles.carousel}>
          <div className={styles.quoteIcon}>"</div>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
            >
              <p className={styles.text}>{t.text}</p>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  <span>{t.name.charAt(0)}</span>
                </div>
                <div>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
