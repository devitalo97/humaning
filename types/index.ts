export interface TrainingProject {
  id: string;
  title: string;
  location: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  date: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  credentials: string[];
  image?: string;
}

export interface ProgramModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description?: string;
  location: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  targetAudience: string[];
  duration: string;
  deliverables: string[];
}