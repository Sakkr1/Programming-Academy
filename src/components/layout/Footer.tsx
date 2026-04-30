import React from 'react';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { label: 'الكورسات', href: '#courses' },
  { label: 'من نحن',   href: '#about' },
  { label: 'المدونة',  href: '#' },
  { label: 'وظائف',   href: '#' },
  { label: 'الخصوصية', href: '#' },
  { label: 'الشروط',   href: '#' },
];

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a href="#" className={styles.logo}>
      <span className={styles.dot} /> أكاديمية البرمجة
    </a>

    <div className={styles.links}>
      {FOOTER_LINKS.map((l) => (
        <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
      ))}
    </div>

    <p className={styles.copy}>© ٢٠٢٦ أكاديمية البرمجة. جميع الحقوق محفوظة.</p>
  </footer>
);

export default Footer;
