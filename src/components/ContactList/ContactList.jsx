import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import Contact from '../Contact';
import css from './ContactList.module.css';

function ContactList(onDeleteContact) {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
