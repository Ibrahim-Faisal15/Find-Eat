import { useState } from "react";
import "./App.css";
import Recipes from "./components/displayRecipies";
import Search from "./components/search";
import { ContextProvider } from "./store/store";

function App() {
  let [clear, setClear] = useState();
  return (
    <>
      <ContextProvider>
        <Search />
        <Recipes></Recipes>
      </ContextProvider>
    </>
  );
}

// Next task it to implement the api key

export default App;

// <div className="m-0 p-0 h-[60dvh] w-[100vw]">
//   <img
//     className="w-[100vw] h-[60vh] absolute"
//     src="https://rare-gallery.com/uploads/posts/870815-Fast-food-Hamburger-Buns-Tomatoes-French-fries.jpg"
//     style={{ filter: "blur(2px)" }}
//   />\
// </div>
