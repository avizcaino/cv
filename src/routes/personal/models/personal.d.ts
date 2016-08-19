/**
 * Created by alexvizcaino on 19/8/16.
 */
declare module 'persona-module'{
  export interface PersonalSkills{
    languages: Language[];
    programming: string[];
    frameworks: string[];
    bakcend: string[];
    others: string[];
  }

  export interface Language{
    language: string;
    understanding: string;
    reading: string;
    spoken: string;
    writing: string;
  }

  export interface Certification{
    certification: string;
    entity: string;
    date: string;
  }

  export interface Award{
    award: string;
    title: string;
    department: string;
    advisors: string;
    description: string;
    competences: string[];
  }
}
