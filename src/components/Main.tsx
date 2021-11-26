import React, { useEffect } from 'react'
import Flex from '../styledComponents/Flex'
import ImageFeed from './ImageFeed'
import { getImagesFromDb } from '../context/imagesContext'
import { useDispatch } from 'react-redux'
import { getImages } from '../actions-creators/images'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTypeSelector } from '../hooks/useTypeSelector'

const StyledButton = styled.button`
  background-color: rgb(232, 76, 61);
  outline: none;
  border: none;
  height: 2rem;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

const Main = () => {
  const dispatch = useDispatch()

  const images = useTypeSelector((state) => state.images.images)

  useEffect(() => {
    getImagesFromDb().then((res) => {
      dispatch(getImages(res))
    })
  }, [dispatch])

  return (
    <Flex width={'100%'} alignItems={'center'} justifyContent={'center'}>
      <ImageFeed />
      <Link
        to={'/newPicture'}
        style={{ alignSelf: 'baseline', marginTop: '100px' }}
      >
        <StyledButton>New picture</StyledButton>
      </Link>
    </Flex>
  )
}

export default Main
