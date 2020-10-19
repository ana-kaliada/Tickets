import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSearchId } from '../../services/TicketsServices';
import { fetchSearchId } from '../../redux/actions';

import Button from '../../components/Button';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import ErrorIndicator from '../../components/ErrorIndicator';
import TicketsList from '../TickestList';

import style from './App.module.scss';
import Logo from '../../img/Logo.png';

const App = ({ stops, loading, error, errorId, fetchId }) => {
  useEffect(() => {
    fetchId();
    if (errorId) throw new Error(errorId);
  }, [fetchId, errorId]);

  function TicketsContent() {
    if (error) {
      return <ErrorIndicator>Кажется, что-то пошло не так...</ErrorIndicator>;
    }

    if (stops.length === 0) {
      return (
        <ErrorIndicator>
          Рейсов, подходящих под заданные фильтры, не найдено, пожалуйста выберите хотя бы один фильтр
        </ErrorIndicator>
      );
    }

    return <TicketsList />;
  }

  return (
    <section className={style.tickets}>
      <div className={style.logo}>
        <img src={Logo} alt="logo" />
      </div>

      <aside className={style.filters}>
        <Filter />{' '}
      </aside>

      <main className={style.flights}>
        <Button />

        {loading && <Loader />}

        {TicketsContent()}
      </main>
    </section>
  );
};

App.defaultProps = {
  error: null,
  errorId: null,
};

App.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.number,
  errorId: PropTypes.number,
  fetchId: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filters: { stops }, ticketsData: { loading, error }, searchId: { error: errorId } }) => {
  return {
    stops,
    loading,
    error,
    errorId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchId: fetchSearchId(getSearchId),
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
