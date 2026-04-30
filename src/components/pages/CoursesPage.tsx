import React from "react";
import CourseCard from "../layout/CourseCard";
import { All_COURSES } from "../../data/constants";
const responsiveStyles = `
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
 
  /* Tablet: 2 columns */
  @media (max-width: 1024px) {
    .courses-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
 
  /* Mobile: 1 column */
  @media (max-width: 640px) {
    .courses-grid {
      grid-template-columns: 1fr;
    }
  }
 
  .courses-page {
    background: #0d0d0f;
    min-height: 100vh;
    font-family: Cairo, sans-serif;
    direction: rtl;
    padding: 48px;
  }
 
  @media (max-width: 640px) {
    .courses-page {
      padding: 24px 16px;
    }
 
    .courses-title {
      font-size: 32px !important;
    }
  }
`;
 
const CoursesPage: React.FC = () => {
  return (
    <>
      <style>{responsiveStyles}</style>
 
      <div className="courses-page" style={{marginTop: 50}}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            className="courses-title"
            style={{ fontSize: 48, fontWeight: 900, color: "#fff", marginBottom: 12 }}
          >
            جميع الكورسات
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)" }}>
            اكتشف مئات الكورسات المصممة لتطوير مهاراتك التقنية والمهنية
          </p>
        </div>
 
        <div className="courses-grid">
          {All_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};
 
export default CoursesPage;
