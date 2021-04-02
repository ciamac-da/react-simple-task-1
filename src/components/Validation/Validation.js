import React from "react";


const Validation = (props) => {
    return ( 
    <div>{
    props.inputLength > 6   ? <p>Text too Long</p>    : <p>Text too short</p> 
    }
    </div> );
}
 
export default Validation;