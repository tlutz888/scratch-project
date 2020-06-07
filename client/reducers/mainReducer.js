import * as types from '../constants/constantsType';

const initialState ={
  user: {},
  projects: [],
  categories: [],
  currentProjectId: 0,
  currentCategoryId: 0,
  startTimer: 0,
  endTimer: 0,
  lastInterval: 0,
}

const mainReducer = (state=initialState, action) => {
  let user;
  let projects;
  let categories;
  let currentProjectId;
  let currentCategoryId;
  let startTimer;
  let endTimer;
  let lastInterval;

  switch (action.type) {
// case types.SIGNUP
// case types.LOGOUT
// case types.ADD_PROJECT
// case types.DELETE_PROJECT
// case types.COMPLETE_PROJECT
// case types.ADD_CATEGORY
// case types.DELETE_CATEGORY
    case types.LOGIN:
      user= action.payload.user;
      projects= action.payload.projects;
      categories= action.payload.categories;

      return {
        ...state,
        user,
        projects,
        categories,
      };


    case types.START_TIMER:
      startTimer = Date.now();
      currentProjectId=  action.payload.currentProjectId;
      currentCategoryId = action.payload.currentCategoryId;

      return {
        ...state,
        currentProjectId,
        currentCategoryId,
        startTimer,
      };

    case types.STOP_TIMER: 
      stopTimer = Date.now();
      currentProjectId=  action.payload.currentProjectId;
      currentCategoryId = action.payload.currentCategoryId;
      lastInterval = startTimer - stopTimer; 
      startTimer = 0          

      return {
        ...state,
        currentProjectId,
        currentCategoryId,
        startTimer,
        stopTimer,
        lastInterval,
      };

    case types.ADD_PROJECT:

  }

}