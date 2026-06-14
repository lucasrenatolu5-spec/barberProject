import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Depoimentos', href: '#testimonials' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // não esconde a nav enquanto menu estiver aberto
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < lastScroll.current || y < 100);
      lastScroll.current = y;

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${!visible && !menuOpen ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => handleNav('#hero')}>
          <span className={styles.logoText}>AURUM</span>
          <span className={styles.logoDot}>◆</span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${active === link.href ? styles.linkActive : ''}`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
                <span className={styles.linkUnderline} />
              </button>
            </li>
          ))}
          <li>
            <button className={styles.ctaBtn} onClick={() => handleNav('#booking')}>
              Agendar
            </button>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;