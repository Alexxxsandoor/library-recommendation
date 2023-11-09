import React from 'react';

const Footer = () => {
    const todayYear = new Date().getFullYear()

    return (
        <div id='footer' className='footer bg-dark text-white pb-1 pt-3 mt-4'>
            <div className='container'>
                <h6 className='text-center'>© {todayYear}. All Rights Reserved</h6>
            </div>
        </div>
    );
};

export default Footer;