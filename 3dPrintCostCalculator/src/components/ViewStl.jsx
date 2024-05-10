import React from "react";

function ViewStl({ NameFileSTL }) {

    console.log(NameFileSTL)

  return (
    <div className="fixed top-5 left-5 mt-2 ml-2">
      <h1 className="font-light border-b-2 border-solid border-gray-300">
        {NameFileSTL}
      </h1>
    </div>
  );
}

export default ViewStl;
