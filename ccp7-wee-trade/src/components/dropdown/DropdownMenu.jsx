import React from 'react';

export default function DropdownMenu ( props ) {
const {className, onChange, options, onKey} = props

    return (

        <>
        <div>
            <select className={className} onChange={onChange}>
            <>
            <option key={"unspecified"} value="Not Specified">Please Select</option>
            {options.map((option, index) => (
                <option 
                  key={index}
                  value={option[onKey]} 
                  >
                  { option[onKey] }
                </option> 
                  ))}
                  </>
            </select>
        </div>
        </>
    )
}