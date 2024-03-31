import { useState } from "react";
import "./App.css";
import Recipes from "./components/displayRecipies";
import Search from "./components/search";
import DisplayRecipies from "./components/displayProcess";
import { ContextProvider } from "./store/store";

function App() {
  let [active, setActive] = useState("Search");

  return (
    <>
      <ContextProvider>
        {active === "Search" && <Search active={setActive} />}
        {active === "Recepies" && <Recipes active={setActive} />}
        {active === "displayRecipies" && <DisplayRecipies />}
      </ContextProvider>
    </>
  );
}

export default App;
