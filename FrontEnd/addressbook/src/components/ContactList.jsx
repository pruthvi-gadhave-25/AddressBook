import React, { useEffect, useState } from 'react'
import './ContactList.css'
import { useAuth } from '../store/auth'
import ContactDetails from './ContactDetails';
import { Navigate, useNavigate ,Link } from 'react-router-dom';

const ContactList = () => {
    const [currentContact ,setCurrentContact] =useState({}) ;
    // const [isContact ,setIsContact] =useState(false) ;
    const {contacts ,isDelete ,isContact ,setIsContact ,setIsDeleted } = useAuth();
   const navigate =  useNavigate() ;

    // const handleContact  =(id) => {        
    //     // const selectedContact = contacts.find( (user) => user.employeeId === id );
       
    //     // setCurrentContact(selectedContact);
    //     navigate(`/contactlist/contact/${id}`) 
    // }


    // useEffect( () => {
    //     if (isContact && currentContact?.employeeId   ) {
    //         const updatedContact = contacts.find((user) => user.employeeId === currentContact.employeeId);
    //         setCurrentContact(updatedContact); // Sync the current contact with updated data
    //     }
    // } ,[contacts])

    return (

           <>
           
           <h6>CONTACTS</h6>
           <div>
           <ul className='p-0 '>
                {
                    (contacts?.length >= 0) ? (
                        contacts?.map(( contact, index) => {
                            return (
                                <>
                                    <Link className='w-100 border p-3  linkButton' key={index} id={contact.employeeId} to={`/contactlist/contact/${contact.employeeId}`} >
                                        <h5>{contact.employeeName}</h5>
                                        <p className='m-0'>{contact.employeeEmail}</p>
                                        <p className='m-0'>{contact.employeeMobile}</p>
                                    </Link>
                                </>
                            )
                        })
                    ) :

                    (
                        <li className='w-100 border p-1 text-danger'>No Contacts Found</li>
                    )
                }
            </ul>
           </div>
           </>
       
    )
}

export default ContactList