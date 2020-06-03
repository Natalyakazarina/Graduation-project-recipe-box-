import update from "immutability-helper";

const initialState = {
  recipes: [
    {
      id: 1,
      name: "Beef Wellington",
      description: [
        "2 x 400g beef fillets",
        "Olive oil",
        "500g mixture of wild mushrooms",
        "1 thyme sprig, leaves only",
        "500g puff pastry",
        "8 slices of Parma ham",
        "2 egg yolks",
        "Sea salt and freshly ground black pepper",
      ],
    },
    {
      id: 2,
      name: "Cajun Chicken Pasta",
      description: [
        "4 ounces linguine pasta",
        "2 skinless boneless chicken breast halves",
        "2 teaspoons Cajun seasoning",
        "2 tablespoons butter",
        "1 red bell sliced pepper",
        "1 green bell sliced pepper",
        "4 fresh sliced mushrooms",
        "1 green chopped onion",
        "1 cup heavy cream",
        "¼ cup grated Parmesan cheese",
      ],
    },
  ],

  localStorageRecipesError: "",
  addSuccessfully: false,
  editId: null,
  isEditFormVisible: false,
  recipeData: null,
  fetchRecipeDataError: "",
  // recipeName: "",
  // recipeDescription: "",
};

function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case "RECIPES/FETCH_RECIPES_SUCCESSFULLY":
      return update(state, {
        $merge: {
          recipes: action.payload.recipes,
        },
      });

    case "RECIPES/FETCH_RECIPES_ERROR":
      return update(state, {
        $merge: {
          localStorageRecipesError: action.payload.message,
        },
      });

    case "RECIPES/RECIPE_REMOVE":
      const fromState = state.recipes.slice();
      let indexToRemove;
      fromState.forEach((recipe, index) => {
        if (recipe.id === action.payload.id) {
          indexToRemove = index;
        }
      });
      fromState.splice(indexToRemove, 1);
      return update(state, {
        $merge: {
          recipes: fromState,
        },
      });

    case "RECIPES/ALL_REMOVE":
      return update(state, {
        $set: {
          recipes: [],
        },
      });

    case "RECIPES/ADDED_NEW_RECIPE_SUCCESSFULLY":
      return update(state, {
        recipes: {
          $push: [action.payload],
        },
        $merge: {
          addSuccessfully: true,
        },
      });

    case "RECIPES/ADDED_NEW_RECIPE_ERROR":
      return update(state, {
        $merge: {
          createRecipeErrorMessage: action.payload.message,
        },
      });

    case "RECIPES/RESET_EDIT":
      return update(state, {
        $merge: {
          addSuccessfully: initialState.addSuccessfully,
        },
      });

    case "RECIPES/CLOSE_EDIT_FORM":
      return update(state, {
        $merge: {
          isEditFormVisible: false,
        },
      });

    case "RECIPES/OPEN_EDIT_FORM":
      return update(state, {
        $merge: {
          isEditFormVisible: true,
        },
      });

    case "RECIPES/EDIT_RECIPE":
      let editId = null;

      return update(state, {
        $merge: {
          editId: action.payload.id,
        },
      });

    case "RECIPES/FETCH_RECIPE_DATA_SUCCESSFULLY":
      const recipeData = action.payload;
      return update(state, {
        $merge: {
          recipeData,
        },
      });

    case "RECIPES/FETCH_RECIPE_DATA_ERROR":
      return update(state, {
        $merge: {
          fetchRecipeDataError: action.payload.message,
        },
      });

    default:
      return state;
  }
}

export default recipesReducer;
