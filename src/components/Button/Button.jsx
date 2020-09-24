import React from 'react';
import PropTypes from 'prop-types';

import './Button.modules.scss';

const Button = ({flightType, changeFlightType}) => { 

    const buttons = flightType.map(({id, title, isChecked}) => {
        const classes = isChecked ? "button button_active" : "button"

        return (
            <label 
                key={id}
                className={classes}>
                    {title}
                    <input 
                        type="radio" 
                        name="flight-type" 
                        value={id}  
                        onChange={(e) => changeFlightType(e)}/>
            </label>
        )
    });
    
    return (
        <form className="results__toggle-btn"  > 
            {buttons}
        </form> 
    )
}

Button.propTypes = {
    flightType: PropTypes.arrayOf(PropTypes.object).isRequired, 
    changeFlightType: PropTypes.func.isRequired,
}

export default Button;

