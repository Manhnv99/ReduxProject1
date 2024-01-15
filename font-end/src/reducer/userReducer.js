import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  listUser: [],
  isLoading: false,
  isError: false,
};

//tham sô state ở đây có nghĩa là nếu là state này có giá trị rồi thì nó sẽ lấy chính nó, còn nếu mà chưa có thì sẽ thực hiện lấy giá trị initial state.
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        listUser: action.listUser,
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export const addUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
