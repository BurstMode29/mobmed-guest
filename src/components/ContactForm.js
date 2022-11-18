import React from 'react';
import { useState } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import{db} from './firebase';


function ContactForm() {
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [message, setMessage]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault();


    db.collection('contacts').add({
       name:name,
       email:email,
       message:message,
    })
    .then(()=>{
        alert('message sent');
    })
    .catch(error =>{
        alert(error.message);

    });

    setName('')
    setEmail('')
    setMessage('')
};

    return (
        <div className='ContactForm'>
            ContactForm
            <form className='ContactForm' onSubmit={handleSubmit}>

                <div>
                    <div className='Header5'>CONTACT US</div>
                    <p>Occaecat pariatur sint aliquip labore aliqua sunt id consequat do anim. Minim sunt cupidatat veniam veniam aute.</p>
                    <div className='Inputs'>
                        <input className='Name' type='text'
                        value={name}
                        onChange={(e)=>setName(e.target.value)} /><br></br>

                        <input className='Email' type='email'
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/><br></br>


                        <input className='Message' type='text'
                         value={message}
                         onChange={(e)=>setMessage(e.target.value)}/><br></br>

                        <button className='Submit' type='submit'>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ContactForm;