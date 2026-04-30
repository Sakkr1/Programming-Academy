export interface Course {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: 'Bestseller' | 'New' | 'Popular' | 'Essential' | 'Hot' | 'Advanced';
  lessons: number;
  hours: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  text: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  highlight: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type BadgeType = "new" | "hot" | "free" | null;

export type Level =
  | "مبتدئ"
  | "متوسط"
  | "متقدم"
  | "مبتدئ → متقدم"
  | "مبتدئ → متوسط"
  | "متوسط → متقدم";
export type Category =
  | "برمجة"
  | "تصميم"
  | "ذكاء اصطناعي"
  | "أمن سيبراني"
  | "قواعد البيانات"
  | "تطوير ويب";

export interface CourseInfo {
  id: number;
  title: string;
  description: string;
  category: Category;
  level: Level;
  price: number | "free";
  students: number;
  hours: number;
  rating: number;
  emoji: string;
  thumbGradient: string;
  badge: BadgeType;
}

export type TagVariant = 'default' | 'new' | 'hot' | 'popular' | 'advanced';
