import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {getUsers} from "../redux/actions/userActions"
import {useParams} from "react-router-dom";
const EditForm = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const users = useSelector((state) => state.allUser.users)
    const {id}=useParams()
    const info = users.data?.find(item => item.id === id)
    console.log("hi");
    console.log("info0",info);
    return (
        <div>
            <h1>{info}</h1>
        </div>
    )
}

export default EditForm
