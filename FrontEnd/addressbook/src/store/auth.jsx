import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { addContact, deleteContact, getContacts, updateContact } from "../services/serviceApi";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const initialContact ={
    employeeId : '' ,
    employeeName: '',
    employeeEmail: '',
    employeeMobile: '',
    employeeAddress: ''
}
export const AuthProvider = ({ children }) => {
    const [contacts, SetContcts] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [isContact ,setIsContact] =useState(false) ;
    const [isDelete , setIsDeleted]  =useState( false ) ;
    
    const [currentContact, SetCurrentContact] = useState(initialContact) ;
    const navigate = useNavigate() ;

      //fetch Contacts
      const fetchContacts = async () => {
      
        const data = await getContacts()
        SetContcts(data);
    }

    //OPEN form
    const handleOpen = () => {setShow(true);}
    //CLOSE FORM
    const handleClose = () => {
        SetCurrentContact(initialContact)
        setShow(false);
        setIsEditClicked(false);
        navigate("/contactlist");
    };


    // from navbar open form Add button
    const handleAddButton = () => {
        SetCurrentContact(initialContact)
    }
    // for ADD  submitting new Contact
    const handleAddContact =async  () => {

      await   addContact(currentContact);
        console.log(currentContact);
        fetchContacts() ;

    }
 

    const handleEdit = (id) => {
        debugger ;
      
        const currentContact = contacts.find((cnt) => cnt.employeeId === id);
        SetCurrentContact(currentContact);
        setIsEditClicked(true);
        handleOpen() ;
    }

    const handleUpdate = async () => {

       await  updateContact(currentContact, currentContact.employeeId);       
    fetchContacts() ;
   
    }

    //DELETE
    const handleDelete =async  (id) => {
        alert("want to delete " + currentContact.employeeName)
       await  deleteContact(id) ;
       setIsDeleted(true);
       setIsContact(false) ;
        fetchContacts() ;
        navigate("/contactlist")
    }


    useEffect(() => {
      
        fetchContacts();

    }, [])


    useEffect(() => {
        if (isEditClicked) {
            handleOpen();  // Open modal after setting isEditClicked to true
        }
    }, [isEditClicked]);
    return <AuthContext.Provider value={{
        contacts, show, handleClose, handleOpen, handleDelete, handleEdit, handleAddButton, SetCurrentContact, handleAddContact, handleUpdate
        , currentContact, isEditClicked ,isDelete ,setIsDeleted ,isContact ,setIsContact
    }}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    return useContext(AuthContext);
}