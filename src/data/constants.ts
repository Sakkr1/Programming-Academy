import type { Course, Testimonial, PricingTier, Stat, NavLink } from '../types/app-types.ts';

export const NAV_LINKS: NavLink[] = [
  { label: 'الكورسات',   href: '#courses' },
  { label: 'من نحن',     href: '#about' },
  { label: 'الأسعار',    href: '#pricing' },
  { label: 'المجتمع',   href: '#community' },
];

export const STATS: Stat[] = [
  { value: '+٢٠٠',  label: 'كورس متخصص' },
  { value: '+٥٠ألف', label: 'متعلم نشط' },
  { value: '٩٤٪',   label: 'معدل التوظيف' },
  { value: '٤.٩★',  label: 'متوسط التقييم' },
];

export const COURSES: Course[] = [
  {
    id: 'js-mastery',
    icon: '⚡',
    title: 'إتقان JavaScript',
    description: 'من الصفر إلى المستوى المتقدم مع مشاريع حقيقية وأحدث ميزات ES2024.',
    tag: 'Bestseller',
    lessons: 148,
    hours: 32,
    level: 'Beginner',
  },
  {
    id: 'react-ts',
    icon: '⚛️',
    title: 'React و TypeScript',
    description: 'ابنِ تطبيقات قابلة للتوسع وآمنة من الأخطاء باستخدام أحدث أنماط React.',
    tag: 'New',
    lessons: 96,
    hours: 24,
    level: 'Intermediate',
  },
  {
    id: 'python',
    icon: '🐍',
    title: 'Python للمطورين',
    description: 'الأتمتة وعلم البيانات وتطوير الخادم مع Python 3.12.',
    tag: 'Popular',
    lessons: 120,
    hours: 28,
    level: 'Beginner',
  },
  {
    id: 'databases',
    icon: '🗄️',
    title: 'قواعد البيانات و SQL',
    description: 'أتقن قواعد البيانات العلائقية وتحسين الاستعلامات وأساسيات NoSQL.',
    tag: 'Essential',
    lessons: 84,
    hours: 18,
    level: 'Intermediate',
  },
  {
    id: 'devops',
    icon: '☁️',
    title: 'السحابة و DevOps',
    description: 'AWS وDocker وKubernetes وخطوط CI/CD من الصفر حتى الإنتاج.',
    tag: 'Hot',
    lessons: 112,
    hours: 26,
    level: 'Advanced',
  },
  {
    id: 'security',
    icon: '🔐',
    title: 'أمن الويب',
    description: 'الاختراق الأخلاقي وأفضل ممارسات OWASP والبرمجة الآمنة.',
    tag: 'Advanced',
    lessons: 76,
    hours: 20,
    level: 'Advanced',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'ليلى حسان',
    role: 'مطورة واجهات أمامية',
    company: 'Meta',
    initials: 'لح',
    text: 'هذه المنصة غيّرت طريقة تفكيري في البرمجة بالكامل. المنهج المنظم والمشاريع الحقيقية ساعدتني في الحصول على وظيفة أحلامي خلال ثلاثة أشهر فقط.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'عمر خليل',
    role: 'مهندس fullstack',
    company: 'Stripe',
    initials: 'عخ',
    text: 'كورس React مع TypeScript وحده كان يستحق كل قرش. منظم بشكل رائع ومشاريع على مستوى الإنتاج الفعلي استطعت عرضها في المقابلات.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'سارة أحمد',
    role: 'مؤسسة شركة ناشئة',
    company: 'TechCairo',
    initials: 'سأ',
    text: 'أفضل استثمار في مسيرتي المهنية. انتقلت من لا أعرف شيئًا عن البرمجة إلى إطلاق منتج SaaS خاص بي. دعم المجتمع لا مثيل له.',
    rating: 5,
  },
];

export const PRICING: PricingTier[] = [
  {
    id: 'starter',
    name: 'المبتدئ',
    price: 'مجاني',
    period: 'للأبد',
    highlight: false,
    features: [
      '٣ كورسات مجانية',
      'الوصول للمجتمع',
      'شهادة إتمام الكورس',
      'تطبيق الجوال',
    ],
    cta: 'ابدأ مجانًا',
  },
  {
    id: 'pro',
    name: 'احترافي',
    price: '$٢٩',
    period: 'شهريًا',
    highlight: true,
    badge: 'الأكثر شيوعًا',
    features: [
      'جميع الكورسات +٢٠٠',
      'جلسات إرشاد فردية',
      'ورش برمجة مباشرة',
      'دعم التوظيف',
      'شارة المجتمع المميز',
    ],
    cta: 'ابدأ تجربة Pro',
  },
  {
    id: 'team',
    name: 'الفريق',
    price: '$٩٩',
    period: 'شهريًا',
    highlight: false,
    features: [
      'كل مزايا الاحترافي',
      'حتى ١٠ مقاعد',
      'لوحة تتبع الفريق',
      'مسارات تعليمية مخصصة',
      'مدير حساب مخصص',
    ],
    cta: 'تواصل مع المبيعات',
  },
];

export const SOCIAL_PROOF_AVATARS = ['لح', 'عخ', 'سأ', 'مر', 'يك'];
