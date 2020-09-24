import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './Filter.modules.scss';


const Filter = ({changes, allChangesActive, allChangesDisabled, changeActive, changeDisabled}) => { 
    
    const toggleChanges = (id) => {
        const [all, ...rest] = changes;
        const restStatus = rest.filter(change => change.id !== id).every(change => change.isChecked === true);

        if(id === 'all') return all.isChecked ? allChangesDisabled() : allChangesActive();
        if(all.isChecked) return (changeDisabled('all'), changeDisabled(id));
        if(restStatus) return (changeActive('all'), changeActive(id));

        changes.forEach(change => {
            if(change.id === id) {
                return change.isChecked ? changeDisabled(id) : changeActive(id)
            };
        });    
    }; 

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

const mapStateToProps = (state) => {
    return {changes: state.changes};
};

const mapDispatchToProps = (dispatch) => {
    const {allChangesActive, allChangesDisabled, changeActive, changeDisabled} = bindActionCreators(actions, dispatch)

    return {
        allChangesActive, 
        allChangesDisabled, 
        changeActive: (id) => dispatch(changeActive(id)), 
        changeDisabled: (id) => dispatch(changeDisabled(id))
    }
};

Filter.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.object).isRequired,
    allChangesActive: PropTypes.func.isRequired,
    allChangesDisabled: PropTypes.func.isRequired,
    changeActive: PropTypes.func.isRequired,
    changeDisabled: PropTypes.func.isRequired,
}  

export default connect(mapStateToProps, mapDispatchToProps)(Filter);