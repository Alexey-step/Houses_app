import * as React from "react";

import "./error.scss";

const Error: React.FC = () => {

  return (
    <div className="error">
      <p data-testid="Error">Что то пошло не так!</p>
    </div>
  );
};

export default Error;
