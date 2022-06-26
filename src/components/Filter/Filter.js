import contactsActions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterValue = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <label>
      <input
        placeholder="Enter to search..."
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
