import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { useState, useDeferredValue} from 'react';
import '../styles/faStar.css';

const FaStar = ({resetStars, inputRating, updateInputRating}) => {

  const [toggledStar, setToggledStar] = useState(false);

  const [toggleReset, setToggleReset] = useState(resetStars);

  const toggleHightLight = () => {
 
      setToggledStar(!toggledStar);
      updateInputRating(!toggledStar ? inputRating += 1 : inputRating -= 1);
      //setToggleReset(false);
       
  }



  /*

    Solution to resetting state of button --> find a way to change the key of a component

    https://www.youtube.com/watch?v=9HYKSaorqHc


  */

  /*
  useEffect(() => {
      //setToggleReset(false);
      setToggledStar(false);
  }, [ resetStars])
  */

  return (
    
    <FontAwesomeIcon   
          className={`fa-star  ${ (toggledStar)  ? 'yellow-star': 'gray-star'} ` }  
          onClick={toggleHightLight} icon={faStar}>
    </FontAwesomeIcon>
 
  )
}

export default FaStar