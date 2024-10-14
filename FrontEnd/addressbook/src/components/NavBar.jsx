import {React} from  'react'
import { useAuth } from '../store/auth';
import {Link}  from 'react-router-dom' ;


const NavBar = () => {
const {handleOpen ,handleAddButton}  = useAuth() ;


const handleAddContact = () => {
    handleOpen() ;
    handleAddButton() ;
}
    return (

        <div className="container-fluid bg-dark-subtle ">
            <ul className='d-flex p-2'>

                <Link className='px-3 linkButton'  to='/contactlist'>HOME</Link>
                <Link className='px-3 linkButton' to='/contacts/form/add' onClick={handleOpen}> ADD </Link>                                                 
            </ul>
        </div>

    )
}

export default NavBar