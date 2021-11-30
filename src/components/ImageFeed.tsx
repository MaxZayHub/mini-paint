import React from 'react'
import Flex from '../styledComponents/Flex'
import ImageBlock from './ImageBlock'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { Image } from '../types/image'

const ImageFeed = () => {
  const images = useTypeSelector((state) => state.images.images)

  return (
    <>
    {images.length > 0 &&
      <Flex
        width={'70%'}
        flexDirection={'column'}
        gap={'30px'}
        alignItems={'center'}
        justifyContent={'start'}
        margin={'100px 0 50px 0'}
      >
        {images.map((image: Image) =>
            <ImageBlock key={image.id} image={image} />
        )}
      </Flex>}
    </>
  )
}

export default ImageFeed
