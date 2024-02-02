import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ShareDoc = () => {
  const currentUser = useSelector((state) => state.usersReducer.user);

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const [requestHistory, setRequestHistory] = useState([]);

  const fetchRequestHistory = (aadhar) => {
    fetch(`http://localhost:8700/getRequestHistory/${aadhar}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Request history:", data);
        setRequestHistory(data);
        // console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching request history:", error);
      });
  };

  useEffect(() => {
    fetchRequestHistory(currentUser.Aadhar);
  }, [currentUser]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8700/users")
      .then((response) => response.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetch(`http://localhost:8700/getDocuments/${selectedUser.Aadhar}`)
        .then((response) => response.json())
        .then((data) => {
          setUserDocuments(data);
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching documents:", error);
        });
    }
  }, [selectedUser]);

  const handleUserSelection = (user) => {
    setSelectedUser(user);
    setSelectedDocument(null);
  };

  const handleDocumentSelection = (document) => {
    setSelectedDocument(document);
  };

  const handleRequestAccess = () => {
    if (selectedDocument && selectedUser) {
      const requestData = {
        requesterAadhar: currentUser.Aadhar,
        documentId: selectedDocument.id,
        ownerAadhar: selectedDocument.aadhar,
      };

      fetch("http://localhost:8700/requestAccess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Access request sent successfully:", data);
          alert("Access request sent successfully:", data)
        })
        .catch((error) => {
          console.error("Error sending access request:", error);
        });
    }
  };

  const handleStatusChange = (requestId, status, requesterAadhar,documentId ) => {
    fetch(`http://localhost:8700/updateRequestStatus/${requestId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Request status updated successfully:", data);
  
        if (status === "approved") {
          const requestData = {
            requesterAadhar: requesterAadhar,
            documentId: documentId,
           
          };
  
          fetch("http://localhost:8700/storeApprovedRequest", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          })
            .then((response) => response.json())
            .then((storeData) => {
              console.log("Approved request data stored successfully:", storeData);
              fetchRequestHistory(currentUser.Aadhar);
            })
            .catch((storeError) => {
              console.error("Error storing approved request data:", storeError);
            });
        } else {
          fetchRequestHistory(currentUser.Aadhar);
        }
      })
      .catch((error) => {
        console.error("Error updating request status:", error);
      });
  };
  

  return (
    <div className="flex h-screen bg-[#1A2027]">
      <div className="w-1/3 p-8 border-r border-gray-600">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-white">Users</h2>
        </div>
        <ul className="mt-4">
          {users.map((user) => (
            user.Aadhar !== currentUser.Aadhar && (
              <li
                className="text-white font-bold cursor-pointer"
                key={user.Aadhar}
                onClick={() => handleUserSelection(user)}
              >
                {user.fullName}
              </li>
            )
          ))}
        </ul>
      </div>
      <div className="w-1/3 p-8 border-r border-l border-gray-600">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-white">User Documents</h2>
        </div>
        <ul className="mt-4">
          {userDocuments.map((document) => (
            <li
              className="text-white font-bold cursor-pointer"
              key={document.id}
              onClick={() => handleDocumentSelection(document)}
            >
              {document.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col p-12 w-1/3 border-l border-gray-600">
        <div className="text-white text-center mb-4">Request History</div>
        <div className="flex items-center justify-center h-full">
          <div className="p-4 bg-gray-800 text-white">
            <p>Username: {selectedUser ? selectedUser.fullName : "-"}</p>
            <p>Document Name: {selectedDocument ? selectedDocument.name : "-"}</p>
            {selectedUser && selectedDocument && (
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleRequestAccess}
              >
                Request Access
              </button>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-white mb-2">Request History</h3>
            <ul>
              {requestHistory.map((request) => (
                <li className="text-white font-bold" key={request.id}>
                  Requester: {request.requesterAadhar}, Document ID: {request.documentId}
                  {request.status === "pending" && (
                    <div className="mt-2">
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleStatusChange(request.id, "approved", request.requesterAadhar,request.documentId )}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleStatusChange(request.id, "rejected", request.requesterAadhar,request.documentId)}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                  {request.status === "approved" && (
                    <p className="text-green-500">Status: Approved</p>
                  )}
                  {request.status === "rejected" && (
                    <p className="text-red-500">Status: Rejected</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDoc;


