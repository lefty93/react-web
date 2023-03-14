// TODO: Add some rooms using card components, or create new card components. Refer RoxyHotel https://roxyhotel.my/sematan/ 

import React from 'react'
import '../../App.css'
import Footer from '../Footer'


function Rooms() {
    return (
        <>
            <div className='rooms'>
                <h2>OUR ROOMS</h2>
                <p>IN RAIA HOTEL KUCHING</p>
                <p className='rooms-content'>Spaciously designed 237 guestrooms and suites, furnished with a choice of King size or twin bedded, full air-conditioned, LCD TV with satellite news and entertainment channels. Complimentary airport shuttle provided for the convenience of our guest.</p>
                <div className="rooms-container">
                    <div>Twin ROOM</div>
                    <div>Twin ROOM</div>
                    <div>Twin ROOM</div>
                    <div>Twin ROOM</div>
                    <div>Twin ROOM</div>
                    <div>Twin ROOM</div>
                </div>
            </div>
            
            <Footer />
        </>

    )
}

export default Rooms

