import React from 'react'
import ImageBlock from '../ImageBlock/ImageBlock'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { Image } from '../../types/image'
import { Styles } from './ImageFeed.styles'

const ImageFeed = () => {
  const images = useTypeSelector((state) => state.images.images)

  return (
    <>
    {images.length > 0 &&
      <Styles.Flex>
        {images.map((image: Image) =>
            <ImageBlock key={image.id} image={image} />
        )}
      </Styles.Flex>}
    </>
  )
}

export default ImageFeed
