
export type AppState = 'playing' | 'paused' | 'loading' | 'error';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export enum Page {
  Home = 'Home',
  About = 'About',
  Contact = 'Contact'
}
