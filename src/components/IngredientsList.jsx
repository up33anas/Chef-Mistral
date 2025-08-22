// IngredientsList.jsx
export default function IngredientsList({
  ref,
  ingredients,
  getRecipe,
  showRecipe,
}) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>
            {" "}
            {showRecipe ? "Hide Recipe" : "Get a Recipe"}
          </button>
        </div>
      )}
    </section>
  );
}
