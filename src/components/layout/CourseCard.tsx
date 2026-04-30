import { useState } from "react";
import type { BadgeType, CourseInfo } from "../../types/app-types";

const BADGE_CONFIG: Record<NonNullable<BadgeType>, { label: string; bg: string }> = {
  hot:  { label: "🔥 الأكثر مشاهدة", bg: "#ef4444" },
  new:  { label: "✨ جديد",           bg: "#7c3aed" },
  free: { label: "مجاني",             bg: "#10b981" },
};
 
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <span style={{ fontSize: 13 }}>
    <span style={{ color: "#f59e0b" }}>{"★".repeat(Math.floor(rating))}</span>
    <span style={{ color: "rgba(255,255,255,0.2)" }}>
      {"★".repeat(5 - Math.floor(rating))}
    </span>
    <span style={{ color: "rgba(255,255,255,0.4)", marginRight: 4 }}>{rating}</span>
  </span>
);

interface CourseCardProps {
  course: CourseInfo;
}
 
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [hovered,    setHovered]    = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
 
  const formatStudents = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
 
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    "#16151a",
        border:        `1px solid ${hovered ? "rgba(124,58,237,0.45)" : "rgba(255,255,255,0.08)"}`,
        borderRadius:  16,
        overflow:      "hidden",
        transform:     hovered ? "translateY(-4px)" : "translateY(0)",
        transition:    "transform 0.22s ease, border-color 0.22s ease",
        cursor:        "pointer",
        display:       "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height:         180,
          background:     course.thumbGradient,
          position:       "relative",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          fontSize:       56,
          flexShrink:     0,
        }}
      >
        {course.emoji}
        {course.badge && (
          <span
            style={{
              position:     "absolute",
              top:          14,
              right:        14,
              padding:      "4px 12px",
              borderRadius: 100,
              fontSize:     12,
              fontWeight:   700,
              background:   BADGE_CONFIG[course.badge].bg,
              color:        "#fff",
            }}
          >
            {BADGE_CONFIG[course.badge].label}
          </span>
        )}
      </div>
 
      {/* Body */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span
            style={{
              fontSize:     12,
              color:        "#a78bfa",
              background:   "rgba(124,58,237,0.15)",
              padding:      "3px 10px",
              borderRadius: 100,
            }}
          >
            {course.category}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginRight: "auto" }}>
            {course.level}
          </span>
        </div>
 
        {/* Title */}
        <h3
          style={{
            fontSize:     17,
            fontWeight:   700,
            marginBottom: 8,
            lineHeight:   1.45,
            color:        "#fff",
          }}
        >
          {course.title}
        </h3>
 
        {/* Description */}
        <p
          style={{
            fontSize:     13,
            color:        "rgba(255,255,255,0.55)",
            marginBottom: 16,
            lineHeight:   1.7,
            flex:         1,
          }}
        >
          {course.description}
        </p>
 
        {/* Stats */}
        <div
          style={{
            display:     "flex",
            gap:         12,
            marginBottom: 16,
            flexWrap:    "wrap",
            alignItems:  "center",
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            👥 {formatStudents(course.students)} طالب
          </span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            ⏱ {course.hours} ساعة
          </span>
          <StarRating rating={course.rating} />
        </div>
 
        {/* Footer */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            borderTop:      "1px solid rgba(255,255,255,0.06)",
            paddingTop:     16,
          }}
        >
          <span
            style={{
              fontSize:   20,
              fontWeight: 900,
              color:      course.price === "free" ? "#10b981" : "#a78bfa",
            }}
          >
            {course.price === "free" ? "مجاني" : `${course.price} ر.س`}
          </span>
 
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              background:   btnHovered ? "#6d28d9" : "#7c3aed",
              border:       "none",
              color:        "#fff",
              padding:      "8px 20px",
              borderRadius: 8,
              cursor:       "pointer",
              fontFamily:   "Cairo, sans-serif",
              fontSize:     13,
              fontWeight:   700,
              transition:   "background 0.2s",
            }}
          >
            {course.price === "free" ? "ابدأ الآن" : "سجّل الآن"}
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default CourseCard;
 