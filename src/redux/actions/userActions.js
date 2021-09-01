import { getUser, register, deleteAuser, updateUser } from "../../api/user";

import { ActionTypes } from "../types/actionTypes";

export const setUsers = (tasks) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: tasks,
  };
};

export function createUser(data) {
  return {
    type: ActionTypes.ADD_USER,
    payload: data,
  };
}
export function removeUser(id) {
  return {
    type: ActionTypes.REMOVE_USER,
    payload: id,
  };
}
export const editUser = (product) => {
  return {
    type: ActionTypes.EDIT_USER,
    payload: product,
  };
};
export const getUsers = () => async (dispatch, getState) => {
  let res = await getUser();
  dispatch(setUsers(res));
};
export const addUser = (task) => async (dispatch, getState) => {
  console.log("task", task);
  let result = await register(task);
  console.log("result", result);
  dispatch(createUser(task));
};
export const deleteUser = (id) => async (dispatch) => {
  await deleteAuser(id).then((res) => console.log("res", res));
  dispatch(removeUser(id));
};
export const editProduct = (id, updatedUser) => async (dispatch) => {
  console.log(id);
  let res = await updateUser(id, updatedUser);
  dispatch(editUser(updateUser));
};
