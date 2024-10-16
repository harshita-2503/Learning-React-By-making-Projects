import styles from './ContactForm.module.css'
import Button from '../Button/button'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

const ContactForm = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [text,setText]=useState("")

    // let name;
    // let email;
    // let text;

    const onViaCallSubmit=()=>{
        console.log("I am call");
    }


    const onSubmit=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value)
        console.log("name",event.target[0].value);
        console.log("email",event.target[1].value);
        console.log("text",event.target[2].value);
    }



  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='20px'/>}/>
        
        <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<IoMdCall fontSize='20px'/>}/>
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize='20px'/>}/>

        <form onSubmit={onSubmit} action="">
            <div className={styles.form_Name}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>
            </div>
            <div className={styles.form_Name}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'/>
            </div>
            <div className={styles.form_Name}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows={8}/>
            </div>

        <div style={{display: 'flex',justifyContent:'end'}}><Button text="SUBMIT BUTTON" /></div>

        <div>{name + " "+ email + " " + text}</div>


        </form>

      </div>
      <div className={styles.contact_image}>
        <img src="./images/Contact.png" alt="contact-img" />
      </div>
    </section>
  )
}

export default ContactForm
