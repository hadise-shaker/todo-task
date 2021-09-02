import React from 'react'
import "../assets/Css/modal.css"
import Button from "./Button"
const Modal = ({onDelete,onClose,btn_title,modal_title,modal_body}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{modal_title}</h4>
                    {/* <button className="button" onClick={onClose}> */}<i className="fa fa-times button-close" onClick={onClose} aria-hidden="true"></i>{/* </button> */}
                </div>
                <div className="modal-body">
                    {modal_body}
                    
                </div>
                <div className="modal-footer">
                <Button btn_class="btn-modal" onClick={onDelete}>{btn_title}</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal
