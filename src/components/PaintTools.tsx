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
import rectangle from '../assets/rectangle.png'
import circle from '../assets/circle.png'
import line from '../assets/line.png'

interface Props {
  setPaintData: (paintObject: PaintData) => void;
  paintData: PaintData;
  canvasRef: React.MutableRefObject<null>;
}

interface StyledProps {
  active: boolean
}

const StyledButton = styled.button<StyledProps>`
  background-color: ${(props) => props.active ? `lightgray` : `transparent`};
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
`

const WidthInput = styled.input`
  width: 50px;
`

const PaintTools = (props: Props) => {
  const currentUser = useTypeSelector((state) => state.user.user)

  const pencilHandler = () => {
    props.setPaintData({ ...props.paintData, pencil: true, eraser: false, line: false, rectangle: false, circle: false })
  }

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPaintData({ ...props.paintData, pencilWidth: event.target.value })
  }

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPaintData({ ...props.paintData, color: event.target.value })
  }

  const eraserClickHandler = () => {
    props.setPaintData({ ...props.paintData, pencil: false, eraser: true, line: false, rectangle: false, circle: false })
  }

  const rectangleClickHandler = () => {
    props.setPaintData({...props.paintData, pencil: false, eraser: false, line: false, rectangle: true, circle: false})
  }

  const circleClickHandler = () => {
    props.setPaintData({...props.paintData, pencil: false, eraser: false, line: false, rectangle: false, circle: true})
  }

  const lineClickHandler = () => {
    props.setPaintData({...props.paintData, pencil: false, eraser: false, line: true, rectangle: false, circle: false})
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
      <StyledButton onClick={pencilHandler} active={props.paintData.pencil}>
        <img src={pencil} width={20} height={20} alt={'pencil'} />
      </StyledButton>
      <StyledButton onClick={eraserClickHandler} active={props.paintData.eraser}>
        <img src={eraser} width={20} height={20} alt={'eraser'} />
      </StyledButton>
      <Flex alignItems={'center'} gap={'10px'}>
        <p>Width: </p>
        <WidthInput
          type={'number'}
          value={props.paintData.pencilWidth}
          onChange={onchangeHandler}
          min={1}
          max={50}
        />
      </Flex>
      <input type={'color'} onChange={colorChangeHandler} />
      <StyledButton onClick={rectangleClickHandler} active={props.paintData.rectangle}>
        <img src={rectangle} width={20} height={20} alt={'rectangle'} />
      </StyledButton>
      <StyledButton onClick={circleClickHandler} active={props.paintData.circle}>
        <img src={circle} width={20} height={20} alt={'circle'} />
      </StyledButton>
      <StyledButton onClick={lineClickHandler} active={props.paintData.line}>
        <img src={line} width={20} height={20} alt={'line'} />
      </StyledButton>
      <StyledButton onClick={saveClickHandler} active={false}>
        <img src={save} width={20} height={20} alt={'save'} />
      </StyledButton>
    </Flex>
  )
}

export default PaintTools
