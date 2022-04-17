import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center text-danger'> 
            <h2>Copyright@wahida-{year}</h2>
        </div>
    );
};

export default Footer;