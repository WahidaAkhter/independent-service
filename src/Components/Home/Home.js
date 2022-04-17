import React from 'react';
import Blogs from '../Blogs/Blogs';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;