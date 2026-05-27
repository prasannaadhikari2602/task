import React from "react";
import { RouterProvider } from "react-router-dom";
import Mainroutes from "./routes/Mainroutes";
const App = () => {
  return (
    <div className="">
      <RouterProvider router={Mainroutes} />
    </div>
  );
};

export default App;
