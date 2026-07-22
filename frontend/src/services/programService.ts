import api from "./apiService";

export const getPrograms = async () => {
  const response =
    await api.get("/programs");

  return response.data;
};
export const createProgram = async (
  data: {
    name: string;
    description: string;
    duration: string;
    maxStudents: number;
  }
) => {
  const response =
    await api.post("/programs", data);

  return response.data;
};

export const getProgramById =
  async (id: number) => {
    const response =
      await api.get(
        `/programs/${id}`
      );

    return response.data;
  };

  export const updateProgram = async (
  id: number,
  data: {
    name: string;
    description: string;
    duration: string;
    maxStudents: number;
  }
) => {
  const response = await api.put(
    `/programs/${id}`,
    data
  );

  return response.data;
};

export const deleteProgram = async (
  id: number
) => {
  const response = await api.delete(
    `/programs/${id}`
  );

  return response.data;
};