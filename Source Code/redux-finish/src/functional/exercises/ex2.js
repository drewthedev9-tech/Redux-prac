const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
};

// Add an ingredient
const added = {
  ...recipe,
  // copies the recipe.ingredients , then usig sread operator
  // adds
  ingredients: [...recipe.ingredients, "cream"]
};

// Update an ingredient, rplac egg with egg white othrwise do nthing
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient =>
    ingredient === "egg" ? "egg white" : ingredient
  )
};

// Remove an ingredient
// retunr everything that isnt egg
const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};
