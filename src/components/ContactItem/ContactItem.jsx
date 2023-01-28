import {
  StyledContactItem,
  StyledContactItemName,
  StyledContactItemNumber,
  StyledContactItemDelete,
} from 'components/ContactItem/ContactItem.styled';


const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <StyledContactItem>
      <StyledContactItemName>{contact.name}: </StyledContactItemName>
      <StyledContactItemNumber href={`tel:${contact.number}`}>
        {contact.number}
      </StyledContactItemNumber>
      <StyledContactItemDelete
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </StyledContactItemDelete>
    </StyledContactItem>
  );
};

export default ContactItem;