// lib/site-data.ts
export const studioInfo = {
  name: 'Blade Academy',
  tagline: 'Precision. Honor. Mastery.',
  subheadline: 'Seattle\'s premier fencing and weapons arts school. Foil, Sabre, Épée, Kendo, and Iaido — taught with historical rigor and competitive excellence.',
  address: '1421 Western Ave, Seattle, WA 98101',
  phone: '(206) 555-0312',
  email: 'info@bladeacademy.com',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  hours: {
    'Mon–Fri': '7:00 AM – 9:00 PM',
    'Saturday': '9:00 AM – 4:00 PM',
    'Sunday': '10:00 AM – 2:00 PM',
  },
};

export const stats = [
  { value: '18+', label: 'Years in Seattle' },
  { value: '220+', label: 'Active Students' },
  { value: '5', label: 'Disciplines Taught' },
  { value: '40+', label: 'National Medals' },
];

export const disciplines = [
  {
    name: 'Foil Fencing',
    origin: 'French / Italian',
    description: 'The most technical weapon in Olympic fencing. Precise point attacks to the torso with complex right-of-way rules. The foundation for all fencers.',
    level: 'All Levels',
  },
  {
    name: 'Sabre Fencing',
    origin: 'Hungarian / Eastern European',
    description: 'The fastest Olympic fencing weapon. Cuts, slashes, and point attacks to the upper body — dynamic and explosive. Beginner and competitive tracks.',
    level: 'All Levels',
  },
  {
    name: 'Épée Fencing',
    origin: 'French Dueling',
    description: 'The most democratic weapon — whole body target, no right-of-way. Patience, strategy, and precision. Favored by tactical thinkers.',
    level: 'All Levels',
  },
  {
    name: 'Kendo',
    origin: 'Japanese',
    description: 'The way of the sword. Shinai (bamboo sword) sparring rooted in Bushido philosophy. Grading system from 1st kyu to 8th dan.',
    level: 'All Levels',
  },
  {
    name: 'Iaido',
    origin: 'Japanese',
    description: 'The art of the sword draw. Meditative kata practice with iaito (practice sword). Precision, mindfulness, and martial philosophy.',
    level: 'All Levels',
  },
];

export const instructors = [
  {
    name: 'Maitre Jean-Pierre Dubois',
    rank: 'Certified Maitre d\'Armes (French Fencing Master) · 35 years',
    bio: 'Trained under the French national system in Paris, Jean-Pierre is one of fewer than 50 certified French Fencing Masters in North America.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
  {
    name: 'Sensei Keiko Yamamoto',
    rank: '5th Dan Kendo · 4th Dan Iaido · All-Japan Qualified',
    bio: 'Born in Osaka, trained at the Nippon Budokan. Keiko brings 25 years of Japanese sword arts to Seattle with uncompromising authenticity.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
  },
  {
    name: 'Coach Natalia Petrova',
    rank: 'National Sabre Champion · Olympic Development Coach',
    bio: 'Former US Sabre national team member with two national titles. Leads our competitive sabre and youth Olympic development programs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  },
];

export const testimonials = [
  { name: 'Alex R.', rating: 5, text: 'Maitre Jean-Pierre\'s fencing instruction is unlike anything else in Seattle. The depth of historical knowledge combined with modern technique is extraordinary.' },
  { name: 'Hannah L.', rating: 5, text: 'Started Kendo at 40 with no martial arts background. Sensei Keiko is the most patient and precise teacher I\'ve ever had. Two years in and I\'ve graded to 2nd kyu.' },
  { name: 'Marcus T.', rating: 5, text: 'My daughter started foil fencing here at 10 and just qualified for the Junior National Circuit at 14. The coaching system is world-class.' },
  { name: 'Dr. Sarah K.', rating: 5, text: 'Iaido has become the most important part of my week. The meditative practice Sensei Keiko teaches is a complete mental reset. Truly transformative.' },
];

export const pricing = [
  {
    name: 'Single Art',
    price: '$119',
    period: '/mo',
    features: ['One discipline of choice', 'Unlimited class sessions', 'Equipment loan program', 'Grading exam access'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Dual Arts',
    price: '$169',
    period: '/mo',
    features: ['Two disciplines of choice', 'Unlimited all sessions', 'Equipment loan program', 'Competition access', 'Open fencing hours'],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Full Academy',
    price: '$219',
    period: '/mo',
    features: ['All 5 disciplines', 'Unlimited access', 'Equipment loan included', 'Competition team access', 'Private lesson discounts'],
    cta: 'Join Academy',
    highlight: false,
  },
];
