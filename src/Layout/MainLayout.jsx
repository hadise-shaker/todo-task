import React from 'react'
import "../assets/Css/home.css"
const MainLayout = (props) => {
    return (
        <div className="bg">
            {props.children}
        </div>
    )
}

export default MainLayout
