import { createContext, useState } from "react";

export const context = createContext({
  fetchRecepies: () => {},
  displayIngredienets: () => {},
  recepiesID: null,
});

export function ContextProvider({ children }) {
  const [recepiesNames, setRecepiesNames] = useState(null);
  const fetchRecepies = async (food) => {
    const Key = "a1635a107033410492fc8ab6f364630c";

    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${food}&apiKey=${Key}`
    );

    let responseJSON = await response.json();
    let results = await responseJSON.results;
    setRecepiesNames(results);
  };

  const displayIngredienets = async (id) => {
    console.log("Id of the product is: " + id);
    let recipe_response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=a1635a107033410492fc8ab6f364630c`
    );
    let recipe_responseJSON = await recipe_response.json();
    console.log(recipe_responseJSON);
  };

  return (
    <context.Provider
      value={{
        fetchRecepies,
        displayIngredienets,
        recepiesNames,
      }}
    >
      {children}
    </context.Provider>
  );
}
