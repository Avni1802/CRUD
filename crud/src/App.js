import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import './App.css';
import api from './api/contacts';
import Header from './components/Header';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);

  //retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id:uuid(),
      ...contact
    };
    const response = await api.post("/contacts",request);
    await setContacts([...contacts,response.data]);
    console.log(contacts);
  };
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`,contact);
    const {id, name, email} = response.data;
    console.log(response.data);
    setContacts(contacts.map((contact)=>{
      return contact.id === id ? {...response.data} : contact;
    }));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const list = contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(list);
  }

  useEffect(()=>{
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }

    getAllContacts();

  },[]);

  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
        <Router>    
        <Header />
        <Route 
            exact
            path='/' 
            render={(props)=>(
                <ContactList
                {...props} 
                contacts={contacts} 
                getContactId={removeContactHandler}
            />

        )} />
        <Route 
            path='/add' 
            render={(props)=>(
                <AddContact 
                    {...props} 
                    addContactHandler={addContactHandler}
                    />
                )}
                    />
        <Route
            path='/contact/:id'
            component={ContactDetail}
        />

        <Route
          path='/edit'
          render={(props)=>(
            <EditContact
              {...props}
              updateContactHandler={updateContactHandler}
              />
          )}
          />
    

      </Router>
    </div>
  );
}

export default App;
