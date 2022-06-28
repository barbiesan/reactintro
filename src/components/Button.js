import React from 'react';

export default function Button(props) {
    
    return (
        <button className='btn btn-primary w-100' onClick={() => props.handleClick(props.step)}>Step: {props.step} </button>
    )
}