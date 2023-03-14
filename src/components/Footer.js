import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
      <div className='footer-container'>
          <section className="footer-subscription">
              <p className="footer-subscription-heading">
                  <i className="fa-solid fa-envelope-open-text"></i>
                  Check Out The News & Promotions
              </p>
              <Button buttonStyle='btn--outline'>NEWS & PROMOTIONS</Button>
          </section>
    </div>
  )
}

export default Footer