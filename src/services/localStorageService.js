const DATA_KEY = "DATA_KEY";

class RecipesService {
  save(data) {
    const recipes = this.get();

    recipes.push({ id: recipes.length, ...data });

    window.localStorage.setItem(DATA_KEY, JSON.stringify(recipes));
  }

  get() {
    const dataRaw = window.localStorage.getItem(DATA_KEY);

    let recipes = [];

    if (dataRaw) {
      recipes = JSON.parse(dataRaw);
    }

    return recipes;
  }
}

export default new RecipesService();
