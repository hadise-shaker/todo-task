import React,{useState} from 'react'
import "../assets/Css/registerForm.css"
import { useHistory } from 'react-router-dom';
import {addUser} from "../redux/actions/userActions"
import { useDispatch } from "react-redux";
import Form from "./Form"
const RegisterForm = () => {
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
       <>
            <Form handleOnChange={handleOnChange} handlSubmit={handlSubmit} formTitle="فرم را پر کنید" buttonTitle="ساخت اکانت" data={inputs}/>
      </>
       
    )
}

export default RegisterForm
