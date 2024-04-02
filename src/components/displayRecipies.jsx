import { useContext, useState, useEffect, useRef } from "react";
import { context } from "../store/store";

export default function Recipes({ active }) {
  const [loaded, setLoaded] = useState(false);
  const [recipes, setRecipes] = useState();
  let recepieid = useRef();
  const { recepiesNames, displayIngredienets } = useContext(context);
  // let ID = useRef();

  useEffect(() => {
    if (recepiesNames !== null) {
      setRecipes(recepiesNames);
      setLoaded(true);
      console.log(recepiesNames);
    }
  }, [recepiesNames]);

  const handleFetchRecepies = (id) => {
    displayIngredienets(id);
    active("displayRecipies");
  };

  return (
    <div className="flex flex-wrap justify-start `items-start mt-5 ml-[3rem] ">
      {loaded === false ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <img src="../src/assets/Spinner.svg" className=""></img>
        </div>
      ) : (
        loaded && (
          <>
            {recipes.map((recipe) => (
              <div
                onClick={() => handleFetchRecepies(recipe.id)}
                class="card"
                recepieid={recipe.id}
                style={{
                  border: "2px solid",
                  width: "15rem",
                  marginBottom: "2rem",
                  marginLeft: "0.7rem",
                  cursor: "pointer",
                }}
                key={recipe.id}
              >
                <img src={recipe.image} class="card-img-top  " alt="..." />
                <div class="card-body">
                  <p class="card-text font-bold h-11">{recipe.title}</p>
                </div>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}
