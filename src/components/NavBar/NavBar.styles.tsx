import styled from 'styled-components'

export const Styles = {
  StyledNavBar: styled.div`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.colors.navBarBackground};
    position: absolute;
    top: 0;
  `,

  StyledUserName: styled.div`
    user-select: none;
    margin: 0;
    color: white;
    font-size: 18px;
  `,

  StyledBlock: styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100%;
    float: right;
    margin-right: 1%;
  `,

  StyledSwitch: styled.div`
    float: right;
    margin-right: 20px;
    margin-top: 3px;
  `,

  StyledButton: styled.button`
    width: auto;
    height: 50%;
    background-color: ${(props) => props.theme.colors.logOutButtonBackground};
    color: rgb(232, 76, 61);
    outline: none;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  `,

  Flex: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `
}