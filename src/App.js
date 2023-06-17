import React from "react";
import Tree from "./components/tree";
import Floor from "./components/floor";
import Basket from "./components/basket";

const App = () => {
  return (
    <div className="bg-gray-700 relative h-screen">
      <div className="">
        <Tree />
      </div>
      <div className="absolute bottom-5 z-30 text-6xl">
        <Floor />
      </div>
      <div className="absolute bottom-5 left-[50rem] z-30 text-6xl">
        <Basket />
      </div>
    </div>
  );
};

export default App;
