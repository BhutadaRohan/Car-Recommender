import axios from "axios";

const API = "http://localhost:5000/api/cars";

export const filterCars = async (filters) => {
  const res = await axios.post(`${API}/filter`, filters);
  return res.data;
};
