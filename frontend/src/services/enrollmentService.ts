import axios from "axios";

import api from "./apiService";

export const getStudentEnrollments =
  async (studentId: string | number) => {
    const response =
      await api.get(`/enrollments/student/${studentId}`);

    return response.data;
  };

export const getAllEnrollments =
  async () => {
    const response =
      await api.get(`/enrollments`);

    return response.data;
  };

   