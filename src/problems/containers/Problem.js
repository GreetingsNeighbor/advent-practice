import React from "react";
import { useParams } from "react-router";
import ProblemList from "../components/ProblemList";
// import classes from './Problem.module.css';

const DUMMY_PROBLEMS = [
  { id: 1, title: "Problem 1: Sonar Sweep", date: "12/1/2021" },
  { id: 2, title: "Problem 2", date: "12/2/2021" },
  { id: 3, title: "Problem 3", date: "12/3/2021" },
  { id: 4, title: "Problem 4", date: "12/4/2021" },
  { id: 5, title: "Problem 5", date: "12/5/2021" },
  { id: 6, title: "Problem 6", date: "12/6/2021" },
  { id: 7, title: "Problem 7", date: "12/7/2021" },
  { id: 8, title: "Problem 8", date: "12/8/2021" },
  { id: 9, title: "Problem 9", date: "12/9/2021" },
  { id: 10, title: "Problem 10", date: "12/9/2021" },
  { id: 11, title: "Problem 11", date: "12/9/2021" },
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
