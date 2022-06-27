import PropTypes from 'prop-types';
import s from './ContactListElem.module.css';

const ContactListElem = ({ name, number, onDelete }) => {
  return (
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
        onClick={onDelete}
        aria-label="delete contact"
      >
        Delete
      </button>
    </div>
  );
};

ContactListElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListElem;
