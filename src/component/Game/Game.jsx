import React from "react";

export const Game = ({ question, onClickVariant }) => {
  return (
    <div>
      <h2 className="text-center bg-blue-300 text-2xl py-2 w-1/2 mx-auto">Перекладіть слово "{question.title}"</h2>
      <ul className="mx-auto w-1/2 mt-3">
        {question.variation().map((item, index) => (
          <li className="border-2 text-2xl px-5 py-2 mb-5 cursor-pointer hover:bg-blue-300" key={index} onClick={() => onClickVariant(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
