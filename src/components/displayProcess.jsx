import { useContext, useEffect, useState } from "react";
import { context } from "../store/store";

export default function DisplayRecipies() {
  let { recepie } = useContext(context);
  const [loaded, setLoaded] = useState(false);
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    if (recepie !== null && recepie !== undefined) {
      setLoaded(true);
      setRecipes(recepie);
    }
  }, [recepie]);

  console.log(recepie);

  return (
    <>
      {loaded === false ? (
        <h1>Loading...</h1>
      ) : (
        <center>{recipes.title}</center>
      )}
    </>
  );
}
