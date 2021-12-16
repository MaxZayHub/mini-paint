import styled from 'styled-components'
import { PaintToolsPropsStylesInterface } from './PaintTools.interface'

export const Styles = {
  StyledText: styled.p`
    color: ${props => props.theme.fontColor.formInput};
  `,

  StyledButton: styled.button<PaintToolsPropsStylesInterface>`
    background-color: ${(props) => (props.active ? props.theme.colors.paintToolsActiveBackground : props.theme.colors.paintToolsBackground)};
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: lightgray;
    }
  `,

  WidthInput: styled.input`
    width: 50px;
  `,

  ToolsWrapper: styled.div`
    display: flex;
    width: 70%;
    height: 40px;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  WidthInputWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `
}