import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.topBar} />
    <div className={styles.container}>
      <div className={styles.brand}>
        <span className={styles.logo}>AURUM <span className={styles.logoDot}>◆</span></span>
        <p className={styles.brandDesc}>
          A arte do refinamento masculino desde 1999.<br />
          Tradição, precisão e sofisticação em cada detalhe.
        </p>
        <div className={styles.socials}>
          {['Instagram', 'Facebook', 'TikTok'].map(s => (
            <a key={s} href="#" className={styles.social}>{s}</a>
          ))}
        </div>
      </div>

      <div className={styles.col}>
        <h4 className={styles.colTitle}>Serviços</h4>
        <ul className={styles.colList}>
          {['Corte Clássico', 'Barbear com Toalha', 'Pacote Premium', 'Hidratação Capilar', 'Ritual Ouro'].map(s => (
            <li key={s}><a href="#services" className={styles.colLink}>{s}</a></li>
          ))}
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.colTitle}>Navegação</h4>
        <ul className={styles.colList}>
          {[['Início','#hero'],['Sobre','#about'],['Serviços','#services'],['Depoimentos','#testimonials'],['Agendar','#booking']].map(([l,h]) => (
            <li key={l}>
              <a href={h} className={styles.colLink}
                onClick={e => { e.preventDefault(); document.querySelector(h)?.scrollIntoView({ behavior:'smooth' }); }}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.colTitle}>Contato</h4>
        <ul className={styles.colList}>
          <li className={styles.colText}>Rua Augusta, 1200<br />Cerqueira César – SP</li>
          <li className={styles.colText}>(11) 99999-9999</li>
          <li className={styles.colText}>contato@aurumbarbershop.com.br</li>
          <li className={styles.colText}>Seg–Sáb: 9h às 20h</li>
        </ul>
      </div>
    </div>

    <div className={styles.bottom}>
      <span className={styles.bottomText}>© {new Date().getFullYear()} Aurum Barbershop. Todos os direitos reservados.</span>
      <span className={styles.bottomText}>Crafted with precision ◆</span>
    </div>
  </footer>
);

export default Footer;
