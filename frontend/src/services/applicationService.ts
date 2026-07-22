import axios from "axios";

import api from "./apiService";

export const getApplications =
  async () => {
    const response =
      await api.get(`/applications`);

    return response.data;
  };

  export const updateApplicationStatus =
  async (
    id: number,
    status: string
  ) => {
    const response =
      await api.put(
        `/applications/${id}`,
        { status }
      );

    return response.data;
  };