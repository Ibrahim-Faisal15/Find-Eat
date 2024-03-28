import { useContext, useState, useEffect } from "react";
import { context } from "../store/store";

export default function Recipes() {
  const [loaded, setLoaded] = useState(false);
  const [recipes, setRecipes] = useState();
  const { recepiesID } = useContext(context);

  useEffect(() => {
    if (recepiesID !== null) {
      setRecipes(recepiesID);
      setLoaded(true);
      console.log(recepiesID);
    }
  }, [recepiesID]);

  return (
    <div className="flex flex-wrap justify-start items-start mt-5 ml-[3rem] ">
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
                class="card"
                style={{
                  border: "2px solid",
                  width: "15rem",
                  marginBottom: "2rem",
                  marginLeft: "1rem",
                  cursor: "pointer",
                }}
                key={recipe.id}
              >
                <img src={recipe.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">{recipe.title}</p>
                </div>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}
