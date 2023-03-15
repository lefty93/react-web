import React from 'react'
import '../../App.css'
import RCard from '../RCard'
import Footer from '../Footer'




function Rooms() {
    return (
        <>
            <div className='rooms'>
                <h2>OUR ROOMS</h2>
                <p>IN RAIA HOTEL KUCHING</p>
                <p className='rooms-content'>Spaciously designed 237 guestrooms and suites, furnished with a choice of King size or twin bedded, full air-conditioned, LCD TV with satellite news and entertainment channels. Complimentary airport shuttle provided for the convenience of our guest.</p>
            </div>
            <div className="rooms__container">
                <RCard src='images/img-1.jpg' name='Superior Twin' price='from MYR177'/>
                <RCard src='images/img-2.jpg' name='Superior King' price='from MYR177' />
                <RCard src='images/img-3.jpg' name='Executive Suites' price='from MYR296' />
                <RCard src='images/img-4.jpg' name='Studio Suites' price='from MYR342' />
                <RCard src='images/img-5.jpg' name='Family Suites' price='from MYR456' />
                <RCard src='images/img-6.jpg' name='Residential Suite' price='from MYR2850' />
                <RCard src='images/img-0.jpg' name='Presidential Suite' price='from MYR3990' />
            </div>
            <Footer />
        </>

    )
}

export default Rooms

