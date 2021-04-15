import React from "react";
import "./FormRadio.scss";

export const RadioInput = ({label, value, name}) => {
    return (
        <div className="radio-container">
            <label>{label}</label>
            <input type="radio" value={value} name={name}/>
        </div>
    );
};
