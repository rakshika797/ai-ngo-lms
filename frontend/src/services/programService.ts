import axios from "axios";

const API_URL =
  "http://localhost:5000/api/programs";

export const getPrograms = async () => {
  const response =
    await axios.get(API_URL);

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
    await axios.post(API_URL, data);

  return response.data;
};

export const getProgramById =
  async (id: number) => {
    const response =
      await axios.get(
        `${API_URL}/${id}`
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
  const response = await axios.put(
    `${API_URL}/${id}`,
    data
  );

  return response.data;
};

export const deleteProgram = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};