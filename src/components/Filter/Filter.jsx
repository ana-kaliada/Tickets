import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import * as actions from '../../actions';

import style from './Filter.module.scss';

const styleBind = classNames.bind(style);

const Filter = ({stops, toggleAllStops, addStop, removeStop}) => { 

    const changesNumber = [
        {id:"all", title: "Все"},
        {id:0, title: "Без пересадок"},
        {id:1, title: "1 пересадка"},
        {id:2, title: "2 пересадки"},
        {id:3, title: "3 пересадки"},
    ];
    
    const toggleChanges = (id) => {
        if(id === 'all') return toggleAllStops();
        if(stops.includes('all')) {
            removeStop('all');
            removeStop(id);
        } 
        if(stops.includes(id)) return removeStop(id);
        if(stops.length >= 3) return toggleAllStops();
        return addStop(id); 
    }; 
    
    return (
        <fieldset className={style.filters}>
            <h1 className={style.title}>Количество пересадок</h1>
            {
                changesNumber.map(({id, title}) => {
                    const checkbox = styleBind({
                        checkbox: true,
                        checkbox_checked: (stops.includes('all') || stops.includes(id))
                    });  

                    return (
                        <label 
                            key={title}
                            className={style.filter}> 
                            <div className={checkbox} />
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

const mapStateToProps = ({filters: {stops}}) => {
    return {
        stops
    };
};

Filter.propTypes = {
    stops: PropTypes.arrayOf(PropTypes.any).isRequired,
    toggleAllStops: PropTypes.func.isRequired,
    addStop: PropTypes.func.isRequired,
    removeStop: PropTypes.func.isRequired,
}  

export default connect(mapStateToProps, actions)(Filter);