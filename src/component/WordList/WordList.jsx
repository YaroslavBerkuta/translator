import React from 'react';
import {useSelector} from "react-redux";

const WordList = () => {

    const word = useSelector(state => state.word.wordList)

    return (
       <>
           <table className="mx-auto w-1/4">
               <thead>
                   <tr className="bg-blue-300">
                       <td className="text-center text-2xl uppercase border-4">English</td>
                       <td className="text-center text-2xl uppercase border-4">Український</td>
                   </tr>
               </thead>
               <tbody>
               {
                   word.map((item,index)=>
                       <tr key={index}>
                           <td className="text-center border-4 text-lg">{item.word}</td>
                           <td className="text-center border-4 text-lg">{item.translation}</td>
                       </tr>
                   )
               }
               </tbody>

           </table>

       </>
    );
};

export default WordList;