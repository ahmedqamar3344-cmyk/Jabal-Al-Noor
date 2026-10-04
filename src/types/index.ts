export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  capabilities: string[];
  capabilitiesAr: string[];
  metrics: {
    label: string;
    labelAr: string;
    value: string;
  };
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  titleAr: string;
  category: 'earthworks' | 'transport' | 'marine' | 'building';
  categoryLabel: string;
  categoryLabelAr: string;
  location: string;
  duration: string;
  description: string;
  descriptionAr: string;
  thumbnail: string;
  facebookUrl: string;
  viewsCount: string;
  date: string;
}

export interface FleetItem {
  id: string;
  name: string;
  nameAr: string;
  category: 'tippers' | 'excavators' | 'earthmoving' | 'specialized';
  categoryLabel: string;
  categoryLabelAr: string;
  specifications: {
    capacity?: string;
    power?: string;
    weight?: string;
    attachments?: string;
    bestFor: string;
    bestForAr: string;
  };
  availability: 'Available Immediately' | 'On Active Project';
  availabilityAr: 'متاح فوراً' | 'في مشروع قيد التنفيذ';
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  location: string;
  locationAr: string;
  clientType: string;
  scope: string;
  scopeAr: string;
  stats: {
    metric: string;
    metricAr: string;
    value: string;
  };
  image: string;
}
