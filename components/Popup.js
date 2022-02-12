import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faClose } from "@fortawesome/free-solid-svg-icons";

const Popup = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setShowModel(!showModel);
        }}
        className={`overlay ${showModel ? "show" : "hidden"}`}
      >
        <form
          onClick={(e) => e.stopPropagation()}
          className="sm:basis-2/3 md:basis-1/3 sm:p-2 lg:p-10"
        >
          <div className="mb-8 flex justify-between">
            <h1>Process to Resell</h1>
            <FontAwesomeIcon
              onClick={() => {
                setShowModel(!showModel);
              }}
              className="close-button button-primary-hover"
              width={10}
              icon={faClose}
            />
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_text"
              class="absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="mb-6">
            <div className="price-container">
              <input
                placeholder="New Price"
                type="number"
                id="price"
                className="bg-primary-light price-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="eth flex justify-between">
                <span>ETH</span> <img className="px-2" src="./vector.png" />
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              setShowModel(!showModel);
            }}
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button-primary button-primary-hover font-normal"
          >
            Resell
          </button>
        </form>
      </div>
      <button
        onClick={() => {
          setShowModel(!showModel);
        }}
      >
        show
      </button>
    </>
  );
};

export default Popup;