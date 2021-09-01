import React,{useState} from 'react'
import {update} from "../redux/actions/userActions"
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {getUsers} from "../redux/actions/userActions"
import Form from "./Form"
const EditForm = ({data}) => {
    console.log("data",data);
    const history =useHistory();
    const [inputs, setInputs] = useState({
        name:data.name,
        phone:data.phone,
        age:data.age,
        email:data.email,
      });
      
      const dispatch = useDispatch()
    const handleOnChange=(e)=>{
        const value = e.target.value;
        setInputs({
         ...inputs,
         [e.target.name]: value
        });
        
    }
    const {name,phone,age,email}=inputs
    console.log(inputs);
    const handlSubmit=(e)=>{
        let updatedUserObj={...data,name ,phone,age,email};
        e.preventDefault();
        dispatch(update(data.id,updatedUserObj)).then(dispatch(getUsers()))
        history.push("/showtable")
    }
    return (
        <div>
            <Form handleOnChange={handleOnChange} handlSubmit={handlSubmit} formTitle="ویرایش" buttonTitle="ثبت اطلاعات" data={inputs}/>
        </div>
    )
}

export default EditForm
