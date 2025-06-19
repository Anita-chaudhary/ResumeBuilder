import React, { createContext } from "react";

type PersonalDetails = {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar?: string;
  title?: string;
};
type Objective = {
  text: string;
};

type Skill = {
  skillName: string;
  proficiency: string;
};

type Project = {
  projectName: string;
  description: string;
  role: string;
  duration: string;
};

type Experience = {
  jobTitle: string;
  companyName: string;
  loaction: string;
  duration: string;
  description: string;
  isCurrentlyWorking: string;
};

type Hobby = {
  hobby: string;
};

type Qualifications = {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
};

type Language = {
  language: string;
  proficiency: string;
};

type AppState = {
  personalDetails: PersonalDetails | null;
  objective: Objective | null;
  skill: Skill[];
  projects: Project[];
  experiences: Experience[];
  hobbies: Hobby[];
  qualification: Qualification[];
  languages: Language[];
};

type AppContextType = {
  state: AppState;
  updatePersonalDetails: (details: PersonalDetails) => void;
  updateObjective: (objective: Objective) => void;
  addSkill: (skill: Skill) => void;
  addProject: (project: Project) => void;
  addExperience: (experienc: Experience) => void;
  addHobby: (hobby: Hobby) => void;
  addQualification: (qualification: Qualification) => void;
  addLanguage: (language: Language) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider:React.FC<{children :  React.ReactNode}>