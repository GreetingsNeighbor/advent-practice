import React from "react";
import { useParams } from "react-router";
import ProblemList from "../components/ProblemList";
// import classes from './Problem.module.css';
const Problem = () => {
  const params = useParams();
  const problemNumber = params.problemId;
  const problemExists = !!problemNumber;
  const renderExists = (
    <div>
      <h1>Problem:  {problemNumber}</h1>
     
    </div>
  );

  if (!problemExists) {
    return  <ProblemList />;
  }

  return { renderExists };
};

export default Problem;
