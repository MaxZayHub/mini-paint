import styled from 'styled-components'

export const FormButton = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  background-color: ${(props) => props.theme.colors.formSubmitButtonBackground};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.formSubmitButtonHoverBackground};
  }
`

