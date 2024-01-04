export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url?: string;
  repo?: string;
}