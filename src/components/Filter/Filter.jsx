import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Filter.modules.scss';


const Filter = ({changes, toggleChanges}) => {   

    const changesContent = changes.map(({id, title, isChecked}) => {
        const classes = isChecked 
            ? "filters__checkbox filters__checkbox_checked" 
            : "filters__checkbox"

        return (
        <label 
            key={title}
            className="filters__filter"> 
            <div className={classes} />
            <input type="checkbox" name={id} value={title}  onChange={()=>toggleChanges(id)} />
            {title} </label>)
    });

    return (
        <fieldset className="filters">
            <h1 className="filters__title">Количество пересадок</h1>
            {changesContent}           
        </fieldset>
    )
}

const mapStateToProps = ({changes}) => {
    return { changes};
};

Filter.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleChanges: PropTypes.func.isRequired,
} 

export default connect(mapStateToProps,)(Filter);