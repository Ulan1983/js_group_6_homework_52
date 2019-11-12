import React from 'react';
import './Circle.css';

const Circle = props => {
    return (
        <div className='circle'>
            {props.number}
        </div>
    )
};

export default Circle;