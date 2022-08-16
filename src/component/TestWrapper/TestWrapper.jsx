import React, { useState } from "react";
import { Game } from "../Game/Game";
import { Result } from "../Result/Result";

export const TestWrapper = ({ setTestView, questions, setStep, step }) => {
  const [corect, setCorect] = useState(0);
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === questions.correctly()) {
      setCorect(corect + 1);
    }
  };
  return (
    <>
      {step <= 9 ? (
        <Game question={questions} onClickVariant={onClickVariant} />
      ) : (
        <Result corect={(corect / 10) * 100} setTestView={setTestView} />
      )}
    </>
  );
};
