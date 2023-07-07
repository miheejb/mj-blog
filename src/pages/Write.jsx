import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
      </div>
      <div className="menu">
        <div className="item">i1</div>
        <div className="item">i2</div>
      </div>
    </div>
  );
};

export default Write;
