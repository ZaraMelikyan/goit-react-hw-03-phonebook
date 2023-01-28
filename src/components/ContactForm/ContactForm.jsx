import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledContactForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormButtonWrapper,
  StyledFormButton,
} from 'components/ContactForm/ContactForm.styled';


class ContactForm extends Component {
  
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

 
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

 
  hanldeSubmit = event => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact); 

    this.resetForm();
  };

 
  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledContactForm onSubmit={this.hanldeSubmit}>
        <StyledFormLabel>
          Name
          <StyledFormInput
            type="text"
            name="name"
            value={this.state.name} 
            onChange={this.hanldeChange} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </StyledFormLabel>
        <StyledFormLabel>
          Number
          <StyledFormInput
            type="tel"
            name="number"
            value={this.state.number} 
            onChange={this.hanldeChange} 
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </StyledFormLabel>
        <StyledFormButtonWrapper>
          <StyledFormButton type="submit">
            Add contact
          </StyledFormButton>
        </StyledFormButtonWrapper>
      </StyledContactForm>
    );
  }
}

export default ContactForm;