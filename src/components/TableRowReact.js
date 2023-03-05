import React from 'react'

const TableRowReact = ({rowData, deleteRow}) => {
  return (
   
    <div className="row">
        <div className="col">{rowData['name']}</div>
        <div className="col" id = "summary">{rowData['summary']}</div>
        <div className="col">{rowData['rating']}</div>
        <div className="col delete">
            <button onClick={() => deleteRow(rowData['id'])}>Delete</button>
        </div>
    </div>   
   
  )
}

export default TableRowReact