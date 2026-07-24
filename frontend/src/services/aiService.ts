import axios from "axios";

import api from "./apiService";

export const analyzeSkillGap =
  async (
    currentSkills: string,
    desiredRole: string
  ) => {
    const response =
      await api.post("/ai/skill-gap", 
        {
          currentSkills,
          desiredRole,
        }
      );

    return response.data;
  };