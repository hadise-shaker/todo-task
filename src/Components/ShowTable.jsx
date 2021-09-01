import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {getUsers,deleteUser} from "../redux/actions/userActions"
import "../assets/Css/showTable.css"
import Button from "./Button"
import { useHistory,Link } from 'react-router-dom';
const ShowTable = () => {
    const history =useHistory();
    const dispatch = useDispatch()
    const users = useSelector((state) => state.allUser.users)
    console.log("users",users);
    const [edit, setEdit] = useState([])

    const handlePush=()=>{
        history.push("/")
    }
    const handleRefresh=()=>{
        window.location.reload();
    }
    const handleEdit=(id)=>{
        console.log("info",id);
        history.push(`edit/${id}`)
    }
    const handleDelete=(id)=>{
        dispatch(deleteUser(id))
        window.location.reload();
    }
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div className="tabel-container">
            <div className="box">
                <div className="table-title">
                    <h3>داده ها</h3>
                </div>
                <div className="btn-group">
                    <Button btn_class="btn-create btn-bg" button_Title="دریافت اطلاعات از سرور" onClick={handleRefresh}></Button>
                    <Button btn_class="btn-create"  button_Title="ساخت اکانت جدید" onClick={handlePush}> <i class="fa fa-plus-circle icon" aria-hidden="true"></i></Button>
                </div>
            </div>
            <table className="table">

            <tr>
    <th>نام و نام خانوادگی</th>
    <th>شماره موبایل </th>
    <th style={{width:"100px"}}>سن</th>
    <th>ایمیل</th>
    <th>تاریخ ایجاد</th>
    <th>  </th>
    <th>  </th>
  </tr>
  

 
  {users.data?.map((info,index)=>{
      return(
        <tr>
        <td key={index}>{info.name}</td>
        <td key={index}>{info.phone}</td>
        <td key={index}>{info.age}</td>
        <td key={index}>{info.email}</td>
        <td key={index}>99/99/99</td>
        <td key={index}><Link className="btn-edit" to={`/edit/${info.id}`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link></td>
        <td key={index}><Button btn_class="btn-delete" onClick={()=>{handleDelete(info.id)}}><i class="fa fa-trash-o" aria-hidden="true"></i></Button></td>
        </tr>
      )
  })}

            </table>
        </div>
    )
}

export default ShowTable
