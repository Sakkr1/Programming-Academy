import React from 'react';
import useInView from '../../hooks/useInView';
import { TESTIMONIALS } from '../../data/constants';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className={styles.section} id="community" ref={ref}>
      <p className="section-tag">// قصص النجاح</p>
      <h2 className="section-title">يحبنا المطورون</h2>
      <p className="section-sub">
        نتائج حقيقية من طلاب حقيقيين غيّروا مسيرتهم المهنية.
      </p>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.id}
            className={`${styles.card} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role} · {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
