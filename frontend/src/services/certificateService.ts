import api from "./apiService";

export const getStudentCertificates =
  async (studentId: string | number) => {
    const response =
     await api.get(`/certificates/student/${studentId}`);

    return response.data;
  };

export const getCertificateById =
  async (id: number) => {
    const response =
      await api.get(
        `/certificates/${id}`
      );

    return response.data;
  };

export const getAllCertificates =
  async () => {
    const response =
      await api.get(`/certificates`);

    return response.data;
  };