import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_oi2344c', 'template_74u1eqj', form.current, 'cHOV8L79LrMZ1K94M')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awsome">
                <span>Get In Touch With </span>
                <span>Contact</span>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" className='user' name='user-name' placeholder='Name'/>
                <input type="email" className='user' name='user-email' placeholder='Email'/>
                <textarea name='message' placeholder='Message' className='user'/>
                <input type="submit" value='Send' className='button'/>
                <span>{done && 'thanks for contact'}</span>
            </form>
        </div>
    </div>
  )
}
