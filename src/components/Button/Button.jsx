import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleFlightType} from '../../actions';

import './Button.modules.scss';

const Button = ({flightType, toggleFlightType}) => { 

    const buttons = [
        {id:"price", title: "самый дешевый"},
        {id:"duration", title: "самый быстрый"},
    ];

    const changeFlightType = (event) => flightType !== event.target.value && toggleFlightType(event.target.value);    

    return (
        <form className="results__toggle-btn"  > 
            {
                buttons.map(({id, title}) => {
                    const classes = flightType === id ? "button button_active" : "button"

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
                })
            }
        </form> 
    )
}

Button.propTypes = {
    flightType: PropTypes.string.isRequired, 
    toggleFlightType: PropTypes.func.isRequired,
} 

const mapStateToProps = (state) => {
    return {flightType: state.flightType};
};

const mapDispatchToProps = {
    toggleFlightType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

