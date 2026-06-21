import axios from "axios";

const API_URL =
  "http://localhost:5000/api/certificates";

export const getStudentCertificates =
  async (studentId: string | number) => {
    const response =
      await axios.get(
        `${API_URL}/student/${studentId}`
      );

    return response.data;
  };
  export const getCertificateById =
  async (id: number) => {
    const response =
      await axios.get(
        `${API_URL}/${id}`
      );

    return response.data;
  };