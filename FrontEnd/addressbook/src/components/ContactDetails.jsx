import React, { useEffect, useState } from 'react'
import './ContactDetails.css';
import Edit from '../images/Edit-icon.png' ;
import Delete from '../images/delete2.png';
import { useAuth } from '../store/auth';

function ContactDetails({contact }) {
    const { handleEdit , handleDelete ,contacts ,setIsDeleted ,isDeleted} = useAuth() ;
    // const [updatedContact , setUpDatedContact] = useState(contact) ;
    // const {} = useAuth() ;

   
    useEffect( () => {
        return (
            setIsDeleted(false) 
        )
    } ,[isDeleted]) ;
     
  return (
    <>
        <div className='heading row '>
            <div className='col-4'>
                <h3>{contact?.employeeName}</h3>
            </div>    
            <div className='col-8 '>
                <ul className='p-0 d-flex'>
                    <li className='p-1' onClick={ (e) => handleEdit(contact.employeeId)}><span><img src={Edit}  alt='EditIcon'/></span>EDIT</li>
                    <li className='p-1' onClick={(e) => handleDelete(contact.employeeId)}><span><img src={Delete}  alt='deleteIcon' /></span>DELETE</li>
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