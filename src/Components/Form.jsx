import React,{useState} from 'react'
import TextField from "./TextField"
import Button from "./Button"
const Form = ({handleOnChange,data,handlSubmit,formTitle,buttonTitle}) => {
    return (
        <form className="form-container" onSubmit={handlSubmit}>
        <div>
            <h2>{formTitle}</h2>
        </div>
        
            <TextField lable="نام و نام خانوادگی" placeholder="نام و نام خانوادگی شما" value={data?.name} name="name" onChange={handleOnChange}/>
            <TextField lable="شماره موبایل" placeholder="شماره موبایل شما" value={data?.phone} name="phone" onChange={handleOnChange}/>
            <TextField lable="سن" placeholder="سن شما" name="age" value={data?.age} onChange={handleOnChange}/>
            <TextField lable="ایمیل" placeholder="ایمیل شما" value={data?.email} name="email" onChange={handleOnChange}/>
            <Button btn_class="btn-register" /* onClick={handlSubmit} */ button_Title={buttonTitle} />
    </form>
    )
}

export default Form
