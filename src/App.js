// import React from "react";

import Restaurant from "./component/Basics/Restaurant";
const myStyle = {
  fontFamily: "Cormorant Garamond",
  fontSize: "60px",
  fontWeight: "300",
  lineHeight: "60px",
  margin: "10px",
  textTransform: "capitalize",
  textAlign: "center"
}
function App() {
  return (
    <>

      <h1 style={myStyle}>Restaurant App</h1>

      <Restaurant />

    </>
  );
}

export default App;
