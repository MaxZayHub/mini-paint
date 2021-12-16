import styled from 'styled-components'
import FilteredPropsInputField from './FilteredPropsInputField'

export const FormInput = styled(FilteredPropsInputField)`
  width: 75%;
  height: 30px;
  border: none;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  outline: none;
  transition: 0.2s;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.formInput};
  color: ${(props) => props.theme.fontColor.formInput};

  &:focus {
    border: none;
    box-shadow: 0 0 7px gray;
  }
`
