import React from 'react';

import './Button.modules.scss';

const Button = ({children, isActive}) => {
    const classes = isActive ? "button button_active" : "button"

    return (
        <label htmlFor="" className={classes}> 
            <input type="radio"/> 
            {children}
        </label>
    )
}

export default Button;