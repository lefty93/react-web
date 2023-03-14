// TODO: Add a map, contact, address
import React from 'react'
import '../../App.css'
import Footer from '../Footer'



function Contact() {
    return (
        <>
            <div className='contact'>
                <div className="contact-header">
                    <h2>GET IN TOUCH</h2>
                    <p>WE'RE FRIENDLY</p>
                </div>
                <div className="contact-info">
                    <div className="contact-address">
                        <h3>ADDRESS</h3>
                        <p>No 1, Jalan Lapangan Terbang, 93259 Kuching, Sarawak</p>
                    </div>
                    <div className="contact-email">
                        <h3>WRITE US</h3>
                        <p>info@raiahotels.com.my</p>
                    </div>
                    <div className="contact-phone">
                        <h3>PHONE</h3>
                        <p>+6082268585</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact