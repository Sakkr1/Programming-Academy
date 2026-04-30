import React from "react";
import Button from "../ui/Button";
import styles from "./AboutUs.module.css";

const AboutUs: React.FC = () => (
  <section id="about" className={styles.about}>

    <div className={styles.container}>
      <div className={styles.content}>
        <div className="section-tag">من نحن</div>
        <h2 className={styles.heading}>
          أكاديمية البرمجة:
          <br />
          <span className={styles.highlight}>منصتك للتطوير المهني</span>
        </h2>
        <p className={styles.sub}>
          نُقدّم كورسات متقدمة يقودها خبراء من الصناعة، مصمّمة للمطورين العرب.
          من الصفر إلى الإحتراف مع مشاريع حقيقيّة وشهادات معترف بها عالميًّا.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>🎓</span>
            <div>
              <h3 className={styles.featureTitle}>منهج صناعي</h3>
              <p>محتوى محدّث أسبوعيًّا من قبل ٢٠+ خبير.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>🌍</span>
            <div>
              <h3 className={styles.featureTitle}>مجتمع عربي</h3>
              <p>١٠٠K+ مطور في مجموعات الدعم والمنتديات.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>💼</span>
            <div>
              <h3 className={styles.featureTitle}>دعم التوظيف</h3>
              <p>شراكات مع ٥٠+ شركة تقنيّة لفرص عمل مباشرة.</p>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <Button className={styles.cta}>اكتشف قصّتنا الكاملة ←</Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
