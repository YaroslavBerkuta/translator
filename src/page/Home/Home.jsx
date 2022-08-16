import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const [word, setWord] = useState({
    name: "",
    translate: "",
  });
  const dispatch = useDispatch();
  const addWord = () => {
    dispatch({ type: "ADD_WORDS", payload: word });
    setWord({ ...word, name: "", translate: "" });
  };
  return (
    <div className="flex items-center flex-col justify-center w-1/2 mx-auto">
      <input
        type="text"
        value={word.name}
        className="border-4 px-4 py-2 mb-2 w-full"
        placeholder="слово на англійській"
        onChange={(e) => setWord({ ...word, name: e.target.value })}
      />
      <input
        type="text"
        value={word.translate}
        className="border-4 px-4 py-2 w-full"
        placeholder="переклад"
        onChange={(e) => setWord({ ...word, translate: e.target.value })}
      />
      <button
        className="bg-blue-300 text-white uppercase w-1/3  mt-2 py-3 hover:bg-sky-700 rounded-md"
        onClick={() => addWord()}
      >
        Додати
      </button>
    </div>
  );
};
export default Home;
