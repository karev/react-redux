const apiDomain = "http://api.com";

export function getAllRecipes() {
  return fetch(`${apiDomain}/recipes`);
}

export function createRecipe(recipe) {
  const data = new FormData();
  const options = {
    method: 'POST',
    body: JSON.stringify(recipe)
  };
  return fetch(`${apiDomain}/recipes`, options);
}
