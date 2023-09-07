import React from 'react';

// Argumenty to propsy
const First = ({a, b}) => {
    return (
        <div>
            <p>{a+b}</p>
            <p>{a*b}</p>
        </div>
    )
}

export default First;