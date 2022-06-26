import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.wrapper}>
        <a className={s.link} href="tel:{number}">
          <p className={s.text}>{name}</p>
          <div>
            <p className={s.number}>{number}</p>
          </div>
        </a>
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(contactsActions.deleteContact(id))}
          aria-label="delete contact"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
