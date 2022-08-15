import React from 'react';
import {useSelector} from "react-redux";
import TestItem from "../../component/TestItem/TestItem";
const Test = () => {
    const word = useSelector(state => state.word.wordList)
    return (
        <>
            {word.length >= 10 ?
                <TestItem/>
                : <h1>Ви вичили не достатньо слів для тестування</h1>
            }
        </>
    );
};

export default Test;