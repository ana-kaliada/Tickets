const initialState = {
    changes: [
        {id:"all", title: "Все", isChecked:false},
        {id:"none", title: "Без пересадок", isChecked:false},
        {id:"one", title: "1 пересадка", isChecked:false},
        {id:"two", title: "2 пересадки", isChecked:false},
        {id:"three", title: "3 пересадки", isChecked:false},
    ],
    flightType: [
        {id:"cheapest", title: "самый дешевый", isChecked:true},
        {id:"fastest", title: "самый быстрый", isChecked:false},
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CHANGES_ACTIVE': {
            return {
                ...state,
                changes: state.changes.map(change => ({...change, isChecked: true}))
            }
        }
        case 'ALL_CHANGES_DISABLED': {
            return {
                ...state,
                changes: state.changes.map(change => ({...change, isChecked: false}))
            }
        }
        case 'CHANGE_ACTIVE': {
            return {
                ...state,
                changes: state.changes.map(change => {
                    if(change.id === action.id) return ({...change, isChecked: true});
                    return change;
                })
            }
        }
        case 'CHANGE_DISABLED': {
            return {
                ...state,
                changes: state.changes.map(change => {
                    if(change.id === action.id) return ({...change, isChecked: false});
                    return change;
                })
            }
        }
        case 'TOGGLE_FLIGHT_TYPE': {
            return {
                ...state,
                flightType: state.flightType.map(type => {
                    if(type.id === action.id) return ({...type, isChecked: true});
                    return {...type, isChecked: false}
                })
            }
        }
        default: return state;
    }
};

export default reducer;