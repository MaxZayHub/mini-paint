import React, { useEffect } from 'react'
import Flex from '../styledComponents/Flex'
import ImageFeed from './ImageFeed'
import { getImagesFromDb } from '../context/imagesContext'
import { useDispatch } from 'react-redux'
import { getImages } from '../actions-creators/images'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.newPictureButton};
  outline: none;
  border: none;
  height: 2rem;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
  min-width: 40px;

  &:hover {
    transform: scale(1.1);
  }
`

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getImagesFromDb().then((res) => {
      dispatch(getImages(res))
    })
  }, [dispatch])

  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Flex
        width={'100%'}
        minHeight={'100vh'}
        alignItems={'flex-start'}
        justifyContent={'center'}
        gap={'30px'}
      >
        <ImageFeed />
        <Link
          to={'/newPicture'}
          style={{marginTop: '100px' }}
        >
          <StyledButton>New picture</StyledButton>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Main
