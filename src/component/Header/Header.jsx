import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {
    const word = useSelector((state) => state.word.wordList);
  return (
    <header className="bg-black p-5 flex justify-between items-center">
      <Link to="/">
        <span className="text-2xl uppercase text-white">Translator</span>
      </Link>
      <nav>
        <Link to="/libery">
          <span className="text-base text-white underline">Словник</span>
        </Link>

          {
              word.length >= 10 && <Link to="/test" className="ml-8 bg-blue-300 p-2 rounded-md">
                  <span className="text-base text-black uppercase">Тестування</span>
              </Link>
          }
      </nav>
    </header>
  );
};

export default Header;
