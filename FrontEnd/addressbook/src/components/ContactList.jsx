import React, { useEffect, useState } from 'react'
import './ContactList.css'
import { useAuth } from '../store/auth'
import ContactDetails from './ContactDetails';

const ContactList = () => {
    const [currentContact ,setCurrentContact] =useState({}) ;
    // const [isContact ,setIsContact] =useState(false) ;
    const {contacts ,isDelete ,isContact ,setIsContact ,setIsDeleted } = useAuth();
   

    const handleContact  =(id) => {        
        const selectedContact = contacts.find( (user) => user.employeeId === id );
       
        setCurrentContact(selectedContact);
        debugger
        setIsContact(true) ;
        setIsDeleted(true);
    }


    useEffect( () => {
        if (isContact && currentContact?.employeeId   ) {
            const updatedContact = contacts.find((user) => user.employeeId === currentContact.employeeId);
            setCurrentContact(updatedContact); // Sync the current contact with updated data
        }
    } ,[contacts])

    return (
      <div className='row main-section w-100'>
        <div className='col-4 list-section'>
            <h6>CONTACTS</h6>
            <ul className='p-0 '>
                {
                    (contacts?.length >= 0) ? (
                        contacts?.map(( contact, index) => {
                            return (
                                <>
                                    <li className='w-100 border p-3 ' key={index} id={contact.employeeId}  onClick={(e)=>handleContact(contact.employeeId)}>
                                        <h5>{contact.employeeName}</h5>
                                        <p className='m-0'>{contact.employeeEmail}</p>
                                        <p className='m-0'>{contact.employeeMobile}</p>
                                    </li>
                                </>
                            )
                        })
                    ) :

                    (
                        <li className='w-100 border p-1'>No Contacts Found</li>
                    )
                }
            </ul>
        </div>
        <div className='col-8 details-sectoin'>
        {
            (isContact && isDelete) ? ( <ContactDetails contact={currentContact || null } />) : (null)
        }
        </div>
      </div>
    )
}

export default ContactList