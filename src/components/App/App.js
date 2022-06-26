import { useSelector } from 'react-redux';
import { getVisibleItems } from '../../redux/contacts/contacts-selector';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import s from './App.module.css';

const App = () => {
  const visibleItems = useSelector(getVisibleItems);

  return (
    <>
      <header>
        <div>
          <h1 className={s.title}>Phonebook</h1>
        </div>
      </header>
      <div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className={s.sectionList}>
        <h2 className={s.contact}>Filter Contacts</h2>
        <Filter />
        <h2 className={s.contact}>Contacts</h2>
        {visibleItems[0] ? (
          <ContactList />
        ) : (
          <p className={s.text}>There’s nothing here yet...</p>
        )}
      </div>
    </>
  );
};

export default App;
