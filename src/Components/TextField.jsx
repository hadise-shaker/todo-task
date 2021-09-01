import React from 'react'

 const TextField = ({lable,placeholder,onChange,name}) => {
    return (
        <div className="text-field">
            <label className="lable"> {lable} </label>
            <input type="text" name={name} placeholder={placeholder} className="input" onChange={onChange}/>
        </div>
    )
}
export default TextField



