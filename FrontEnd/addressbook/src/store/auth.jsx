import { createContext, useContext, useEffect, useState } from "react";
import { getContacts } from "../services/serviceApi";

export const AuthContext = createContext() ;

export const AuthProvider = ({children})=> {
    const [contacts ,SetContcts] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditClicked  , setIsEditClicked ] = useState(false) ; 
    const [currentContact , SetCurrentContact ] = useState({
    
        employeeName : '' ,
        employeeEmail: '',
        employeeMobile: '',
        employeeAddress: ''
    })

    const handleOpen =() => {
        setShow(true) ;
    }
    const handleClose = () => setShow(false);

    const handleEdit =(id) => {
            const currentContact  = contacts.find( (cnt) => cnt.employeeId == id) ;
            SetCurrentContact( currentContact) ;
            handleOpen() ;
            // debugger ;
            setIsEditClicked(true) ;
    }

    const handleDelete = () => {

    }

    useEffect(()=> {
    const fetchContacts = async () => {
        const data = await getContacts()
        SetContcts(data) ;
    }
    fetchContacts();
    } ,[])
    return <AuthContext.Provider value={{contacts , show , handleClose, handleOpen ,handleDelete , handleEdit  ,currentContact , isEditClicked}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth =  () => {
    return useContext(AuthContext) ;
}