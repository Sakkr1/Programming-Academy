import React from 'react';
import styles from './Badge.module.css';
import type { TagVariant } from '../../types/app-types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: TagVariant;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => (
  <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>
);

export default Badge;
