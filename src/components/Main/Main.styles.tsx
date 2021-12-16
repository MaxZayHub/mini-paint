import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Styles = {
  StyledButton: styled.button`
    background-color: ${(props) => props.theme.colors.newPictureButton};
    outline: none;
    border: none;
    height: 2rem;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
    min-width: 40px;
  
    &:hover {
      transform: scale(1.1);
    }
  `,

  NewPictureLink: styled(Link)`
    margin-top: 100px;
  `,

  PageWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: 100vh;
    gap: 30px;
  `
}