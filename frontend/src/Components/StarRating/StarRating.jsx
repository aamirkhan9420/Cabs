import StarsRating from 'stars-rating'
import React from 'react'
import { render } from 'react-dom'
let n = 2
export default function RatingChanged({ props }) {

    return (
        <StarsRating
            count={props}
            value={props}
            color4={'#ffd700'} />

    );
}

