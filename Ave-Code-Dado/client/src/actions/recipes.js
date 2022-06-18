import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = (Recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(Recipe);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRecipe = (id, Recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, Recipe);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeRecipe(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await api.deleteRecipe(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
