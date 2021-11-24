import React from 'react'
import Flex from '../styledComponents/Flex'
import pencil from '../assets/pencil.png'
import PaintButton from '../styledComponents/PaintButton'

const PaintTools = () => {
  return (
    <Flex width={'70%'} height={'40px'} alignItems={'center'} justifyContent={'start'}>
      {/*<PaintButton><img src={pencil} width={20} height={20} alt={'pencil'}/></PaintButton>*/}
      <button><img src={pencil} width={20} height={20} alt={'pencil'}/></button>
      <input type={'color'}/>
    </Flex>
  )
}

export default PaintTools