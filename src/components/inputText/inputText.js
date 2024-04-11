
import React from "react";
import "./inputText.css";

function InputText (){
    return(
        <div className="inputContainer">
            <label for="texto">Nombre:</label>
            <input type="text" id="texto" ></input>
        </div>
    )
}

export default InputText