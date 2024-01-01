import React from "react";
import { useState } from "react";

const GetDoc = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const userProfile = {
    name: "Yash Gokakkar",
    email: "yashgokakkar@gmail.com",
    aadhar: "483406938708",
    phone: "7499822665",
  };

  const documentList = [
    {
      id: 1,
      name: "Document 1",
      uploadedDate: "2023-12-25",
      size: "2MB",
      type: "PDF",
      previewUrl:
        "https://docs.google.com/document/d/1ZlwOp36Uhk7k8a6aJQaxFbu_0NG6rvQkbis_nKA3stY/edit?usp=sharing",
    },
    {
      id: 2,
      name: "Document 2",
      uploadedDate: "2023-12-26",
      size: "1MB",
      type: "Word",
      previewUrl: "https://example.com/doc2.docx",
    },
    {
      id: 3,
      name: "Document 3",
      uploadedDate: "2023-12-27",
      size: "1MB",
      type: "Excel",
      previewUrl: "https://example.com/doc3.xlsx",
    },
    {
      id: 4,
      name: "Document 4",
      uploadedDate: "2023-12-28",
      size: "1MB",
      type: "JPEG",
      previewUrl: "https://example.com/doc4.jpeg",
    },
  ];

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document);
  };

  return (
    <div className="grid grid-cols-10 gap-4 h-screen pt-4 pb-4 bg-[#1A2027]">
      <div className="row-span-4 col-span-3  h-500  p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>User Profile</h1>
        <p>Name : {userProfile.name}</p>
        <p>Email : {userProfile.email}</p>
        <p>Aadhar No. : {userProfile.aadhar}</p>
        <p>Phone : {userProfile.phone}</p>
      </div>
      <div className="row-span-3 col-span-3  h-500  p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Document List</h1>
        <ul>
          {documentList.map((doc) => (
            <li key={doc.id} onClick={() => handleDocumentSelect(doc)}>
              {doc.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="row-span-4 col-span-4  h-500  p-2 bg-[#222831] text-[#EEEEEE] font-bold">
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
      <div className="row-span-1 col-span-3  h-500  p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Document Details</h1>
        {selectedDocument && (
          <div>
            <p>Uploaded Date: {selectedDocument.uploadedDate}</p>
            <p>Size: {selectedDocument.size}</p>
            <p>Type: {selectedDocument.type}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetDoc;
