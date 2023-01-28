import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import {
  StyledContactList,
} from 'components/ContactList/ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;