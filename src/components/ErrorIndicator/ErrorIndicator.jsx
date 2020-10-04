import React from 'react';
import PropTypes from 'prop-types';
import style from './ErrorIndicator.module.scss';

const ErrorIndicator = ({children}) => {
    return <div className={style.error}>{children}</div>
}

ErrorIndicator.propTypes = {
    children: PropTypes.string.isRequired
}

export default ErrorIndicator;