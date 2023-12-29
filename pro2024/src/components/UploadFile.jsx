import React, { useRef, useState } from "react";

function UploadFile() {
  const fileInputRef = useRef();
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleUpload = () => {
    // Trigger the file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Implement your file upload logic here
      console.log(`Uploading file: ${file.name}`);
      setUploadedFileName(file.name); // Set the uploaded file name
    } else {
      console.log("No file selected");
      setUploadedFileName(""); // Clear the uploaded file name
    }
  };

    const handlePreview = () => {
      if (uploadedFileName) {
        // Assuming the file content is stored or generated dynamically
        const fileContent =
          "This is the content of the file. Replace it with your logic.";

        // Open a new window
        const previewWindow = window.open("", "_blank", "width=600,height=400");

        // Write the file content to the new window
        previewWindow.document.write(`<pre>${fileContent}</pre>`);
      } else {
        console.log("No file uploaded for preview");
      }
    };
  

  return (
    <div className="flex justify-between items-center text-center h-screen">
      <div>
        <button
          className="bg-teal-500 text-white border border-white px-4 py-2 rounded ml-36 w-80"
          onClick={handleUpload}
        >
          Upload File
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <h3 className="px-4 py-2 ml-36">.pdf, .jpg, .png files</h3>
      </div>

      <div>
        <button
          className="bg-teal-500 text-white border border-white px-4 py-2 rounded mr-36 w-80"
          onClick={handlePreview}
        >
          Preview File
        </button>
        <h3 className="px-4 py-2 mr-36">View Uploaded Files</h3>
      </div>

      <div className="p-4 mr-16 w-60 bg-teal-100 shadow-md">
        {uploadedFileName && (
          <p className="text-lg text-gray-800">
            Uploaded file: {uploadedFileName}
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadFile;
