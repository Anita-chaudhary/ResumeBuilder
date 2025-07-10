import React, { createContext, useContext, useState } from "react";

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
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>({
    personalDetails: null,
    objective: null,
    skill: [],
    projects: [],
    experiences: [],
    hobbies: [],
    qualification: [],
    languages: [],
  });

  // Save Details to AsyncStorage

  const updatePersonalDetails = (details: PersonalDetails) => {
    setState((prev) => ({ ...prev, personalDetails: details }));
  };

  const updateObjective = (objective: Objective) => {
    setState((prev) => ({ ...prev, objective: objective }));
  };

  const addSkill = (skill: Skill) => {
    setState((prev) => ({ ...prev, skill: [...prev.skill, skill] }));
  };

  const addProject = (project: Project) => {
    setState((prev) => ({ ...prev, projects: [...prev.projects, project] }));
  };

  const addExperience = (experience: Experience) => {
    setState((prev) => ({
      ...prev,
      experiences: [...prev.experiences, experience],
    }));
  };

  const addHobby = (hobby: Hobby) => {
    setState((prev) => ({ ...prev, hobbies: [...prev.hobbies, hobby] }));
  };

  const addQualification = (qualification: Qualification) => {
    setState((prev) => ({
      ...prev,
      qualification: [...prev.qualification, qualification],
    }));
  };
  const addLanguage = (language: Language) => {
    setState((prev) => ({ ...prev, languages: [...prev.languages, language] }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        updatePersonalDetails,
        updateObjective,
        addSkill,
        addProject,
        addExperience,
        addHobby,
        addQualification,
        addLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
