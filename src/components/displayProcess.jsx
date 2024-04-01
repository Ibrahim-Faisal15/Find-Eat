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
        <div>
          <div className="flex justify-center mt-4">
            <h3 className="capitalize font-bold">{recipes.title}</h3>
            <h3 className="ml-2 font-bold">{`(${recepie.readyInMinutes} Min)`}</h3>
          </div>
          <div
            className="card float-right mt-[5rem]"
            style={{ width: "18rem" }}
          >
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-footer">Card footer</div>
          </div>
          <div>
            <p>{recepie.summary}</p>
          </div>
          <div>
            <img src={recepie.image} alt="" />
          </div>
          <div>
            <p>{recepie.instructions}</p>
          </div>
        </div>
      )}
    </>
  );
}
