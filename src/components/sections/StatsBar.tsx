import React from 'react';
import { STATS } from '../../data/constants';
import styles from './StatsBar.module.css';

const StatsBar: React.FC = () => (
  <div className={styles.bar}>
    {STATS.map((stat) => (
      <div key={stat.label} className={styles.item}>
        <div className={styles.value}>{stat.value}</div>
        <div className={styles.label}>{stat.label}</div>
      </div>
    ))}
  </div>
);

export default StatsBar;
