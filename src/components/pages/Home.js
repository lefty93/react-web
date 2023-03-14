import React from 'react';
import '../../App.css'
import VideoSection from '../VideoSection'
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <VideoSection />
            <About />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;