import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import useScrolled from '../../hooks/useScrolled';
import { NAV_LINKS } from '../../data/constants';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoDot} />
        أكاديمية البرمجة
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <Button variant="ghost" size="sm">تسجيل الدخول</Button>
        <Button variant="primary" size="sm">ابدأ التعلم ←</Button>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="تبديل القائمة"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileCta}>
            <Button variant="ghost" size="md">تسجيل الدخول</Button>
            <Button variant="primary" size="md">ابدأ التعلم ←</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;