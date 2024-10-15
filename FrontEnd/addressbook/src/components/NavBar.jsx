import {React} from  'react'
import { useAuth } from '../store/auth';
import {Link, NavLink}  from 'react-router-dom' ;


const NavBar = () => {
const {handleOpen ,handleAddButton}  = useAuth() ;


const handleAddContact = () => {
    handleOpen() ;
    handleAddButton() ;
}
    return (

        <div className="container-fluid bg-dark">
            <ul className='d-flex'>

                <NavLink activeClasName="active" className='p-2 linkButton fw-medium text-white'  to='/contactlist'>HOME</NavLink>
                <NavLink activeClasName="active" className='p-2 linkButton fw-medium text-white' to='/contacts/form/add' onClick={handleOpen}> ADD </NavLink>                                                 
            </ul>
        </div>

    )
}

export default NavBar