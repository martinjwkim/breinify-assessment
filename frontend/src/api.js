import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:3001/products");
  return JSON.parse(res.data);
};

const addProduct = async (data) => {
  const res = await axios.post("http://localhost:3001/products", data);
  return res.data;
};

const updateProduct = async (id, data) => {
  const res = await axios.patch(`http://localhost:3001/products/${id}`, data);
  return res.data;
};

const deleteProduct = async (id) => {
  const res = await axios.delete(`http://localhost:3001/products/${id}`);
  return res.data;
};

export { fetchProducts, addProduct, updateProduct, deleteProduct };
