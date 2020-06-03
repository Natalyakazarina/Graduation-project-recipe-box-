import { call, put, takeLatest, all } from "redux-saga/effects";

import localStorageService from "../services/localStorageService";

function* fetchRecipes() {
  try {
    let recipes = yield call(localStorageService.get);
    yield put({
      type: "RECIPES/FETCH_RECIPES_SUCCESSFULLY",
      payload: { recipes },
    });
  } catch ({ message }) {
    console.error(message);
    yield put({ type: "RECIPES/FETCH_RECIPES_ERROR", payload: { message } });
  }
}

function* addRecipe(action) {
  let currentRecipe = yield call(
    localStorageService.save,
    action.payload.params
  );
  yield put({
    type: "RECIPES/ADDED_NEW_RECIPE_SUCCESSFULLY",
    payload: action.payload.params,
  });
}

function* fetchRecipeData(action) {
  try {
    let recipeData = yield call(localStorageService.getData);
    yield put({
      type: "RECIPES/FETCH_RECIPE_DATA_SUCCESSFULLY",
      payload: { recipeData },
    });
  } catch ({ message }) {
    console.error(message);
    yield put({
      type: "RECIPES/FETCH_RECIPE_DATA_ERROR",
      payload: { message },
    });
  }
}

function* fetchRecipesSaga() {
  yield takeLatest("RECIPES/FETCH_RECIPES", fetchRecipes);
}

function* addRecipeSaga() {
  yield takeLatest("RECIPES/ADDED_NEW_RECIPE", addRecipe);
}

function* fetchRecipeDataSaga() {
  yield takeLatest("RECIPES/FETCH_RECIPE_DATA", fetchRecipeData);
}

export default function* recipesSaga() {
  yield all([fetchRecipesSaga(), addRecipeSaga(), fetchRecipeDataSaga()]);
}
