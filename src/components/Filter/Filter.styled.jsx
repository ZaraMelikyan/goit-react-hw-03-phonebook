import styled from 'styled-components';

export const StyledFilterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 15px;

  color: #333232;
`

export const StyledFilterFormInput = styled.input `
  width: 100%;
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

   @media screen and (min-width: 768px) {
    width: 350px;
  }

  :focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }
`