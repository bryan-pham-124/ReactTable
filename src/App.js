import logo from './logo.svg';
import TableReact from './components/TableReact';
import './styles/app.css';

import { useEffect, useState, useRef } from 'react';

import {v4} from 'uuid';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';

import FaStar from './components/FaStar';
import './styles/faStar.css';




function App() {
  
  const [inputName,  setInputName] = useState('');

  const [inputSummary, setInputSummary] = useState('');

  const [inputRating, setInputRating] = useState(0);

  const [tableRows, setTableRows] = useState([]);

  const [displayError, setDisplayError] = useState(false);

  const [rowCount, setRowCount] = useState(0);

  const [goodRatingsCount, setGoodRatingsCount] = useState(0);

  const [resetStars, setResetStars ] = useState(false);

  const [resetKey, setResetKey] = useState(v4());

  const  updateResetKey = () => {
     setResetKey((prev) => prev + 1);
  }
 

  const  stars = [
        { 
           
        },
        { 
           
        },
        { 
            
        },
        { 
            
        },
        { 
          
        }
  ]

 

  const updateRowCount = () => {
      setRowCount(tableRows.length); 
  }  

  const updateGoodRatingsCount = () => {

      let filteredRows = tableRows.filter(row => row["rating"] > 3);

      setGoodRatingsCount(filteredRows.length ); 
  }  

  
  const updateInputName = (name) => {
      setInputName(name.target.value);
  }

  const updateInputSummary = (summary) => {
      setInputSummary(summary.target.value);
  }     

  const updateInputRating = (newwRating) => {
      updateResetStars(false);
      setInputRating( newwRating);
  }

  const deleteRow = (currentId) => {

      let newArray = tableRows.filter( elm => elm['id'] !== currentId)
      setTableRows(newArray);
  }




  const updateTable = () => {

      if(inputName.trim() !== '' && inputSummary.trim() !== ''){

          setTableRows([...tableRows, 
               { 'id': v4(), 'name': inputName,  'summary': inputSummary, 'rating': inputRating}
          ]);

          setDisplayError(false);
          setInputName('');
          setInputSummary('');
          setInputRating(0);

          updateResetKey();
       
      } else {
          setDisplayError(true);
      }      
       
  }

  const updateResetStars = (status) => {
      setResetStars(status);
  }

 

  

  useEffect(() => {
   
    console.log('rating is: ' + inputRating);
     

   //storiesCounterRef(tableRows.length);
   
  }, [inputRating])


  useEffect(() => {
       updateRowCount();
       updateGoodRatingsCount();
     
         //console.log('rating is: ' + inputRating);
      //storiesCounterRef(tableRows.length);
  }, [tableRows])


  /*

    NEXT STEPS --> 

        X MAKE A COUNTER  
            NUMBER OF TICKETS
            NUMBER OF HIGHLY RATED STORIES
                HIGHLY RATED -> stories > 4 stars

       X Make 5 star rating
            toggle star ratings on click
            find a way to render the stars on row


        FIND A WAY TO RESET STARS AFTER submitting form button

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

                {
                    /*

                        <FaStar inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar resetStars = {resetStars} inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar resetStars = {resetStars} inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar resetStars = {resetStars} inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar resetStars = {resetStars} inputRating = {inputRating} updateInputRating={updateInputRating} />
                        <FaStar resetStars = {resetStars} inputRating = {inputRating} updateInputRating={updateInputRating} />


                    */

                }
                
                <div className="star-row">

                    {
                        stars.map((star, index ) => (
                            <FaStar key={resetKey + index} id = {v4()} resetStars = {resetStars} inputRating = {inputRating} updateInputRating={updateInputRating} />
                        ))
                    }
                    
                    
                </div>
            </div>
           </div>
           <div className="input-group-button">
                <button onClick = {updateTable}>Submit Story</button>
           </div>
           {displayError && <div className='display-error'> You must fill in all inputs! </div>}

           <div className="table-counters">
                <div className="wrapper">
                    <h1>Stories: </h1>
                    <p>{rowCount}</p>
                </div>
                <div className="wrapper">
                    <h1>Good Stories: </h1>
                    <p>{goodRatingsCount}</p>
                </div>
           </div>

 

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
