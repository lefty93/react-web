import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>DISCOVER OUR ROOMS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            label='From RM 177'
                            text='Superior Twin. Rooms are fitted with a Twin single-size bed (34 sqm).'
                            path='/rooms'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            label='From RM 177'
                            text='Superior King. Rooms are fitted with a King-size bed (34 sqm)'
                            path='/rooms'
                        />
                        <CardItem
                            src='images/img-7.jpg'
                            label='From MYR 456'
                            text='Family Suites. Unit consist of 2 bedrooms suite fitted with a King-size and Twin single-size bed (113 sqm).'
                            path='/rooms'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards