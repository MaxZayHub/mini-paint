import styled from 'styled-components'

export const Styles = {
  StyledImageBlock: styled.div`
    background-color: ${props => props.theme.colors.imageFeedBackground};
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  `,

  ImageBackground: styled.div`
    background-color: white;
    width: 80%;
    height: 60%;
  `,

  StyledUsername: styled.h3`
    align-self: start;
    margin: 10px 0 0 10px;
    color: white;
  `,

  ImageWrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-around;
    margin: 0 0 20px 0;
  `
}