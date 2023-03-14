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
            <div className='map-container'>
                <div className="social-container">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/raiahotel/"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/raiahotel"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/raiahotel/"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4685390558643!2d110.33746431527949!3d1.4904074615216032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba7b7f0cfdbc9%3A0xd7978523d1b2775!2sRaia%20Hotel%20%26%20Convention%20Centre%20Kuching!5e0!3m2!1sen!2smy!4v1678807049464!5m2!1sen!2smy" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
            </div>
            <Footer />

        </>

    )
}

export default Contact