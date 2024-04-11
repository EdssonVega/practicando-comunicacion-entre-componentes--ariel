import React from "react";
import "./textField.css";

function TextField(){
    return(
        <div className="textFieldContainer">
            <label for="mensaje">Mensaje:</label>
            <textarea type="textfiel" id="mensaje" ></textarea>
        </div>
    )
}

export default TextField