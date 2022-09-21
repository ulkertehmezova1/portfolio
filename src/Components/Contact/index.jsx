import React, { useRef } from 'react'
import './style.css'
import emailjs from 'emailjs-com'
const Contact = () => {
    const form=useRef(null);
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_02w3ngt', 'template_rv45j86', form.current, '20NXbl593s-zXpFTo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
  return (
    <div className="fields">

<button className='contact-btn'>Contact</button>

 <h3 className='map-header'>Get in Touch</h3>

 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.62360562377!2d49.78474810836727!3d40.3945712676688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLEsIEF6yZlyYmF5Y2Fu!5e0!3m2!1saz!2s!4v1663743224775!5m2!1saz!2s"  
 loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>

				<form ref={form} onSubmit={sendEmail}>
                    <div>
                    <input type={'text'} name="from_name" id="from_name" placeholder='Name' required/>
                    </div>
                    <div>
                    <input type={'email'} name="email_id" id="email_id" placeholder='Email' required/>
                    </div>
                    <div>
                    <textarea name="message" id="message" placeholder='Message' required></textarea>
                    </div>
                    <div>
                        <button type='submit' className='btn-form'>Send Message</button>
                    </div>
                </form>
		</div>
  )
}

export default Contact