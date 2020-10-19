import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import * as actions from '../../redux/actions';

import style from './Button.module.scss';

const styleBind = classNames.bind(style);

const Button = ({ sortBy, toggleSortBy }) => {
  const buttons = [
    { id: 'price', title: 'самый дешевый' },
    { id: 'duration', title: 'самый быстрый' },
  ];

  return (
    <form className={style.buttons}>
      {buttons.map(({ id, title }) => {
        const button = styleBind({
          button: true,
          button_active: sortBy === id,
        });

        return (
          <label key={id} className={button}>
            {title}
            <input type="radio" name="flight-type" value={id} onChange={(event) => toggleSortBy(event.target.value)} />
          </label>
        );
      })}
    </form>
  );
};

Button.propTypes = {
  sortBy: PropTypes.string.isRequired,
  toggleSortBy: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filters: { sortBy } }) => {
  return { sortBy };
};

export default connect(mapStateToProps, actions)(Button);
