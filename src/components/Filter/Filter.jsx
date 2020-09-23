import React from 'react';

import './Filter.modules.scss';

const Filter = () => {

    const filtres = ["Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];

    const content = filtres.map(filtre => (
        <label 
            key={filtre}
            className="filters__filter"> 
            <div className="filters__checkbox filters__checkbox_checked" />
            <input type="checkbox" name="tickets" value={filtre}/>
            {filtre} </label>
    ))

    return (
        <fieldset className="filters">
            <h1 className="filters__title">Количество пересадок</h1>
            {content}            
        </fieldset>
    )
}

export default Filter;