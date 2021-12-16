import styled from 'styled-components'

export const Styles = {
  Flex: styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `,

  FormStyled: styled.div`
    width: 400px;
    background-color: ${(props) => props.theme.colors.formBackground};
    border: 2px solid ${props => props.theme.border.formBorder};
    box-shadow: 0 0 10px ${props => props.theme.shadowBorder.formShadowBorder};
    border-radius: 10px;
  `
}