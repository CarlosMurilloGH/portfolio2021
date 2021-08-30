import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Work from '../components/Work';

export default function HomePage() {
    return (
        <div>
            <HeroSection/>
            <Skills />
            <Work />
            <Footer />
        </div> 
    )
}
