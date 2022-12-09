import React from 'react'

function ReadOnlyRow({contact, handleEditClick, handleDeleteClick}) {
  return (
    <tr>
    <td> {contact.Name} </td>
    <td> {contact.Position} </td>
    <td> {contact.Office} </td>
    <td> {contact.Age} </td>
    <td>
        <button type ='button' className="btn btn-warning"onClick={(event)=> handleEditClick(event, contact)}>Edit</button>
        <button type='button'  className="btn btn-danger" onClick={()=> handleDeleteClick(contact.id)}> Delete</button>
    </td>
  </tr>
  )
}

export default ReadOnlyRow