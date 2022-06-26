// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getVisibleItems } from '../../redux/contacts/contacts-selector';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(getVisibleItems);

  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
