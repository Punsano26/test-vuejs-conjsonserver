import api from "./api"

const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

const createUser = async (user) => {
  const response = await api.post("/users", user);
  return response.data;
};

const updateUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

const userService = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;
