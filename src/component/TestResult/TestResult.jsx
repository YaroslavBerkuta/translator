import React from "react";
import { useSelector } from "react-redux";
const TestResult = () => {
  const test = useSelector((state) => state.test.testList);
  return (
    <>
      <h3 className="text-3xl font-bold">Результати тестування:</h3>
      {test.length > 0 && (
        <div>
          {test.map((item, index) => (
            <div
              className="flex justify-between w-1/3 mt-10 bg-blue-300 px-5 py-5 rounded-md"
              key={index}
            >
              <div>
                <p className="text-base">Ваш результат: {item.score}</p>
              </div>
              <div>
                <p className="text-base">
                  Ви проходили тестування: {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TestResult;
