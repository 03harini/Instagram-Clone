import React, { useState } from "react";

function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) {
      alert("Please select an image to upload!");
      return;
    }
    console.log("Uploading:", file.name, caption);
    alert(`Uploaded ${file.name} with caption: ${caption}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Post</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block"
      />

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="mb-4 w-64 h-64 object-cover rounded-lg"
        />
      )}

      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="border rounded-md w-full p-2"
      ></textarea>

      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
}

export default Create;
