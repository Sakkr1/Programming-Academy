import React from "react";
import Button from "../ui/Button";
import CourseCard from "./CourseCard";
import useInView from "../../hooks/useInView";
import { COURSES } from "../../data/constants";
import styles from "./Courses.module.css";
import { useNavigate } from "react-router-dom";

const Courses: React.FC = () => {
  const { ref, inView } = useInView();
  const navigate = useNavigate()
  const handleBtn = () => {
    navigate("/courses");
  }

  return (
    <section className={styles.section} id="courses" ref={ref}>
      <div className={styles.header}>
        <div>
          <p className="section-tag">// ما نقدمه</p>
          <h2 className="section-title">
            كورسات مصممة
            <br />
            للمطورين الجادين
          </h2>
          <p className="section-sub">
            مناهج صممها مهندسون كبار. لا حشو ولا تضييع للوقت — فقط المهارات التي
            تُوظّفك.
          </p>
        </div>
        <Button variant="ghost" onClick={handleBtn}>عرض جميع الكورسات ←</Button>
      </div>

      <div className={styles.grid}>
        {COURSES.map((course, i) => (
          <CourseCard
            key={course.id}
            course={course}
            visible={inView}
            delay={i * 80}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
