import React from 'react'
import {Link} from 'react-router-dom';

const ContactCard = ({contact,clickHandler}) => {

    return(
    <div className="border-bottom m-3 pb-3" style={{display:'flex',justifyContent: 'space-between'}}>
        <div className="content" style={{textDecoration:'none'}}>
            <Link to={{
                pathname:`/contact/${contact.id}`,
                state:{contact:contact}
                }} >

            <div className="header" style={{color:'black',decoration: 'none'}}>{contact.name}</div>
            <div>{contact.email}</div>
            </Link>
        </div>
        <div className="d-flex justify-content-space-between">

        <Link to={{
                pathname:`/edit`,
                state:{contact:contact}
                }} >
        <i 
        className="edit outline right icon" 
        style={{color:'blue',marginTop:'7px',marginRight:'10px'}}
        ></i>
             </Link>

        <i 
        className="trash alternate outline right icon" 
        style={{color:'red',marginTop:'7px'}}
        onClick={()=>clickHandler(contact.id)}
        ></i>
        </div>
    </div>
);
}

export default ContactCard;