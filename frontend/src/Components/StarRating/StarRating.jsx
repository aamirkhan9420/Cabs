import StarsRating from 'stars-rating'
import React from 'react'


export default function RatingChanged({ props }) {

    return (
        <StarsRating
            count={props}
            value={props}
            color4={'#ffd700'} />

    );
}

