import React, { useEffect, useState } from 'react'
import { getImagesFromDb } from '../context/imagesContext'
import { Image } from '../types/image'
import Flex from '../styledComponents/Flex'
import ImageBlock from './ImageBlock'

const ImageFeed = () => {
  const [images, setImages] = useState<Image[]>([])


  useEffect(() => {
    getImagesFromDb().then((res) => {
      setImages(res as Image[])
    })
  }, [])

  return (
    <Flex width={'70%'} flexDirection={'column'} gap={'30px'} alignItems={'center'}>
      {images && images.map((image) => <ImageBlock image={image} />)}
    </Flex>
  )
}

export default ImageFeed