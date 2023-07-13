import React from "react";
import { data } from "../../../data";
import { styles } from "./useQuestionsStyles";
import { QuestionsContanier } from "../QuestionsContanier/QuestionsContanier";
import { useState } from "react";

export const Questions = () => {
  const [activeStep, setActiveStep] = useState(null);
  const handleClick = (step) => {
    setActiveStep((prevStep) => (prevStep === step ? null : step));
  };
  const classes = styles();

  return (
    <div className={classes.QuestionsMainWrapper}>
      <div className={classes.QuestionsMainWrapperTop}>
        <h1 className={classes.QuestionsMainWrapperTopHead}>
          {data.questions.mainHead}
        </h1>
        <p className={classes.QuestionsMainWrapperTopBody}>
          {data.questions.mainBody}
        </p>
      </div>
      <div className={classes.QuestionsMainWrapperBottom}>
        <QuestionsContanier
          isOpen={activeStep === 1}
          onClick={() => handleClick(1)}
          head={data.questions.head1}
          body={data.questions.body1}
        />
        <QuestionsContanier
          isOpen={activeStep === 2}
          onClick={() => handleClick(2)}
          head={data.questions.head2}
          body={data.questions.body2}
        />
        <QuestionsContanier
          isOpen={activeStep === 3}
          onClick={() => handleClick(3)}
          head={data.questions.head3}
          body={data.questions.body3}
        />
        <QuestionsContanier
          isOpen={activeStep === 4}
          onClick={() => handleClick(4)}
          head={data.questions.head4}
          body={data.questions.body4}
        />
        <QuestionsContanier
          isOpen={activeStep === 5}
          onClick={() => handleClick(5)}
          head={data.questions.head5}
          body={data.questions.body5}
        />
        <QuestionsContanier
          isOpen={activeStep === 6}
          onClick={() => handleClick(6)}
          head={data.questions.head6}
          body={data.questions.body6}
        />
        <QuestionsContanier
          isOpen={activeStep === 7}
          onClick={() => handleClick(7)}
          head={data.questions.head7}
          body={data.questions.body7}
        />
        <QuestionsContanier
          isOpen={activeStep === 8}
          onClick={() => handleClick(8)}
          head={data.questions.head8}
          body={data.questions.body8}
        />
        <QuestionsContanier
          isOpen={activeStep === 9}
          onClick={() => handleClick(9)}
          head={data.questions.head9}
          body={data.questions.body9}
        />
        <QuestionsContanier
          isOpen={activeStep === 10}
          onClick={() => handleClick(10)}
          head={data.questions.head10}
          body={data.questions.body10}
        />
      </div>
    </div>
  );
};
