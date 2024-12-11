// src/components/EventModal.js
import React, { useState } from "react";
import Dropzone from "react-dropzone";

const EventModal = ({ isOpen, onClose, onSave, selectedDate }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  const handleSave = () => {
    onSave({ date: selectedDate, text, images });
    setText("");
    setImages([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: "center", background: "black", padding: "20px", border: "1px solid black" }}>
      <h3>Memories On {selectedDate.toDateString()}</h3>
      <textarea
        placeholder="Add text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: "100px", marginBottom: "10px" }}
      />
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #ccc",
              padding: "10px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <input {...getInputProps()} />
            <p>Drag & drop images here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        {images.map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EventModal;
