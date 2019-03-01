import React from 'react';
import './Tooltip.css';

/* Normally we would prefer to use a className and CSS to control the style, but here we've used inline styles. This is because we don't want to write a CSS rule for every possible color someone could use; inline styles give more control to the parent component. */

function Tooltip(props) {
    return(
        <span className='Tooltip'>
            <span className='Tooltip-content' style={{ color: props.color }}>
                {props.children}
            </span>
            <div className='Tooltip-message'>
                {props.message}
            </div>
        </span>
    )
}

export default Tooltip;