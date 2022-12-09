import React from 'react'

function EditableRow({editFormData, handleEditFormChange, handleCancleClick}) {
  return (
    <tr>
        <td>
        <input 
         type="text"
         placeholder="Enter Name"
         name="Name"
         required="required"
         value={editFormData.Name}
         onChnage={handleEditFormChange}
         />
        </td>

        <td>
        <input 
         type="text"
         placeholder="Enter Position"
         name="Position"
         required="required"
         value={editFormData.Position}
         onChnage={handleEditFormChange}
         /> 
         </td>

        <td> 
        <input 
         type="text"
         placeholder="Enter Office"
         name="Office"
         required="required"
         value={editFormData.Office}
         onChnage={handleEditFormChange}
         />
        </td>

        <td> 
        <input 
         type="text"
         placeholder="Enter Age"
         name="Age"
         required="required"
         value={editFormData.Age}
         onChnage={handleEditFormChange}
         />
        </td>

        <td>
            <button type="button"  className="btn btn-success" >Save</button>
            <button type="button"  className="btn btn-warning" onClick={handleCancleClick}> Cancel </button>
        </td>
    </tr>
  )
}

export default EditableRow