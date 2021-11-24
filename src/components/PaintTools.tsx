import React from 'react'
import Flex from '../styledComponents/Flex'
import pencil from '../assets/pencil.png'
import eraser from '../assets/eraser.png'
import save from '../assets/save.png'
import { PaintData } from '../types/paintData'
import styled from 'styled-components'
import { Image } from '../types/image'
import { nanoid } from 'nanoid'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { addImage } from '../context/imagesContext'

interface Props {
  setPaintData: (paintObject: PaintData) => void;
  paintData: PaintData;
  canvasRef: React.MutableRefObject<null>;
}

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    background-color: lightgray;
  }
`

const WidthInput = styled.input`
  width: 50px;
`

const PaintTools = (props: Props) => {
  const currentUser = useTypeSelector((state) => state.user.user)

  const pencilHandler = () => {
    props.setPaintData({ ...props.paintData, pencil: true, eraser: false })
  }

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPaintData({ ...props.paintData, pencilWidth: event.target.value })
  }

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPaintData({ ...props.paintData, color: event.target.value })
  }

  const eraserClickHandler = () => {
    props.setPaintData({ ...props.paintData, pencil: false, eraser: true })
  }

  const saveClickHandler = () => {
    if (props.canvasRef.current) {
      const newImage: Image = {
        id: nanoid(),
        userId: currentUser.id,
        image: (props.canvasRef.current as HTMLCanvasElement).toDataURL(),
      }
      addImage(newImage)
    }
  }

  return (
    <Flex
      width={'70%'}
      height={'40px'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'10px'}
    >
      <StyledButton onClick={pencilHandler}>
        <img src={pencil} width={20} height={20} alt={'pencil'} />
      </StyledButton>
      <StyledButton onClick={eraserClickHandler}>
        <img src={eraser} width={20} height={20} alt={'eraser'} />
      </StyledButton>
      <Flex alignItems={'center'} gap={'10px'}>
        <p>Width: </p>
        <WidthInput
          type={'number'}
          value={props.paintData.pencilWidth}
          onChange={onchangeHandler}
          min={1}
        />
      </Flex>
      <input type={'color'} onChange={colorChangeHandler} />
      <StyledButton onClick={saveClickHandler}>
        <img src={save} width={20} height={20} alt={'save'} />
      </StyledButton>
    </Flex>
  )
}

export default PaintTools
