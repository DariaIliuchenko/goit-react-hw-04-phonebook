import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default class ContactListItem extends React.Component {
    render() {
        const { id, name, number, onDeleteContact } = this.props;
        return (
            <>
            <p className={s.contact}>{name}: {number}</p>
            <button 
            id={id}
            className={s.deleteBtn}
            type="button"
            onClick={onDeleteContact}>
              Delete
            </button>
          </>
        );
      }
}

ContactListItem.propTypes = { 
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired 
};