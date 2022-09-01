import React from "react";
import { useSelector } from 'react-redux';
//useSelector take function that return all the state


function ReduxCart(props) {
  const ReduxCounter = useSelector((state) => state.cr.ReduxCounter); //state is anything is returned by reducer
 
  // return <h1>This is my cart, {props.hello}</h1>;
  return (
    <div className="preview">
      <div className="form-group">
        <h2>Redux Counter value is : <span>{ReduxCounter}</span></h2>
      </div>
    </div>
  );
}

export default ReduxCart;
