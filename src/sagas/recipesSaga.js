import { call, put, takeLatest, all } from "redux-saga/effects";

import localStorageService from "../services/localStorageService";

function* fetchRecipes() {
  try {
    let recipes = yield call(localStorageService.getItems);
    yield put({
      type: "RECIPES/LOCAL_STORAGE_SUCCESSFULLY",
      payload: { recipes },
    });
  } catch ({ message }) {
    yield put({ type: "RECIPES/LOCAL_STORAGE_ERROR", payload: { message } });
  }
}

function* addRecipe(action) {
  let currentRecipe = yield call(localStorageService.save, action.payload.params);
  yield put({
    type: "RECIPES/ADDED_NEW_RECIPE_SUCCESSFULLY",
    payload: action.payload.params ,
  });
}

function* fetchRecipesSaga() {
  yield takeLatest("RECIPES/FETCH_RECIPES", fetchRecipes);
}

function* addRecipeSaga() {
  yield takeLatest("RECIPES/ADDED_NEW_RECIPE", addRecipe);
}

export default function* recipesSaga() {
  yield all([fetchRecipesSaga(), addRecipeSaga()]);
}
