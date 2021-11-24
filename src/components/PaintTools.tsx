import React from 'react'
import Flex from '../styledComponents/Flex'
import pencil from '../assets/pencil.png'
import { PaintData } from '../types/paintData'

interface Props {
  setPaintData: (paintObject: PaintData) => void;
  paintData: PaintData;
}

const PaintTools = (props: Props) => {
  const pencilHandler = () => {
    props.setPaintData({ ...props.paintData, pencil: true })
  }

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPaintData({ ...props.paintData, color: event.target.value })
  }

  return (
    <Flex
      width={'70%'}
      height={'40px'}
      alignItems={'center'}
      justifyContent={'start'}
      gap={'10px'}
    >
      <button onClick={pencilHandler}>
        <img src={pencil} width={20} height={20} alt={'pencil'} />
      </button>
      <input type={'color'} onChange={colorChangeHandler} />
    </Flex>
  )
}

export default PaintTools
