import React from "react";
import { useDispatch } from "react-redux";
export const Result = ({ corect, setTestView }) => {
  const dispatch = useDispatch();
  const addResult = () => {
    dispatch({
      type: "ADD_TEST",
      payload: { score: `${corect}%`, date: new Date().toLocaleDateString() },
    });
    setTestView(false);
  };
  return (
    <>
      <div>Ви відгадали {corect}% слів</div>
      <button
        className="bg-blue-300 text-white uppercase w-1/6 mt-2 py-3 hover:bg-sky-700 rounded-md"
        onClick={() => addResult()}
      >
        Повернутися назад
      </button>
    </>
  );
};
