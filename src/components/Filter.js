import React from 'react'
import '../assets/css/filter.css'
const Filter = ({id, name, options, onChange}) => {
    return (
        <div className="filter">
            <span className="filter__filter-name">{name}</span>
            <select name={name.toLowerCase()} id={id} onChange={onChange}>
                <option selected value=" ">Select a {name.toLowerCase()}</option>
                {options.map((option, ind) => {
                        return Array.isArray(option) ? 
                        <option value={option[0]} key={option+(ind+1)} >{option[1]}</option> :
                        <option value={option} key={option+(ind+1)}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Filter
