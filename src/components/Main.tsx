import React, { useEffect } from 'react'
import Flex from '../styledComponents/Flex'
import ImageFeed from './ImageFeed'
import { getImagesFromDb } from '../context/imagesContext'
import { useDispatch } from 'react-redux'
import { getImages } from '../actions-creators/images'
import { Link } from 'react-router-dom'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getImagesFromDb().then((res) => {
      dispatch(getImages(res))
    })
  }, [dispatch])

  return (
    <Flex
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ImageFeed />
      <Link to={'/newPicture'}>New picture</Link>
    </Flex>
  )
}

export default Main
