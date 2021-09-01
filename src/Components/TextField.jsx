import React from 'react'

 const TextField = ({lable,placeholder,onChange,name,value}) => {
    return (
        <div className="text-field">
            <label className="lable"> {lable} </label>
            <input type="text" name={name} placeholder={placeholder} className="input" onChange={onChange} value={value}/>
        </div>
    )
}
export default TextField



