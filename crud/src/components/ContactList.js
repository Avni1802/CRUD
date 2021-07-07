import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = ({contacts,getContactId}) => {
    const deleteContactHandler = (id) => {
        getContactId(id);
    };
    
    const List = contacts.map((contact) => {
        return(
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id} 
            />
        );
    });


    return(
        <div className="main">
            <h2 className="border-bottom" style={{display: 'flex',justifyContent:'space-between'}} >Contact List
            <Link to="/add">
                <button className="ui button blue right"> Add Contact</button>
            </Link>
            </h2>
        <div className="ui celled list">
            {List}
        </div>
        </div>
    )

}

export default ContactList;