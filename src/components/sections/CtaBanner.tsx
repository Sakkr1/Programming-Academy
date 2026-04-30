import React from "react";
import Button from "../ui/Button";
import useInView from "../../hooks/useInView";
import styles from "./CtaBanner.module.css";

const CtaBanner: React.FC = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${inView ? styles.visible : ""}`}
    >
      <div className={styles.glow} />
      <div className={styles.left}>
        <h2 className={styles.heading}>
          ابدأ كورسك الأول
          <br />
          مجانًا تمامًا
        </h2>
        <p className={styles.sub}>
          لا يلزم بطاقة ائتمان. يمكنك الإلغاء في أي وقت.
        </p>
      </div>
      <div className={styles.actions}>
        <Button variant="hero">ابدأ مجانًا</Button>
        <Button variant="hero-ghost">استعرض المنهج</Button>
      </div>
    </div>
  );
};

export default CtaBanner;
