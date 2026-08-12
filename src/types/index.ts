// Core domain types for DUTA Connect

export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type Author = {
  id: string;
  name: string;
  avatarColor: string;
  initials: string;
  location?: string;
  profession?: string;
  joinedYear?: number;
  posts?: number;
  verified?: boolean;
};

export type ForumThread = {
  id: string;
  slug: string;
  title: string;
  body: string;
  categoryId: string;
  author: Author;
  createdAt: string; // ISO
  views: number;
  pinned?: boolean;
  tags: string[];
  replies: Reply[];
  likes: number;
};

export type Reply = {
  id: string;
  author: Author;
  body: string;
  createdAt: string;
  likes: number;
};

export type Job = {
  id: string;
  slug: string;
  title: string;
  company: string;
  logoColor: string;
  logoInitials: string;
  category: string;
  type: "fulltime" | "parttime" | "contract" | "freelance" | "internship";
  location: string;
  remote: boolean;
  salaryMin: number;
  salaryMax: number;
  currency: "RM";
  postedAt: string;
  description: string;
  requirements: string[];
  benefits: string[];
  verified?: boolean;
};

export type Housing = {
  id: string;
  slug: string;
  title: string;
  type: "kos" | "apartemen" | "rumah" | "roommate" | "studio";
  pricePerMonth: number;
  location: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  furnished: boolean;
  image: string;
  features: string[];
  description: string;
  postedAt: string;
  agent: Author;
};

export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  endDate?: string;
  time: string;
  location: string;
  venue: string;
  description: string;
  capacity: number;
  registered: number;
  price: number; // 0 = free
  organizer: Author;
  highlights: string[];
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  provider: string;
  category: string;
  icon: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  verified: boolean;
  tags: string[];
  contact: string;
};

export type VisaType = {
  id: string;
  name: string;
  shortName: string;
  category: string;
  icon: string;
  description: string;
  duration: string;
  cost: string;
  steps: string[];
  documents: string[];
  tips: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type Alert = {
  level: "red" | "yellow" | "green";
  text: string;
  href?: string;
};
