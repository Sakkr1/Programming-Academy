import React, { useRef } from 'react';
import Badge from '../ui/Badge';
import type { Course, TagVariant } from '../../types/app-types';
import styles from './CourseCard.module.css';

const TAG_VARIANT_MAP: Record<Course['tag'], TagVariant> = {
  Bestseller: 'default',
  New:        'new',
  Popular:    'popular',
  Essential:  'default',
  Hot:        'hot',
  Advanced:   'advanced',
};

const TAG_LABEL_AR: Record<Course['tag'], string> = {
  Bestseller: 'الأكثر مبيعًا',
  New:        'جديد',
  Popular:    'شائع',
  Essential:  'أساسي',
  Hot:        'رائج',
  Advanced:   'متقدم',
};

const LEVEL_AR: Record<Course['level'], string> = {
  Beginner:     'مبتدئ',
  Intermediate: 'متوسط',
  Advanced:     'متقدم',
};

interface CourseCardProps {
  course: Course;
  visible: boolean;
  delay: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, visible, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    cardRef.current!.style.setProperty('--mx', `${x}%`);
    cardRef.current!.style.setProperty('--my', `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.icon}>{course.icon}</div>
      <Badge variant={TAG_VARIANT_MAP[course.tag]}>{TAG_LABEL_AR[course.tag]}</Badge>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.desc}>{course.description}</p>
      <div className={styles.meta}>
        <span>{course.lessons} درس</span>
        <span>·</span>
        <span>{course.hours} ساعة</span>
        <span>·</span>
        <span>{LEVEL_AR[course.level]}</span>
      </div>
      <div className={styles.arrow}>ابدأ الكورس ←</div>
    </div>
  );
};

export default CourseCard;
