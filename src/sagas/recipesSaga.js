import { call, put, takeLatest, all } from "redux-saga/effects";

import localStorageService from "../services/localStorageService";

function* fetchRecipes() {
  let recipes = yield call(localStorageService.getItems);
  yield put({ type: "RECIPES/FETCH_SUCCESSFULLY", payload: { recipes } });
}

function* addRecipe() {
  let currentRecipes = yield call(localStorageService.save);
  yield put({
    type: "RECIPES/ADDED_NEW_RECIPE_SUCCESSFULLY",
    payload: { currentRecipes },
  });
}

function* fetchRecipesSaga() {
  yield takeLatest("RECIPES/FETCH", fetchRecipes);
}

function* addRecipeSaga() {
  yield takeLatest("RECIPES/ADDED_NEW_RECIPE", addRecipe);
}

export default function* recipesSaga() {
  yield all([fetchRecipesSaga(), addRecipeSaga()]);
}
