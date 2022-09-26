import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default class Filter extends React.Component {
  render() {
    const { filter, onChange} = this.props
    return (
      <div className={s.filter}>
        Find contacts by name
        <label className={s.filterLabel}>
          <input 
          type='text'
          name={filter}
          className={s.filterInput}
          onChange={onChange} />
        </label>
      </div>
    );
  }
}

Filter.propTypes = { 
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired 
};