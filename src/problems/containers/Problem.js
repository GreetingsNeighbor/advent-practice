import React from "react";
import { useParams } from "react-router";
import ProblemList from "../components/ProblemList";
// import classes from './Problem.module.css';

const DUMMY_PROBLEMS = [
  { id: 1, title: "Problem 1: Sonar Sweep", date: "12/1/2021" },
  { id: 2, title: "Problem 2", date: "12/2/2021" },
  { id: 3, title: "Problem 3", date: "12/2/2021" },
];
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
    return  <ProblemList problemList={DUMMY_PROBLEMS}/>;
  }

  return { renderExists };
};

export default Problem;
