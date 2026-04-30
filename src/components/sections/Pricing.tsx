import React from 'react';
import Button from '../ui/Button';
import useInView from '../../hooks/useInView';
import { PRICING } from '../../data/constants';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className={styles.section} id="pricing" ref={ref}>
      <div className={styles.header}>
        <p className="section-tag">// الأسعار</p>
        <h2 className="section-title">أسعار واضحة وصادقة</h2>
        <p className="section-sub">ابدأ مجانًا وارتقِ عندما تكون جاهزًا. لا رسوم خفية.</p>
      </div>

      <div className={styles.grid} ref={ref}>
        {PRICING.map((tier, i) => (
          <div
            key={tier.id}
            className={`${styles.card} ${tier.highlight ? styles.highlight : ''} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {tier.badge && <div className={styles.badge}>{tier.badge}</div>}
            <div className={styles.name}>{tier.name}</div>
            <div className={styles.price}>{tier.price}</div>
            <div className={styles.period}>{tier.period}</div>
            <hr className={styles.divider} />
            <ul className={styles.features}>
              {tier.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Button
              variant={tier.highlight ? 'primary' : 'ghost'}
              className={styles.cta}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
