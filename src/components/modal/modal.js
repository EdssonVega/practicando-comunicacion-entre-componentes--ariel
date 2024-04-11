import React from "react";
import "./modal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal (){
    return(
        <div classname="modalContainer">
            <div className="popupMessage">
                <h1>Mensaje enviado!</h1>
                <button><IoIosCloseCircleOutline className="closeIcon"/></button>
            </div>
        </div>
    )
}

export default Modal