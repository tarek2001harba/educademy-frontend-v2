import React from 'react'
import Button from '../../components/Button'
import './contact.css'
const Contact = () => {
    return (
        <div className="contact align">
            <form className="contact__form" action="">
                <h4 className="contact__title">We are Here to Help</h4>
                <p>Full Name:</p>
                <input type="text" name="fullname"/>
                <p>E-mail:</p>
                <input type="email" name="email"/>
                <p>Subject:</p>
                <input type="text" name="sunject"/>
                <p>Message:</p>
                <textarea type="text" name="message" />
                <Button type="filled" width="100%" text="Submit"/>
            </form>
        </div>
    )
}

export default Contact
