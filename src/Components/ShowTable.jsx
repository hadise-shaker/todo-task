import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {getUsers,deleteUser} from "../redux/actions/userActions"
import "../assets/Css/showTable.css"
import Button from "./Button"
import { useHistory } from 'react-router-dom';
import Modal from './Modal';
const ShowTable = ({action}) => {
    const history =useHistory();
    const dispatch = useDispatch()
    const users = useSelector((state) => state.allUser.users)
    /* console.log("users",users); */
    const [id, setId] = useState()
    const [show, setShow] = useState(false)
    const handlePush=()=>{
        history.push("/")
    }
    const handleRefresh=()=>{
        window.location.reload();
    }
    const handleEdit=(info)=>{
        action(info)
        history.push(`/edit/${info.id}`)
    }
    const handleDelete=(id)=>{
        setId(id)
        setShow(true)
/*         dispatch(deleteUser(id))
        window.location.reload(); */
    }
    const handleDeleteModal=()=>{
        dispatch(deleteUser(id))
        window.location.reload();
    }
    const handleCloseModal=()=>{
        setShow(false)
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
<tbody>


            <tr>
                <th>نام و نام خانوادگی</th>
                <th>شماره موبایل </th>
                <th style={{width:"100px"}}>سن</th>
                <th>ایمیل</th>
                <th>تاریخ ایجاد</th>
                <th>  </th>
                <th>  </th>
            </tr>
  {users?.map((info,index)=>{
      return(
        <tr key={index}>
        <td>{info.name}</td>
        <td>{info.phone}</td>
        <td>{info.age}</td>
        <td>{info.email}</td>
        <td>99/99/99</td>
        <td><Button btn_class="btn-edit" onClick={()=>handleEdit(info)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button></td>
        <td><Button btn_class="btn-delete" onClick={()=>{handleDelete(info.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></Button></td>
        </tr>
      )
  })}
</tbody>
            </table>
            {show&&
            <Modal 
            onDelete={handleDeleteModal} 
            onClose={handleCloseModal}
             btn_title="حذف"
              modal_title="حذف ردیف"
                modal_body="ایا از حذف این ردیف مطمئن هستید؟"
                
            />}
            
   </div>
    )
}

export default ShowTable
