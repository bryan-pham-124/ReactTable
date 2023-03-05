import logo from './logo.svg';
import TableReact from './components/TableReact';
import './styles/app.css';

import { useEffect, useState } from 'react';

import {v4} from 'uuid';

function App() {
  
  const [inputName,  setInputName] = useState('');

  const [inputSummary, setInputSummary] = useState('');

  const [inputRating, setInputRating] = useState('');

  const [tableRows, setTableRows] = useState([]);

  const [displayError, setDisplayError] = useState(false);


  const updateInputName = (name) => {
      setInputName(name.target.value);
  }

  const updateInputSummary = (summary) => {
      setInputSummary(summary.target.value);
  }     

  const updateInputRating = (rating) => {
      setInputRating(rating.target.value);
  }


  const deleteRow = (currentId) => {

    let newArray = tableRows.filter( elm => elm['id'] !== currentId)
    setTableRows(newArray);

 }

  const updateTable = () => {

      if(inputName.trim() !== '' && inputSummary.trim() !== '' && inputRating.trim() !== ''){

          setTableRows([...tableRows, 
               { 'id': v4(), 'name': inputName,  'summary': inputSummary, 'rating': inputRating}
          ]);

          setDisplayError(false);
          setInputName('');
          setInputSummary('');
          setInputRating('');
       
      } else {
          setDisplayError(true);
      }      
       
  }

  useEffect(() => {
      console.log(tableRows)
  }, [tableRows])


  /*

    NEXT STEPS --> 

        MAKE A COUNTER  
            NUMBER OF TICKETS
            NUMBER OF HIGHLY RATED STORIES
                HIGHLY RATED -> stories > 4 stars

        SORTING FILTER
            NAME 
            RATING

        MAKE A MODAL FOR USER TO ENTER IN UPDATED INFORMATION
        
        LOOK AT FAKER OR FAKE DATA GENERATOR TO FILL APPLICATION WITH FAKE DATA

  */
 

  return (

    <div className="App">

      <div className="input-wrapper">
          <div className="title">
              Short Stories
          </div>
          <div className="wrapper">
            <div className="input-group">
                <label htmlFor="name">Name: </label>
                <input type="text" onChange={updateInputName} name="name" value={inputName} />
            </div>
            <div className="input-group">
                <label htmlFor="name"> Summary: </label>
                <input type="text" onChange={updateInputSummary} name="summary" value={inputSummary}  />
            </div>
            <div className="input-group">
                <label htmlFor="name"> Rating out of 5 stars: </label>
                <input type="text" onChange={updateInputRating} name="rating" value = {inputRating} />
            </div>
           </div>
           <div className="input-group-button">
                <button onClick = {updateTable}>Submit Story</button>
           </div>
           {displayError && <div className='display-error'> You must fill in all inputs! </div>}
      </div>

      <div className="table-wrapper">
          <TableReact 
                key = {v4()} 
                name="Short Stories Table" 
                tableRows = {tableRows} 
                deleteRow = {deleteRow}
                updateInputName = {updateInputName}
                updateInputSummary = {updateInputSummary}
                updateInputRating = {updateInputRating}
            /> 
      </div>
    
    </div>
  );
}

export default App;
