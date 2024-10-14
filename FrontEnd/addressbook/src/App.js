

import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import FormModal from './components/FormModal';

function App() {

 
  return (
    <div className="App">
      <header className="App-Header">
        <Header/>
      </header>
      <NavBar/>
     <div className='w-100'>
      <ContactList/>
     </div>
     <FormModal/>
    </div>
  );
}

export default App;
