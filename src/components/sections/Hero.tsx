import React from "react";
import Button from "../ui/Button";
import { SOCIAL_PROOF_AVATARS } from "../../data/constants";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate()
  const handleBtn = () => {
    navigate("/courses");
  }
  return(
    <section className={styles.hero}>
    <div className={styles.bg} />
    <div className={styles.grid} />

    <div className={styles.badge}>
      <span className={styles.badgeDot} />
      أكثر من ٥٠٬٠٠٠ مطوّر مسجّل بالفعل
    </div>

    <h1 className={styles.heading} style={{fontSize: "60px"}}>
      طوّر مهاراتك و<br />
      طوّر مسيرتك المهنية
    </h1>

    <p className={styles.sub}>
      كورسات يقودها خبراء حقيقيون، مصممة للعمل الفعلي. أتقن أحدث الأطر والأدوات
      وأفضل الممارسات — بالسرعة التي تناسبك.
    </p>

    <div className={styles.actions}>
      <Button onClick={handleBtn} variant="hero">استعرض جميع الكورسات ←</Button>
      <Button variant="hero-ghost">▶ شاهد العرض</Button>
    </div>

    <div className={styles.socialProof}>
      <div className={styles.avatars}>
        {SOCIAL_PROOF_AVATARS.map((a, i) => (
          <div
            key={i}
            className={styles.avatar}
            style={{ zIndex: SOCIAL_PROOF_AVATARS.length - i }}
          >
            {a}
          </div>
        ))}
      </div>
      <p className={styles.proofText}>
        يثق بنا <strong>+٥٠ ألف متعلم</strong> حول العالم ·{" "}
        <strong>تقييم ٤.٩★</strong>
      </p>
    </div>
  </section>
  )
};

export default Hero;
