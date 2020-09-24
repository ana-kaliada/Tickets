import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './Button.modules.scss';

const Button = ({flightType, toggleFlightType}) => { 

    const changeFlightType = (event) => {
        flightType.forEach(type => {
            if(type.id === event.target.value) {
                toggleFlightType(event.target.value)
            }
        });
    }    

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
    toggleFlightType: PropTypes.func.isRequired,
} 

const mapStateToProps = (state) => {
    return {flightType: state.flightType};
};

const mapDispatchToProps = (dispatch) => {
    const {toggleFlightType} = bindActionCreators(actions, dispatch)

    return {
        toggleFlightType: (id) => dispatch(toggleFlightType(id)), 
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Button);

