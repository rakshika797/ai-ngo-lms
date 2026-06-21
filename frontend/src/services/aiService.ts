import axios from "axios";

const API_URL =
  "http://localhost:5000/api/ai";

export const analyzeSkillGap =
  async (
    currentSkills: string,
    desiredRole: string
  ) => {
    const response =
      await axios.post(
        `${API_URL}/skill-gap`,
        {
          currentSkills,
          desiredRole,
        }
      );

    return response.data;
  };