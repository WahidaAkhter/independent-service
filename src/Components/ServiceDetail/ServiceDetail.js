import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <div className='text-center'>
            <h2>detail services:{serviceId}</h2>
            <div>
                <Link to="/checkout">
                    <button> Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;