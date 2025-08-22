import React from "react";
import IngredientsList from "./IngredientsList";
import AIRecipe from "./AIRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [showRecipe, setShowRecipe] = React.useState(false);
  const [error, setError] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim().toLowerCase();

    if (!newIngredient) {
      setError("Please add a valid ingredient!");
      return;
    }

    if (ingredients.some((item) => item.toLowerCase() === newIngredient)) {
      setError("This ingredient is already in your list!");
      return;
    }

    setIngredients((prev) => [...prev, newIngredient]);
    setError("");
    event.currentTarget.reset();
  }

  async function getRecipe() {
    if (showRecipe) {
      setShowRecipe(false);
      return;
    }

    setRecipe("Preparing your recipe... Please wait!");
    setShowRecipe(true);

    try {
      const response = await getRecipeFromMistral(ingredients);
      setRecipe(response);
    } catch (err) {
      setRecipe("Sorry, something went wrong while preparing your recipe.");
      console.error(err);
    }
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          autoFocus
          autoComplete="off"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          showRecipe={showRecipe}
        />
      )}

      {showRecipe && <AIRecipe recipe={recipe} />}
    </main>
  );
}
