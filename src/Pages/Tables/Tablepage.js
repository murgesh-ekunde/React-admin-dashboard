import React, { useState } from "react";
import data from "./Tabledata";
import "./Tablestyling.css";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function Tablepage() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Position: "",
    Office: "",
    Age: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Position: "",
    Office: "",
    Age: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  // Handling input for new employee
  const hanleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // New employee object
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Position: addFormData.Position,
      Office: addFormData.Office,
      Age: addFormData.Age,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmission=(event)=>{
    event.preventDefault();
    
    const editedContact={
        id: editContactId,
        Name: editFormData.Name,
        Position: editFormData.Position,
        Office: editFormData.Office,
        Age: editFormData.Age,
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=>contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  }
  

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Position: contact.Position,
      Office: contact.Office,
      Age: contact.Age,
    };
    setEditFormData(formValues);
  };

  const handleCancleClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]
    const index = contacts.findIndex((contact)=> contact.id === contactId)
    newContacts.splice(index, 1);
    setContacts(newContacts)
  }

  return (
    <div className="container-fluid">
      <h1> Tables </h1>
      <p>
        Below is employee data table. Admin can Add, Edit or Delete Employee.{" "}
      </p>
      <div className="card">
        <div className="card-header"> DataTables Example </div>
        <div className="card-body">

          <form onSubmit={handleEditFormSubmission}>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Position </th>
                  <th> Office </th>
                  <th> Age </th>
                  <th> Action </th>
                </tr>
              </thead>

              {/* Table data below */}
              <tbody>
                {contacts.map((contact, index) => (
                  <>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancleClick={handleCancleClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        key={index}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </form>

          {/* Form for adding new employee */}
          <div className="employee-form">
            <h4> Add Employee </h4>
            <form
              onSubmit={handleAddFormSubmit}
              className="employee-form-input"
            >
              <input
                type="text"
                placeholder="Enter Name"
                name="Name"
                required="required"
                onChange={hanleAddFormChange}
              />

              <input
                type="text"
                placeholder="Enter Position"
                name="Position"
                required="required"
                onChange={hanleAddFormChange}
              />

              <input
                type="text"
                placeholder="Enter Office"
                name="Office"
                required="required"
                onChange={hanleAddFormChange}
              />

              <input
                type="text"
                placeholder="Enter Age"
                name="Age"
                required="required"
                onChange={hanleAddFormChange}
              />

              <button type="submit"  className="btn btn-primary"> Add Employee </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablepage;
