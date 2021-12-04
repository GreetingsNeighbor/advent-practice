import React from "react";
import ProblemItem from "./ProblemItem";
import classes from "./ProblemList.module.css";


const ProblemsList = (props) => {
  const DUMMY_PROBLEMS = props.problemList;
  return (

      <ul className={classes.ProblemList}>
        {DUMMY_PROBLEMS.map((problem) => (
          <ProblemItem
            key={problem.id}
            id={problem.id}
            title={problem.title}
            date={problem.date}
          />
        ))}
      </ul>
  );
};

export default ProblemsList;
