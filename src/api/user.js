import axios from "axios";
export const register = async (task) => {
  let res = await axios({
    method: "POST",
    url: "http://localhost:5000/users",
    headers: {
      "content-type": "application/json",
    },
    data: task.inputs,
  });
  console.log("res", res);
  return res;
};
export const getUser = async () => {
  let res = await axios({
    method: "GET",
    url: "http://localhost:5000/users/",
    headers: {
      "content-type": "application/json",
    },
  });
  return res;
};
export const deleteAuser = async (id) => {
  await axios({
    method: "delete",
    url: `http://localhost:5000/users/${id}`,
    headers: { "content-type": "application/json" },
  });
};
export const updateUser = async (id, user) => {
  const data = await axios
    .put(`http://localhost:5000/users/${id}`, user)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
