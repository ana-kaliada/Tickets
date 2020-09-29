import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {allChangesActive, allChangesDisabled, changeActive, changeDisabled} from '../../actions';

import './Filter.modules.scss';


const Filter = ({changes, allChangesActive, allChangesDisabled, changeActive, changeDisabled}) => { 

    const changesNumber = [
        {id:"all", title: "Все"},
        {id:0, title: "Без пересадок"},
        {id:1, title: "1 пересадка"},
        {id:2, title: "2 пересадки"},
        {id:3, title: "3 пересадки"},
    ];
    
    const toggleChanges = (id) => {
        if(id === 'all') return changes.includes(id) ? allChangesDisabled() : allChangesActive();
        if(changes.includes('all')) return (changeDisabled('all'), changeDisabled(id));
        if(!changes.includes(id)) {
            if(!changes.includes('all') && changes.length >= 3) return allChangesActive();
            return changeActive(id);
        }
        return changeDisabled(id);
    }; 
    
    return (
        <fieldset className="filters">
            <h1 className="filters__title">Количество пересадок</h1>
            {
                changesNumber.map(({id, title}) => {
                    let classes;
                    if(changes.includes('all')) classes = "filters__checkbox filters__checkbox_checked";
                    if(changes.length === 0 || !changes.includes(id)) classes = "filters__checkbox";
                    if(changes.includes(id)) classes = "filters__checkbox filters__checkbox_checked";

                    return (
                        <label 
                            key={title}
                            className="filters__filter"> 
                            <div className={classes} />
                            <input 
                                type="checkbox" 
                                name={id} value={title}  
                                onChange={()=>toggleChanges(id)} />
                            {title} 
                        </label>
                    );
                })
            }           
        </fieldset>
    ) 
    
}

const mapStateToProps = (state) => {
    return {changes: state.changes};
};

const mapDispatchToProps = {
    allChangesActive, 
    allChangesDisabled, 
    changeActive, 
    changeDisabled,
};

Filter.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.any).isRequired,
    allChangesActive: PropTypes.func.isRequired,
    allChangesDisabled: PropTypes.func.isRequired,
    changeActive: PropTypes.func.isRequired,
    changeDisabled: PropTypes.func.isRequired,
}  

export default connect(mapStateToProps, mapDispatchToProps)(Filter);