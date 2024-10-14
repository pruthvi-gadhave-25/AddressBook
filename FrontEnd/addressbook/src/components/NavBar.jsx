import {React} from  'react'
import { useAuth } from '../store/auth';


const NavBar = () => {
const {handleOpen ,handleAddButton}  = useAuth() ;


const handleAddContact = () => {
    handleOpen() ;
    handleAddButton() ;
}
    return (

        <div className="container-fluid bg-dark-subtle ">
            <ul className='d-flex p-2'>
                <li className='px-3'>HOME</li>
                <li className='px-3' onClick={handleOpen}> ADD </li>                                                 
            </ul>
        </div>

    )
}

export default NavBar