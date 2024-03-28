import { createContext, useState } from "react";

export const context = createContext({
  fetchRecepies: () => {},
  recepiesID: null,
});

export function ContextProvider({ children }) {
  const [recepiesID, setRecepiesID] = useState(null);
  const fetchRecepies = async (food) => {
    const Key = "a1635a107033410492fc8ab6f364630c";
    const Id = "22ecdd23";

    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${food}&apiKey=${Key}`
    );

    let responseJSON = await response.json();
    let results = await responseJSON.results;
    setRecepiesID(results);

  };

  return (
    <context.Provider
      value={{
        fetchRecepies,
        recepiesID,
      }}
    >
      {children}
    </context.Provider>
  );
}
