import React from 'react';
import './RCard.css';

function RCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-description">{props.description}</p>
                <div className="card-details">
                    <div className="card-room-type">
                        <h6>Room Type:</h6>
                        <p>{props.roomType}</p>
                    </div>
                    <div className="card-price">
                        <h6>Price:</h6>
                        <p>{props.price}</p>
                    </div>
                </div>
                <button className="card-button">Book Now</button>
            </div>
        </div>
    );
}

export default RCard;