import { useContext, useEffect, useState } from "react";
import { context } from "../store/store";
import HtmlParser from "react-html-parser";

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
            <h3 className="capitalize font-bold underline">{recipes.title}</h3>
            <h3 className="ml-2 font-bold">{`(${recepie.readyInMinutes} Min)`}</h3>
          </div>

          <div className="card float-right mt-10" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item font-bold text-center ">
                Information
              </li>
              <li class="list-group-item">
                <b>Gluten Free : </b>
                {`${recepie.glutenFree}`}
              </li>
              <li class="list-group-item">
                {" "}
                <b>Health Score : </b>
                {`${recepie.healthScore}`}
              </li>
              <li class="list-group-item">
                {" "}
                <b>Sweetness : </b>
                {`${recepie.taste.sweetness}`}
              </li>
              <li class="list-group-item">
                {" "}
                <b>Saltiness : </b>
                {`${recepie.taste.saltiness}`}
              </li>
              <li class="list-group-item">
                {" "}
                <b>Vegetarian : </b>
                {`${recepie.vegetarian}`}
              </li>
              <li class="list-group-item">
                {" "}
                <b>Very Healthy : </b>
                {`${recepie.veryHealthy}`}
              </li>
            </ul>
          </div>
          <div className="mt-4 text-center ">
            <div className="text-center">
              <h1>Summary</h1>
            </div>
            <div className="text-xl ">
              <p className="no-underline">{HtmlParser(recepie.summary)}</p>
            </div>
          </div>

          <div className="flex justify-center ">
            <img className="w-[45rem]" src={recepie.image} alt="" />
          </div>
          <div>
            <div className="mt-10 text-center">
              <h1>Steps for Preps</h1>
            </div>
            <div className="text-xl">
              <p>{recepie.instructions}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
