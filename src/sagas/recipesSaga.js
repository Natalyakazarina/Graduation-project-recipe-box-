import { call, put, takeLatest, all } from "redux-saga/effects";

import localStorageService from "../services/localStorageService";

function* localStorageRecipes() {
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

function* addRecipe() {
  let currentRecipe = yield call(localStorageService.save);
  yield put({
    type: "RECIPES/ADDED_NEW_RECIPE_SUCCESSFULLY",
    payload: { currentRecipe },
  });
}

function* localStorageRecipesSaga() {
  yield takeLatest("RECIPES/LOCAL_STORAGE", localStorage);
}

function* addRecipeSaga() {
  yield takeLatest("RECIPES/ADDED_NEW_RECIPE", addRecipe);
}

export default function* recipesSaga() {
  yield all([localStorageRecipesSaga(), addRecipeSaga()]);
}
