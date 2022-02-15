import React from "react";

import { SignUp, Login } from "../components/Login/MainWindow";

const App = ({isSignUp}) => {

  return (
      <React.Fragment>
          {isSignUp ? <SignUp /> : <Login />}
      </React.Fragment>
  )
}

export default App;
