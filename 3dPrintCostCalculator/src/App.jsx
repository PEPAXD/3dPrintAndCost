import React, { useState } from "react";
import "./App.css";

//Components
import Add3DFiles from "./components/Add3DFiles";
import ViewStl from "./components/ViewStl";

export default function App() {

  const [fileName, setFileName] = useState("NameFileSTL");
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileSelect = (name) => {
    setFileName(name);
    setFileSelected(true);
  };

  return (
    <div>
      {!fileSelected && <Add3DFiles onFileSelect={handleFileSelect} />}
      {fileSelected && <ViewStl NameFileSTL={fileName} />}
    </div>
  );
}
