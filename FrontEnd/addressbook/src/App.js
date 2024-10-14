

import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import FormModal from './components/FormModal';
import { Route, Routes } from 'react-router-dom';
import ContactDetails from './components/ContactDetails';
function App() {


  return (
    <div className="App">
      <header className="App-Header">
        <Header />
      </header>
      <NavBar />

      <div className='w-100'>
        <div className='row main-section w-100'>
          <div className='col-4 list-section'>
          <ContactList/>
          </div>
          <div className='col-8 details-sectoin'>
            <Routes>
              <Route path='/contactlist/contact/:id' element={<ContactDetails />}></Route>

              <Route path="/contacts/form/add" element={<FormModal />} />
              <Route path="/contacts/form/edit/:id" element={<FormModal />} />

            </Routes>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
