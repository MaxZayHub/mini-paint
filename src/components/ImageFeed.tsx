import React, { useEffect, useState } from 'react'
import { getImagesFromDb } from '../context/imagesContext'
import { Image } from '../types/image'

const ImageFeed = () => {
  const [images, setImages] = useState<Image[]>([])


  useEffect(() => {
    getImagesFromDb().then((res) => {
      setImages(res as Image[])
    })
  }, [])

  console.log(images)

  return (
    <div>
      dagagag
    </div>
  )
}

export default ImageFeed