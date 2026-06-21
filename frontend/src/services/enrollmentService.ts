import axios from "axios";

const API_URL =
  "http://localhost:5000/api/enrollments";

export const getStudentEnrollments =
  async (studentId: string | number) => {
    const response =
      await axios.get(
        `${API_URL}/student/${studentId}`
      );

    return response.data;
  };