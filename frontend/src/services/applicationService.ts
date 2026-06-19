import axios from "axios";

const API_URL =
  "http://localhost:5000/api/applications";

export const getApplications =
  async () => {
    const response =
      await axios.get(API_URL);

    return response.data;
  };

  export const updateApplicationStatus =
  async (
    id: number,
    status: string
  ) => {
    const response =
      await axios.put(
        `${API_URL}/${id}`,
        { status }
      );

    return response.data;
  };