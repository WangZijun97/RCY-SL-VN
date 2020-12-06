import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = (props) => {
    const { label, rating } = props;

    const fillColor = (label === "Service") ? "#8cf" : "#9b9";
    const maxStars = (label === "Service") ? 7 : 7;
    const filledProps = { color: fillColor, opacity: 1 };
    const unfilledProps = { opacity: 0.4 };

    return (<div className="rating">
        <div className="rating-label">{label}</div>
        <div className="stars">
            {[...Array(maxStars)].map((_, i) => (<FontAwesomeIcon
                icon={faStar}
                {...(i < rating ? filledProps : unfilledProps)}
            />))}
        </div>
    </div>)
}

export default Stars
