import axios from "axios";

// const API = "http://localhost:5000/api/cars";
const API = "https://car-recommender-tt1x.onrender.com/api/cars";

export const filterCars = async (filters) => {
  const res = await axios.post(`${API}/filter`, filters);
  return res.data;
};
