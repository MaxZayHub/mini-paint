import React, { useState } from 'react'
import Flex from '../styledComponents/Flex'
import pencil from '../assets/pencil.png'
import eraser from '../assets/eraser.png'
import save from '../assets/save.png'
import { PaintData } from '../types/paintData'
import styled from 'styled-components'
import rectangle from '../assets/rectangle.png'
import circle from '../assets/circle.png'
import line from '../assets/line.png'
import polygon from '../assets/hexagon.png'
import { Canvas } from '../utils/canvas/canvas'
import { Pencil } from '../utils/canvas/Pencil'
import { Rectangle } from '../utils/canvas/rectangle'
import { Eraser } from '../utils/canvas/eraser'
import { Circle } from '../utils/canvas/circle'
import { Line } from '../utils/canvas/line'
import star from '../assets/star.png'
import { addImage, getOnePictureFromDb, updateImage } from '../context/imagesContext'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { Image } from '../types/image'
import { nanoid } from 'nanoid'
import { Star } from '../utils/canvas/star'
import { Polygon } from '../utils/canvas/polygon'

interface Props {
  canvasObj: Canvas | null
  setCanvasObj: (canvasObj: Canvas) => void
}

interface StyledProps {
  active: boolean;
}

const StyledText = styled.p`
  color: ${props => props.theme.fontColor.formInput};
`

const StyledButton =
  styled.button <
  StyledProps >
  `
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
`

const WidthInput = styled.input`
  width: 50px;
`

const PaintTools = (props: Props) => {
  const [paintData, setPaintData] = useState<PaintData>({
    pencil: true,
    color: '#000000',
    pencilWidth: '6',
    eraser: false,
    rectangle: false,
    circle: false,
    line: false,
    star: false,
    polygon: false
  })

  const [updateInfo, setUpdateInfo] = useState({
    currentId: '',
    needUpdate: false
  })

  const currentUser = useTypeSelector((state) => state.user.user)

  const pencilHandler = () => {
    setPaintData({
      ...paintData,
      pencil: true,
      eraser: false,
      line: false,
      rectangle: false,
      circle: false,
      star: false,
      polygon: false
    })
    if (props.canvasObj) {
      props.setCanvasObj(new Pencil(props.canvasObj?.canvas as HTMLCanvasElement, paintData.color, parseInt(paintData.pencilWidth, 10)))
    }
  }

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaintData({ ...paintData, pencilWidth: event.target.value })
    if (props.canvasObj) {
      props.canvasObj.setWidth(parseInt(event.target.value, 10))
    }
  }

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaintData({ ...paintData, color: event.target.value })
    props.canvasObj?.setColor(event.target.value)
  }

  const eraserClickHandler = () => {
    setPaintData({
      ...paintData,
      pencil: false,
      eraser: true,
      line: false,
      rectangle: false,
      circle: false,
      star: false,
      polygon: false
    })
    if (props.canvasObj) {
      props.setCanvasObj(new Eraser(props.canvasObj?.canvas as HTMLCanvasElement, parseInt(paintData.pencilWidth, 10)))
    }
  }

  const rectangleClickHandler = () => {
    setPaintData({
      ...paintData,
      pencil: false,
      eraser: false,
      line: false,
      rectangle: true,
      circle: false,
      star: false,
      polygon: false
    })
    props.setCanvasObj(new Rectangle(props.canvasObj?.canvas as HTMLCanvasElement, paintData.color, parseInt(paintData.pencilWidth, 10)))
  }

  const circleClickHandler = () => {
    setPaintData({
      ...paintData,
      pencil: false,
      eraser: false,
      line: false,
      rectangle: false,
      circle: true,
      star: false,
      polygon: false
    })
    props.setCanvasObj(new Circle(props.canvasObj?.canvas as HTMLCanvasElement, paintData.color, parseInt(paintData.pencilWidth, 10)))
  }

  const lineClickHandler = () => {
    setPaintData({
      ...paintData,
      pencil: false,
      eraser: false,
      line: true,
      rectangle: false,
      circle: false,
      star: false,
      polygon: false
    })
    props.setCanvasObj(new Line(props.canvasObj?.canvas as HTMLCanvasElement, paintData.color, parseInt(paintData.pencilWidth, 10)))
  }

  const starClickHandler = () => {
    setPaintData({
      ...paintData,
      pencil: false,
      eraser: false,
      line: false,
      rectangle: false,
      circle: false,
      star: true,
      polygon: false
    })
    props.setCanvasObj(new Star(props.canvasObj?.canvas as HTMLCanvasElement, paintData.color, parseInt(paintData.pencilWidth, 10)))
  }

  const polygonClickHandler = () => {
    setPaintData({
      ...paintData,
      pencil: false,
      eraser: false,
      line: false,
      rectangle: false,
      circle: false,
      star: false,
      polygon: true
    })
    props.setCanvasObj(new Polygon(props.canvasObj?.canvas as HTMLCanvasElement, paintData.color, parseInt(paintData.pencilWidth, 10)))
  }

  const saveClickHandler = () => {
    if (props.canvasObj) {
      if (updateInfo.needUpdate) {
        getOnePictureFromDb(updateInfo.currentId).then((res) => {
          if (props.canvasObj) {
            updateImage({
              idInDb: res?.id,
              id: updateInfo.currentId,
              image: (props.canvasObj?.canvas).toDataURL(),
              userId: currentUser.id
            })
          }
        })
      } else {
        const newImage: Image = {
          id: nanoid(),
          userId: currentUser.id,
          image: (props.canvasObj.canvas as HTMLCanvasElement).toDataURL(),
        }
        setUpdateInfo((updateInfo) => ({...updateInfo, needUpdate: true, currentId: newImage.id}))
        addImage(newImage)
      }
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
      <StyledButton onClick={pencilHandler} active={paintData.pencil}>
        <img src={pencil} width={20} height={20} alt={'pencil'} />
      </StyledButton>
      <StyledButton
        onClick={eraserClickHandler}
        active={paintData.eraser}
      >
        <img src={eraser} width={20} height={20} alt={'eraser'} />
      </StyledButton>
      <Flex alignItems={'center'} gap={'10px'}>
        <StyledText>Width: </StyledText>
        <WidthInput
          type={'number'}
          value={paintData.pencilWidth}
          onChange={onchangeHandler}
          min={1}
          max={50}
        />
      </Flex>
      <input type={'color'} onChange={colorChangeHandler} />
      <StyledButton
        onClick={rectangleClickHandler}
        active={paintData.rectangle}
      >
        <img src={rectangle} width={20} height={20} alt={'rectangle'} />
      </StyledButton>
      <StyledButton
        onClick={circleClickHandler}
        active={paintData.circle}
      >
        <img src={circle} width={20} height={20} alt={'circle'} />
      </StyledButton>
      <StyledButton onClick={lineClickHandler} active={paintData.line}>
        <img src={line} width={20} height={20} alt={'line'} />
      </StyledButton>
      <StyledButton onClick={starClickHandler} active={paintData.star}>
        <img src={star} width={20} height={20} alt={'star'} />
      </StyledButton>
      <StyledButton onClick={polygonClickHandler} active={paintData.polygon}>
        <img src={polygon} width={20} height={20} alt={'polygon'} />
      </StyledButton>
      <StyledButton onClick={saveClickHandler} active={false}>
        <img src={save} width={20} height={20} alt={'save'} />
      </StyledButton>
    </Flex>
  )
}

export default PaintTools
