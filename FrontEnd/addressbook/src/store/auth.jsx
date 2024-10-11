import { createContext, useContext, useEffect, useState } from "react";
import { addContact, deleteContact, getContacts, updateContact } from "../services/serviceApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [contacts, SetContcts] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [currentContact, SetCurrentContact] = useState({

        employeeName: '',
        employeeEmail: '',
        employeeMobile: '',
        employeeAddress: ''
    })

    const handleOpen = () => {
        console.log(isEditClicked);

        if (!isEditClicked) {
            SetCurrentContact({
                employeeName: '',
                employeeEmail: '',
                employeeMobile: '',
                employeeAddress: ''
            })
        }
        setShow(true);
    }


    //from navbar open form add button
    const handleAddButton = () => {
        SetCurrentContact({
            employeeName: '',
            employeeEmail: '',
            employeeMobile: '',
            employeeAddress: ''
        })
    }
    // for submitting new Contact
    const handleAddContact = () => {

        addContact(currentContact);
        console.log(currentContact);

    }
    const handleClose = () => {
        SetCurrentContact({
            employeeName: '',
            employeeEmail: '',
            employeeMobile: '',
            employeeAddress: ''
        })
        setShow(false);
        setIsEditClicked(false);
    };

    const handleEdit = (id) => {
        const currentContact = contacts.find((cnt) => cnt.employeeId == id);
        SetCurrentContact(currentContact);
        setIsEditClicked(true);
        // debugger ;

    }

    const handleUpdate = () => {

        updateContact(currentContact, currentContact.employeeId);
        console.log(currentContact);

    }

    const handleDelete = (id) => {
        alert("want to delete " + currentContact.employeeName)
        deleteContact(id)
    }

    useEffect(() => {
        const fetchContacts = async () => {
            const data = await getContacts()
            SetContcts(data);
        }
        fetchContacts();
    }, [])


    useEffect(() => {
        if (isEditClicked) {
            handleOpen();  // Open modal after setting isEditClicked to true
        }
    }, [isEditClicked]);
    return <AuthContext.Provider value={{
        contacts, show, handleClose, handleOpen, handleDelete, handleEdit, handleAddButton, SetCurrentContact, handleAddContact, handleUpdate
        , currentContact, isEditClicked
    }}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    return useContext(AuthContext);
}