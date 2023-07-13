import React from "react";
import { data } from "../../../data";
import { styles } from "./useQuestionsContanierStyles";

export const QuestionsContanier = ({ head, body, isOpen, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  const classes = styles();
  
  return (
    <div
      className={classes.QuestionsContanierMainWrapper}
      onClick={handleClick}
    >
      <div className={classes.QuestionsContanierMainTextWrapper}>
        <h1 className={classes.QuestionsContanierMainWrapperHead}>{head}</h1>
        <img
          className={classes.QuestionsContanierMainWrapperImg}
          src={
            isOpen
              ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/negative+(2).svg"
              : "https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/positive+(2).svg"
          }
          alt="positive"
        />
      </div>
      {isOpen && (
        <div className={classes.QuestionsContanierMainTextWrapperLower}>
          <p className={classes.QuestionsContanierMainTextWrapperBody}>
            {body}
          </p>
        </div>
      )}
    </div>
  );
};
