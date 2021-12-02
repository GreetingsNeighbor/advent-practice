import React  from "react";
import { useParams  } from "react-router-dom";
import Problem1 from "./Problem1";

// import classes from './ProblemSolution.module.css';

const ProblemSolution = () => {
  const params = useParams();
  const problemNumber = params.problemId;

  return (
    (problemNumber === "1" ?<Problem1 />:<h2>No Problem</h2>)
  );
};

export default ProblemSolution;
