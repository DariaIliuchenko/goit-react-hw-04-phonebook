import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';
import s from './ContactList.module.css';

export default class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
            <ContactListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
            />
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = { 
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func.isRequired 
};