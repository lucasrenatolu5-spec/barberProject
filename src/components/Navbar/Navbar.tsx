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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
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
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  const mobileMenuStyle: React.CSSProperties = isMobile ? {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#0A0A0A',
    zIndex: 101,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? 'all' : 'none',
    transition: 'opacity 0.35s ease',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } : {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    margin: 0,
    padding: 0,
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? '0.9rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(201,168,76,0.15)' : 'none',
        transform: !visible && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'all 0.4s ease',
      }}
    >
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => handleNav('#hero')}>
          <span className={styles.logoText}>AURUM</span>
          <span className={styles.logoDot}>◆</span>
        </button>

        <ul style={mobileMenuStyle}>
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${active === link.href ? styles.linkActive : ''}`}
                onClick={() => handleNav(link.href)}
                style={isMobile ? { fontSize: '1.1rem', padding: '0.75rem 1.5rem' } : {}}
              >
                {link.label}
                <span className={styles.linkUnderline} />
              </button>
            </li>
          ))}
          <li>
            <button
              className={styles.ctaBtn}
              onClick={() => handleNav('#booking')}
              style={isMobile ? { marginLeft: 0, padding: '0.75rem 2rem' } : {}}
            >
              Agendar
            </button>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ zIndex: 103, position: 'relative' }}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
