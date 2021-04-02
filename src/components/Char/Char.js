import React from "react";


const Char = (props) => {
   
    /*  const myStyle={
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center",
        margin: "16px", 
        border: "1px solid black", 
        borderRadius:"10px"
    } */

    return ( 
        <div
      //  style={myStyle}
        style={{
            display: "inline-block", 
            textAlign: "center", 
            padding: "16px", 
            margin: "16px", 
            border: "1px solid black",
            borderRadius:"10px",
            backgroundColor:"white"
        }}
        onClick={props.clicked}
        >
        {props.character}
        </div>
     );
}
 
export default Char;