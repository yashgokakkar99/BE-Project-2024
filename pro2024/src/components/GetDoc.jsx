import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GetDoc = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [documentList, setDocumentList] = useState([]);
  const [approvedDocuments, setApprovedDocuments] = useState([]);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.usersReducer.user);

  useEffect(() => {
    // Fetch documents based on Aadhar
    fetch(`http://localhost:8700/getDocuments/${user.Aadhar}`)
      .then((response) => response.json())
      .then((data) => {
        setDocumentList(data);
      })
      .catch((error) => setError(error.message));

    // Fetch approved documents
    fetch("http://localhost:8700/getApprovedDocuments")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // Filter approved documents for the current user
        const userApprovedDocuments = data.filter(
          (doc) => doc.requesterAadhar === user.Aadhar
        );
        setApprovedDocuments(userApprovedDocuments);
      })
      .catch((error) => setError(error.message));
  }, [user.Aadhar]);

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document);
  };

  return (
    <div className="grid grid-cols-10 gap-4 h-screen pt-4 pb-4 bg-[#1A2027]">
      {/* User Profile */}
      <div className="row-span-3 col-span-3 h-500 p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>User Profile</h1>
        <p>Name: {user.fullName}</p>
        <p>Email: {user.Email}</p>
        <p>Aadhar No.: {user.Aadhar}</p>
        <p>Phone: {user.Telephone}</p>
      </div>

      {/* Document List */}
      <div className="row-span-2 col-span-3 h-500 p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Document List</h1>
        <ul>
          {documentList.map((doc) => (
            <li
              key={doc.id}
              onClick={() => handleDocumentSelect(doc)}
              className=" cursor-pointer"
            >
              {doc.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Document Preview */}
      <div className="row-span-4 col-span-4 h-500 p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Document Preview</h1>
        {selectedDocument && (
          <iframe
            src={selectedDocument.ipfsPath}
            title="Document Preview"
            width="100%"
            height="95%"
            style={{ border: "none" }}
            scrolling="auto"
          ></iframe>
        )}
      </div>

      {/* Document Details */}
      <div className="row-span-2 col-span-3 h-500 p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Document Details</h1>
        {selectedDocument && (
          <div>
            <p>Uploaded Date: {selectedDocument.uploadedDate}</p>
            <p>Size: {selectedDocument.size}</p>
            <p>Type: {selectedDocument.type}</p>
          </div>
        )}
      </div>

      {/* Approved Documents */}
      <div className="row-span-3 col-span-3 h-500 p-2 bg-[#222831] text-[#EEEEEE] font-bold">
        <h1>Approved Documents</h1>
        <ul>
          {approvedDocuments.map((doc) => (
            <li
              key={doc.id}
              onClick={() => handleDocumentSelect(doc)}
              className=" cursor-pointer"
            >
              {doc.name}  
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetDoc;

