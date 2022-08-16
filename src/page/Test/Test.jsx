import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TestResult from "../../component/TestResult/TestResult.jsx";
import { TestWrapper } from "../../component/TestWrapper/TestWrapper.jsx";
const Test = () => {
  const word = useSelector((state) => state.word.wordList);
  const [testView, setTestView] = useState(false);
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState();

  useEffect(() => {
    setQuestions({
      title: word[Math.floor(Math.random() * (word.length - 1)) + 0].word,
      variation() {
        let array = new Array(4);
        for (let i = 0; i < array.length; ) {
          let randowWord =
            word[Math.floor(Math.random() * (word.length - 1)) + 0].translation;
          if (!array.includes(randowWord)) {
            array[i] = randowWord;
            i++;
          }
        }
        if (
          !array.includes(
            word.find((word) => word.word === this.title).translation
          )
        ) {
          array[Math.floor(Math.random() * (array.length - 1)) + 0] = word.find(
            (word) => word.word === this.title
          ).translation;
        }
        return array;
      },
      correctly() {
        return this.variation().find(
          (index) =>
            index === word.find((word) => word.word === this.title).translation
        );
      },
    });
  }, [step]);

  return (
    <>
      {word.length >= 10 ? (
        !testView ? (
          <>
            <TestResult />
            <button
              className="bg-blue-300 text-white uppercase w-1/6 mt-2 py-3 hover:bg-sky-700 rounded-md"
              onClick={() => setTestView(!testView)}
            >
              Почати тест
            </button>
          </>
        ) : (
          <TestWrapper
            setTestView={setTestView}
            questions={questions}
            setStep={setStep}
            step={step}
          />
        )
      ) : (
        <h1>Ви вичили не достатньо слів для тестування</h1>
      )}
    </>
  );
};

export default Test;
