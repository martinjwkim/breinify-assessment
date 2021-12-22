import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:3001/products");
  return JSON.parse(res.data);
};

const addProduct = async (data) => {
  const res = await axios.post("http://localhost:3001/products", data);
  return JSON.parse(res.data);
};

export { fetchProducts, addProduct };
