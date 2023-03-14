import React from 'react'
import '../App.css'
import { Button } from './Button'
import './VideoSection.css';


function VideoSection() {
    return (
        <div className="video-container">
            <video src='/videos/video-1.mp4' autoPlay loop muted></video>
            <h1 className='delayed-text'>BOOK BEST PRICE</h1>
            <p className="delayed-text">From RM177</p>
            <div className="video-btns delayed-text">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Book Now</Button>
            </div>
        </div>
    )
}

export default VideoSection;