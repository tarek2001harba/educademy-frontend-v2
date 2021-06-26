import React from 'react'
import '../assets/css/field.css';
const Field = ({fieldName, fieldType, options, id, last}) => {
    // this var decides what type of input to display
    let input = fieldType === 'select' ? 
            (<select id={id} className="input-field__input" name={fieldName}>
                {options.map(option => {
                        return <option value={option}>{option}</option>
                    })
                }
            </select>) : fieldType === "textarea" ? 
            (
                <textarea id={id} type="text" name={fieldName}></textarea>
            ) :
            (
                <input id={id} className="input-field__input" type={fieldType !== null ? fieldType : "text"}/>
            );
    return (
        <div className="input-field" style={last ? {marginBottom:"2rem"} : {}}>
            <span className="input-field__name">{fieldName}:</span>
            {input}
        </div>
    )
}

export default Field
