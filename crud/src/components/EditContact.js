import React,{useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

const EditContact = (props) => {
    const history = useHistory();
    let contact = props.location.state.contact;
    console.log(props);


    const [name,setName] = useState(contact.name);
    const [email,setEmail] = useState(contact.email);
    // const [contact,setContact] = useState({});
    const update = (e) => {
        e.preventDefault();
        if(name==="" ||  email===""){
            alert('All the feilds are mandatory');
            return
        }
        else{
            contact = {id:contact.id,name,email};
            setName('');
            setEmail('');
            props.updateContactHandler(contact);
        }
        history.push('/');
    }

    return(
        <div className="ui main">
            <h2>Edit contact details</h2>
            <form action="" className="ui form" onSubmit={update}>
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} name="name" placeholder="name" id="" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" value={email} placeholder="email" id="" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button className="ui button blue" onClick={(e)=>{console.log('yes');
            }}>Update</button>
            </form>
        </div>
    )
}
export default EditContact;