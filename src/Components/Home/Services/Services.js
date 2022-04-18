import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-dark text-center mt-5 mb-5'>Here is our Special<span className='text-success'> Packages</span></h1>
                <div className="services-container">
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );

};

export default Services;