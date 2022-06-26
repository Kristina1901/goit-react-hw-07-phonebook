import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/contacts/contacts-selector';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleGetValue = e => {
    const field = e.currentTarget.name;

    switch (field) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        throw new Error();
    }
  };

  const showNotification = name => {
    alert(`${name} is already in contacts`);
  };

  const repeatCheck = newName => {
    return items.find(({ name }) => name.toLowerCase() === newName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (repeatCheck(name)) {
      showNotification(name);
      return;
    }

    dispatch(contactsActions.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.namefirst}
          value={name}
          onChange={handleGetValue}
          placeholder="Rosie Simpson"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.inputc}>
        Number
        <input
          className={s.input}
          value={number}
          onChange={handleGetValue}
          placeholder="459-12-56"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.button} type="submit" aria-label="button-submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
