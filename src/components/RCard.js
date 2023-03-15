import React from 'react';
import './RCard.css';

function RCard(props) {
    return (
        <div className="card">
            <img src={props.src} alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                
                <div className="card-details">
                    
                    <div className="card-price">
                        <h6>Starting from {props.price}/Night </h6>
                        
                    </div>
                </div>
                <button className="card-button">Book Now</button>
            </div>
        </div>
    );
}

export default RCard;