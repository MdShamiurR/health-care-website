import React from 'react';
import { useParams } from 'react-router';

import './Booking.css'


const Booking = () => {
    const { serviceDescription } = useParams();
    return (
        <div className="backGround img-fluid">
            <h1 className="text-warning">Click on <span className="text-primary fs-bold">Confirm</span> for Booking :
                <br />
                {serviceDescription}</h1>
            <button className="btn btn-warning fs-bold">Confirm</button>
        </div>
    );
};

export default Booking;