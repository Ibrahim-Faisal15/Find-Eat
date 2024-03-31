import { useContext, useRef } from "react";
import { context } from "../store/store";

export default function Searach({ active }) {
  let value = useRef();
  const { fetchRecepies } = useContext(context);
  const handleRecepieData = (e) => {
    let currVal = value.current.value;
    e.preventDefault();
    fetchRecepies(currVal);
    active("Recepies");
  };

  return (
    <>
      <section className=" z-10 absolute top-0 text-gray-600 body-font border-1 border-black h-[60vh] w-[100vw] flex bg-black">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-white">
              <div className="mb-1">Searach your favourite</div>
              <span> recepies.</span>
            </h1>

            <form
              class="flex w-full justify-center items-end"
              onSubmit={handleRecepieData}
            >
              <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  ref={value}
                  class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-[white] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
