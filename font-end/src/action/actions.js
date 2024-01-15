import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

//fetch có 3 trạng thái là start->doing->finish
//hàm middleware
export const getAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      if(res.status===200){
          dispatch(fetchUserSuccess(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchUserError());
    }
  };
};

export const createNewUser = (userRequest) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      const res = await axios.post(
        `http://localhost:8080/users/create`,
        userRequest
      );
      if (res.status === 201) {
        dispatch(createUserSuccess());
        dispatch(getAllUser());
      }
    } catch (error) {
      dispatch(createUserError());
    }
  };
};


export const deleteUser = (id) => {
    return async (dispatch, getState) => {
      dispatch(deleteUserRequest());
      try {
        const res = await axios.delete(
          `http://localhost:8080/users/delete/${id}`,
        );
        if (res.status === 200) {
          dispatch(deleteUserSuccess());
          dispatch(getAllUser());
        }
      } catch (error) {
        dispatch(deleteUserError());
      }
    };
  };



export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    listUser: data,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const createUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

export const createUserSuccess = () => {
  return {
    type: ADD_USER_SUCCESS,
  };
};

export const createUserError = () => {
  return {
    type: ADD_USER_ERROR,
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
