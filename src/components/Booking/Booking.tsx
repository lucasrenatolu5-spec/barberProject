import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Booking.module.css';

const Booking: React.FC = () => {
  const [ref, inView] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.phone && form.service) setSubmitted(true);
  };

  return (
    <section id="booking" className={`${styles.section} ${inView ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Reserve seu horário</span>
          <h2 className={styles.title}>Agende sua<br /><em>Experiência</em></h2>
          <p className={styles.body}>
            Reserve agora e garanta seu horário com um dos nossos mestres barbeiros.
            Confirmação imediata por WhatsApp.
          </p>
          <div className={styles.contacts}>
            <a href="tel:+5511999999999" className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <span className={styles.contactLabel}>Telefone</span>
                <span className={styles.contactVal}>(11) 99999-9999</span>
              </div>
            </a>
            <a href="https://wa.me/5511999999999" className={styles.contactItem} target="_blank" rel="noreferrer">
              <span className={styles.contactIcon}>💬</span>
              <div>
                <span className={styles.contactLabel}>WhatsApp</span>
                <span className={styles.contactVal}>(11) 99999-9999</span>
              </div>
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <span className={styles.contactLabel}>Endereço</span>
                <span className={styles.contactVal}>Rua Augusta, 1200 – Cerqueira César, SP</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕐</span>
              <div>
                <span className={styles.contactLabel}>Horário</span>
                <span className={styles.contactVal}>Seg–Sáb: 9h às 20h</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✦</div>
              <h3 className={styles.successTitle}>Agendamento Confirmado!</h3>
              <p className={styles.successText}>
                Entraremos em contato em breve pelo WhatsApp para confirmar seu horário.
                Estamos ansiosos para recebê-lo.
              </p>
              <button className={styles.successBtn} onClick={() => setSubmitted(false)}>
                Novo Agendamento
              </button>
            </div>
          ) : (
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nome completo</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Telefone / WhatsApp</label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="(11) 99999-9999"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Serviço</label>
                <select className={styles.select} name="service" value={form.service} onChange={handleChange}>
                  <option value="">Selecione um serviço</option>
                  <option>Corte Clássico – R$ 80</option>
                  <option>Barbear com Toalha Quente – R$ 70</option>
                  <option>Pacote Premium – R$ 180</option>
                  <option>Hidratação Capilar – R$ 90</option>
                  <option>Design de Barba – R$ 55</option>
                  <option>Ritual Ouro – R$ 320</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Data preferencial</label>
                  <input className={styles.input} type="date" name="date" value={form.date} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Horário</label>
                  <select className={styles.select} name="time" value={form.time} onChange={handleChange}>
                    <option value="">Horário</option>
                    {['09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','17:00','18:00','19:00'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button className={styles.submitBtn} onClick={handleSubmit}>
                <span>Confirmar Agendamento</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
