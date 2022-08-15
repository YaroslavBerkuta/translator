import React from 'react';
import {useSelector} from "react-redux";
const TestItem = () => {
    const test = useSelector(state => state.test.testList)
    return (
        <>
            <h3 className="text-3xl font-bold">Результати тестування:</h3>
            {test.length && <div>
                {test.map((item,index)=><div className="flex justify-between w-1/3 mt-10 bg-blue-300 px-5 py-5 rounded-md" key={index}>
                    <div><p className="text-base">Ваш результат: {item.score}</p></div>
                    <div><p className="text-base">Ви проходили тестування: {item.date}</p></div>
                </div>)}
            </div>
            }
            <button className="bg-blue-300 text-white uppercase w-1/6 mt-2 py-3 hover:bg-sky-700 rounded-md">Почати тест</button>
        </>
    );
};

export default TestItem;