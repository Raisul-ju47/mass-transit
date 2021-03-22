import React from 'react';
import { useHistory } from 'react-router';

const Transit = (props) => {

    const {name, image, id} = props.transit;

    const history = useHistory();

    const handleBooking = () => {
        history.push(`/booking/${id}`)
    }

    return (
        <div onClick={handleBooking} className="ticket">
            <img src={image} alt=""/>
            <h2>{name}</h2>
        </div>
    );
};

export default Transit;