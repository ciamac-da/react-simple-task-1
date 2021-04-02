import React from "react";


const Validation = (props) => {
    
    //let validateText;
    let validateText= null

    if(props.inputLength > 25){
      validateText =    "Text too long"
    }else if (props.inputLength <= 25 && props.inputLength > 15){
        validateText =  "Text long enough"
    }else if (props.inputLength <= 15 && props.inputLength > 0){
        validateText =  "Text too short"
    }else {
        validateText =  "There's no Text"
    }
    
    
    return ( 
    <div>
      <p style={{fontSize:"20px"}}>{validateText}</p>
    </div> );
}
 
export default Validation;