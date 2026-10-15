export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  role?: string;
  technologies: string[];
  iconName: 'biotech' | 'account_tree' | 'database' | 'server' | 'terminal';
  orderString: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  architecture?: string[];
}

export interface SkillItem {
  name: string;
  level: 'fluent' | 'learning' | 'expert'; // to represent active status or intermediate
  active: boolean; // blue dot or light dot
}

export interface SkillCategory {
  title: string;
  iconName: 'storage' | 'database' | 'desktop_windows' | 'terminal';
  skills: SkillItem[];
}

export interface ContactInfo {
  platform: string;
  label: string;
  value: string;
  url: string;
}
