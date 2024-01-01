import React, { useRef, useState } from "react";

function UploadFile() {
  const fileInputRef = useRef();
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Uploading file: ${file.name}`);
      setUploadedFileName(file.name);
      setSelectedDocument({
        uploadedDate: new Date().toLocaleDateString(),
        size: "To be calculated",
        type: file.type,
        previewUrl: URL.createObjectURL(file),
      });
    } else {
      console.log("No file selected");
      setUploadedFileName("");
      setSelectedDocument(null);
    }
  };

  const handlePreview = () => {
    // Your logic for previewing the selected document
    console.log("Previewing file");
  };

  return (
    <div className="grid grid-cols-10 gap-4 h-screen pt-4 pb-4 bg-[#1A2027]">
      <div className="col-span-5 h-500 p-2 bg-[#1A2027] text-[#222831] shadow-md flex flex-col justify-center items-center ">
        <h1 className="text-white text-lg font-bold mb-4">Upload Document</h1>
        <button
          className="bg-teal-500 text-white border border-white px-4 py-2 rounded w-80 mb-2"
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
        <h3 className="text-white px-4 py-2">.pdf, .jpg, .png files</h3>
        <button
          className="bg-teal-500 text-white border border-white px-4 py-2 rounded w-80 mt-4"
          onClick={handlePreview}
        >
          Preview File
        </button>
        <h3 className="text-white px-4 py-2">View Uploaded Files</h3>
        {uploadedFileName && (
          <p className="mt-4 text-lg text-white">
            Uploaded file: {uploadedFileName}
          </p>
        )}
      </div>

      <div className="col-span-5 h-500 p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Document Preview</h1>
        {selectedDocument && (
          <iframe
            src={selectedDocument.previewUrl}
            title="Document Preview"
            width="100%"
            height="95%"
            style={{ border: "none" }}
            scrolling="auto"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default UploadFile;
