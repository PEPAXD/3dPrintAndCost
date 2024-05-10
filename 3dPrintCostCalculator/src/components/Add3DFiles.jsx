import React from "react";

function Add3DFiles({ onFileSelect }) {

  const handleFileSelect = (event) => {
    onFileSelect(event.target.files[0].name);
  }


  return (
    <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h1 className="mb-2 text-black">View3D.stl</h1>
      <p className="mb-2 text-gray-500">Upload your 3D file here</p>
      <br />
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleFileSelect}
        className="border py-2 px-3 text-gray-700 leading-tight"
      />
    </div>
  );
}

export default Add3DFiles;
