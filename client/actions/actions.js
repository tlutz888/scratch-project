import * as types from '../constants/actionTypes'

// export const  = () => ({
//   type: types.,
//   payload: ,
// });

export const login = () => ({
  type: types.LOGIN,
  payload: ,
});

export const signUp = () => ({
  type: types.SIGNUP,
  payload: ,
});

export const logOut = () => ({
  type: types.LOGOUT,
  payload: ,
});

export const addProject = () => ({
  type: types.ADD_PROJECT,
  payload: ,
});

export const deleteProject = () => ({
  type: types.DELETE_PROJECT,
  payload: ,
});

export const completeProject = () => ({
  type: types.COMPLETE_PROJECT,
  payload: ,
});

export const addCategory = () => ({
  type: types.ADD_CATEGORY,
  payload: ,
});

export const deleteCategory = () => ({
  type: types.DELETE_CATEGORY,
  payload: ,
});

  // if statement if currenIds are not the same as state trigger stopTimer
  // send info and resert state and start new timer
export const startTimer = (currentIds) => ({
  type: types.START_TIMER,
  // expecting object {  currentProjectId: 0, currentCategoryId: 0 } 
  payload: currentIds,
});

  // if statement if currenIds are the same as state trigger stopTimer
  // send info and resert state
export const stopTimer = (currentIds) => ({
  type: types.STOP_TIMER,
  payload: currentIds,
});

// export const  = () => ({
//   type: types.,
//   payload: ,
// });