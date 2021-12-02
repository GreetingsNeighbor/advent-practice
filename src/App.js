import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Problem from "./problems/containers/Problem";
import ProblemSolution from "./problems/containers/ProblemSolution";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<h1>base</h1>} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/problem/:problemId" element={<ProblemSolution/>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
      </Routes>
    </Fragment>
  );
}

export default App;
