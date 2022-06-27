import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';
import s from './App.module.css';

const App = () => {
  return (
    <>
      <header>
        <div>
          <h1 className={s.title}>Phonebook</h1>
        </div>
      </header>
      <div>
        <ContactForm />
      </div>

      <div className={s.sectionList}>
        <h2 className={s.contact}>Filter Contacts</h2>
        <Filter />
        <h2 className={s.contact}>Contacts</h2>
        <ContactList />
        <Toaster />
      </div>
    </>
  );
};

export default App;
