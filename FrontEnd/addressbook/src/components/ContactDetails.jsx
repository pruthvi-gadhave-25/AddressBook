import React, { useEffect, useState } from 'react'
import './ContactDetails.css';
import Edit from '../images/Edit-icon.png' ;
import Delete from '../images/delete2.png';
import { useAuth } from '../store/auth';
import { Link, useParams } from 'react-router-dom';

function ContactDetails() {
    const { handleEdit , handleDelete ,contacts ,setIsDeleted ,isDeleted} = useAuth() ;
    // const [updatedContact , setUpDatedContact] = useState(contact) ;
    // const {} = useAuth() ;
    const{ id} = useParams() ;
    debugger ;
    console.log(parseInt(id) , contacts);
    
    const contact =  contacts.find((item) => {
        return item.employeeId == parseInt(id);}) ;
   

    // if (!contact) {
    //     return <div>Contact not found</div>;
    //   }


    // useEffect( () => {
    //     return (
    //         setIsDeleted(false) 
    //     )
    // } ,[isDeleted]) ;
     
  return (
    <>
        <div className='heading row '>
            <div className='col-4'>
                <h3>{contact?.employeeName}</h3>
            </div>    
            <div className='col-8 '>
                <ul className='p-0 d-flex'>
                    <Link className='p-1 linkButton'  to={`/contacts/form/edit/${id}`}  onClick={() =>handleEdit(contact.employeeId)}><span><img src={Edit}  alt='EditIcon'/></span>EDIT</Link>
                    <Link className='p-1 linkButton' onClick={ (e) => handleDelete(contact.employeeId)}><span><img src={Delete}  alt='deleteIcon' /></span>DELETE</Link>
                </ul>
            </div>    
        </div> 
        <div className='sub-deatils'>
            <p>Email: {contact?.employeeEmail}</p>
            <p>Mobile:  {contact?.employeeMobile}</p>
            <p>Landline:{contact?.employeeMobile}</p>
            <p>Website : {contact?.employeeWebsite}</p>
            <p>Address: { contact?.employeeAddress}</p>
        </div>       
    </>
  )
}

export default ContactDetails