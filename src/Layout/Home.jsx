import React from 'react';
import Banner from '../Pages/Home/Banner/Banner';
import Gallery from '../Pages/Home/Gallery/Gallery';
import TopClass from '../Pages/Home/TopClass/TopClass';
import TopInstractor from '../Pages/Home/TopInstractor/TopInstractor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TopClass></TopClass>
            <TopInstractor></TopInstractor>
        </div>
    );
};

export default Home;