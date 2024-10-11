import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../store/auth';
import "./FormModal.css"
function FormModal() {
    
    const { show, handleClose, handleOpen ,currentContact  ,isEditClicked} = useAuth();
    // const [currentContact ,setCurrentContact]  = useState({
    //     employeeName : '' ,
    //     employeeEmail: '',
    //     employeeMobile: '',
    //     employeeAddress: ''
    // }) ;

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{
                        isEditClicked ? "Edit Contact" : "Add Contact"
}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={currentContact.employeeName}  placeholder="Enter name"/>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={currentContact.employeeEmail}  placeholder="Enter Email"/>
                        </div>
                        <div className='row'>
                        <div class="form-group col-6">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" className="form-control" id="mobile"  value={currentContact.employeeMobile}  placeholder="Enter Mobile"/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="landline">Landline</label>
                            <input type="number" className="form-control" id="landline" disabled  placeholder="Enter landline"/>
                            {/* <small  class="form-text text-muted">Curently this field is muted.</small> */}

                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input type="text" className="form-control" id="website" disabled  placeholder="Enter website"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            {/* <input type="email" class="form-control" id="address"  placeholder="Enter address"/> */}
                            <textarea type="text" className="form-control"  id="Address" value={currentContact.employeeAddress} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger " className="float-left" onClick={handleClose}>
                        Close
                    </Button>
                    {
                        isEditClicked ? ( <button className="add-Contact btn btn-primary"  onClick={handleClose}>
                           Update
                        </button>) : (
                           <button className="add-Contact btn btn-primary"  onClick={handleClose}>
                           Add 
                       </button>
                        )
                    }
                  
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FormModal