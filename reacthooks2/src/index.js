import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from './useLocation';

const App = () => {
  const [enl, hataMsj] = useLocation();

  let content;
  if (hataMsj) {
    content = <div>Hata: {hataMsj}</div>
  } else if (enl) {
    content = <SeasonDisplay enlem={enl} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
}


ReactDOM.render(<App />, document.querySelector("#root"));
