import React,{useState} from 'react'
import "../assets/Css/registerForm.css"
import TextField from "./TextField"
import Button from "./Button"
import { useHistory } from 'react-router-dom';
import {addUser} from "../redux/actions/userActions"
import { useDispatch,useSelector } from "react-redux";
const RegisterForm = ({buttonTitle,formTitle}) => {
    const history =useHistory();
    const dispatch = useDispatch()
   
    const [inputs, setInputs] = useState({
        name:"",
        phone:"",
        age:"",
        email:"",
      });
    const handleOnChange=(e)=>{
        const value = e.target.value;
        setInputs({
         ...inputs,
         [e.target.name]: value
        });
        
    }
    const handlSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({inputs}))
        history.push("/showtable")
    }
    return (
       
            <form className="form-container" /* onSubmit={handlSubmit} */>
                <div>
                    <h2>{formTitle}</h2>
                </div>
                    <TextField lable="نام و نام خانوادگی" placeholder="نام و نام خانوادگی شما" name="name" onChange={handleOnChange}/>
                    <TextField lable="شماره موبایل" placeholder="شماره موبایل شما" name="phone" onChange={handleOnChange}/>
                    <TextField lable="سن" placeholder="سن شما" name="age" onChange={handleOnChange}/>
                    <TextField lable="ایمیل" placeholder="ایمیل شما" name="email" onChange={handleOnChange}/>
                    <Button btn_class="btn-register" onClick={handlSubmit} button_Title={buttonTitle} />
            </form>
       
    )
}

export default RegisterForm
