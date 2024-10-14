import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../store/auth';
import "./FormModal.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function FormModal() {
    
    const { show, handleClose,  currentContact,SetCurrentContact  ,isEditClicked ,handleAddContact , handleUpdate ,contacts} =  useAuth();

    // const [contact , setContact] = useState(currentContact) ;
    const {id} = useParams();
    const navigate = useNavigate() ;
//    const  currContact  = contacts.find((cnt) => cnt.employeeId === id);
    // const   currContact =contacts.find((cnt) => cnt.employeeId === id);
    // setContact(currContact);
     

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetCurrentContact((prevState) => ({
          ...prevState,
          [name]: value
        }));
        console.log(currentContact.employeeName);
        
      };

    const handleAddCnt = () => {

        handleAddContact() ;  // submit data 
        handleClose() ;
    
    }

    const handleUpdateBtn = () => {
        handleUpdate() ;
        handleClose();
    }
    // console.log(contact);
    
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
                            <input type="text" className="form-control" id="name" name='employeeName' value={currentContact.employeeName  || ''}  onChange={handleChange} placeholder="Enter name"/>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="employeeEmail" value={currentContact.employeeEmail} onChange={handleChange} placeholder="Enter Email"/>
                        </div>
                        <div className='row'>
                        <div class="form-group col-6">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" className="form-control" id="mobile" name="employeeMobile"  value={currentContact.employeeMobile} onChange={handleChange} placeholder="Enter Mobile"/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="landline">Landline</label>
                            <input type="number" className="form-control" id="landline" name="employeeLandline" disabled  placeholder="Enter landline"onChange={handleChange}/>
                            {/* <small  class="form-text text-muted">Curently this field is muted.</small> */}

                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input type="text" className="form-control" id="website" name="employeeWebsite" disabled  placeholder="Enter website"onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            {/* <input type="email" class="form-control" id="address"  placeholder="Enter address"/> */}
                            <textarea type="text" className="form-control"  id="Address" name="employeeAddress" value={currentContact.employeeAddress} onChange={handleChange}/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger " className="float-left" onClick={handleClose}>
                        Close
                    </Button>
                    {
                        isEditClicked ? ( <button className="add-Contact btn btn-primary"  onClick={handleUpdateBtn}>
                           Update
                        </button>) : (
                           <button  type='button' className="add-Contact btn btn-primary"  onClick={handleAddCnt}>
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