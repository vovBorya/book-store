import React from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const App = () => {
  return (
    <div>
      <Spinner />
      <ErrorIndicator />
    </div>
  )
}

export default App