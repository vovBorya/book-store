import React from "react";
import './error-indicator.css';
import icon from './old-book.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      {/*<img src={icon} alt="Error icon"/>*/}
      <span className="ooops">Ooops! Sorry... </span>
      <span>
        Something has gone terribly wrong
      </span>
      <span>
        (but we have already sent info about error to fix it)
      </span>
    </div>
  )
}

export default ErrorIndicator;