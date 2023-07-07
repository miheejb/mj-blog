import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="" />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" name="cat" value="science" id="science" />
          <label htmlFor="science">Science</label>
          <input type="radio" name="cat" value="technology" id="technology" />
          <label htmlFor="technology">Technology</label>
          <input type="radio" name="cat" value="cinema" id="cinema" />
          <label htmlFor="cinema">Cinema</label>
          <input type="radio" name="cat" value="design" id="design" />
          <label htmlFor="design">Design</label>
          <input type="radio" name="cat" value="food" id="food" />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
