// import { useState } from "react";
// import axios from "axios";
import "./FileUpload.css";
const FileUpload = ({ contract, account }) => {

  const retrieveFile = (event) => {
    const data = event.target.files
  }

  return (
    <div className="top">
      <form className="form">
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: Nothing</span>
        <button type="submit" className="upload" >
          Upload File
        </button>
      </form>
    </div>
  );
};
export default FileUpload;