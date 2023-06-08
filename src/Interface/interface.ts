export interface IPortFolioData {
  logo: string;
  logoWhite: string;
  backgroundVideo: string;
  profile: string;
  intro: {
    start: string;
    highlights: string[];
    end: string;
  };
  aboutMe: string;
  projects: IProject[];
  careers: ICareer[];
  contacts: IContact[];
  links: {
    kakaotalk: string;
    instagram: string;
    github: string;
  };
}

export interface IProject {
  imgURL: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface ICareer {
  imgURL: string;
  title: string;
  tags: string[];
  summary: string;
  description: {
    title: string;
    body: string;
  }[];
}

export interface IContact {
  title: string;
  text: string;
  href: string;
}
