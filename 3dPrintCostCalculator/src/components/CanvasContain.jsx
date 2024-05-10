import React from "react";
import "./Styles/canvasContain.css";

function CanvasContain() {
  return (
    <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h1 className="mb-2 text-black">View3D.stl</h1>
      <p className="mb-2 text-gray-500">Upload your 3D file here</p>
      <br />
      <input
        type="file"
        id="file"
        name="file"
        className="border py-2 px-3 text-gray-700 leading-tight"
      />
    </div>
  );
}

export default CanvasContain;
