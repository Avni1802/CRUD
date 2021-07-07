import React,{useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

const AddContact = ({addContactHandler}) => {
    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    // const [contact,setContact] = useState({});
    const add = (e) => {
        e.preventDefault();
        if(name==="" ||  email===""){
            alert('All the feilds are mandatory');
            return
        }
        else{
            const contact = {name,email};
            setName('');
            setEmail('');
            addContactHandler(contact);
        }
        history.push('/');
    }

    return(
        <div className="ui main">
            <h2>Add contact</h2>
            <form action="" className="ui form" onSubmit={add}>
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} name="name" placeholder="name" id="" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" value={email} placeholder="email" id="" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button className="ui button blue" onClick={(e)=>{console.log('yes');
            }}>Add</button>
            </form>
        </div>
    )
}
export default AddContact;