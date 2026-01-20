export type Language = 'ko' | 'en' | 'fr';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  descKey: string;
  image: string;
}

export interface Activity {
  id: string;
  year: string;
  title: string;
  image: string;
  descKey: string;
  dateStr: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  place: string;
  year: string;
  content: {
    overview: string;
    performance: string;
    photos: string[]; // URLs
    techRider: string; // Description or download link mock
  };
}

export interface PressItem {
  id: string;
  title: string;
  date: string;
  link: string;
}

export type SectionType = 'main' | 'about' | 'team' | 'activity' | 'archive' | 'press';

export type I18nString = {
  [key in Language]: string;
};

export type I18nDictionary = {
  [key: string]: I18nString;
};