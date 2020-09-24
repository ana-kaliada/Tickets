const allChangesActive = () => {
    return {
        type: 'ALL_CHANGES_ACTIVE',
    };    
};

const allChangesDisabled = () => {
    return {
        type: 'ALL_CHANGES_DISABLED',
    };
};

const changeActive = (id) => {
    return {
        type: 'CHANGE_ACTIVE',
        id,
    };
};

const changeDisabled = (id) => {
    return {
        type: 'CHANGE_DISABLED',
        id,
    };
};

const toggleFlightType = (id) => {
    return {
        type: 'TOGGLE_FLIGHT_TYPE',
        id,
    };
}



export {
    allChangesActive,
    allChangesDisabled,
    changeActive,
    changeDisabled,
    toggleFlightType
};