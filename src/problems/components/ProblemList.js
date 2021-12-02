import React from "react";
import ProblemItem from "./ProblemItem";
import classes from "./ProblemList.module.css";

const DUMMY_PROBLEMS = [
  { id: 1, title: "Problem 1: Sonar Sweep", date: "12/1/2021" },
  { id: 2, title: "Problem 2", date: "12/2/2021" },
];
const ProblemsList = () => {
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
