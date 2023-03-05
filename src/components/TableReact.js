import React from 'react'

import '../styles/tables.css';

import { useEffect, useState } from 'react';

import TableRowReact from './TableRowReact';

import {v4} from 'uuid'


const TableReact = ({name, tableRows, deleteRow, updateInputName, updateInputSummary, updateInputRating}) => {

  return ( 

    <div className='table'> 
      <div className="table-title">{name}</div>
      <div className="col-titles">
          <div className="title">Name</div>
          <div className="title">Summary</div>
          <div className="title">Rating</div>
          <div className="title">Actions</div>
      </div>
      <div className="table-rows">

        {
          tableRows.map(row => (
              <TableRowReact
                  key = {v4()}  
                  rowData ={row} 
                  deleteRow = {deleteRow} 
                  updateInputName = {updateInputName} 
                  updateInputSummary = {updateInputSummary} 
                  updateInputRating = {updateInputRating}
              />
          ))
        }
       
      </div>     
    </div>
  )
}

export default TableReact