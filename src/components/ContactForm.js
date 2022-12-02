import React from 'react';
import { useState } from 'react';




function ContactForm() {
// const [name, setName]=useState("");
// const [email, setEmail]=useState("");
// const [message, setMessage]=useState("");

// const handleSubmit=(e)=>{
//     e.preventDefault();


//     db.collection('contacts').add({
//        name:name,
//        email:email,
//        message:message,
//     })
//     .then(()=>{
//         alert('message sent');
//     })
//     .catch(error =>{
//         alert(error.message);

//     });

//     setName('')
//     setEmail('')
//     setMessage('')
// };

    return (
<<<<<<< HEAD
        <div className='ContactForm'>
            ContactForm
            <form className='ContactForm' >
=======
        <div className='ContactForm1'>
            <form className='ContactForm' onSubmit={handleSubmit}>
>>>>>>> a750aad9e6776aa1274db44ec35c4095d7d4a964

                <div>
                    <div className='Header5'>CONTACT US</div>
                    <p>Occaecat pariatur sint aliquip labore aliqua sunt id consequat do anim. Minim sunt cupidatat veniam veniam aute.</p>
                    <div className='Inputs'>
                        <input className='Name' type='text'
                        
                        /><br></br>

                        <input className='Email' type='email'
                        /><br></br>


                        <input className='Message' type='text'
                        /><br></br>

                        <button className='Submit' type='submit'>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ContactForm;