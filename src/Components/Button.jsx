import React from 'react'

const Button = (props) => {
    return (
        <button type="submit" className={`btn ${props.btn_class}`} onClick={props.onClick}>{props.children}{props.button_Title}</button>
    )
}

export default Button
