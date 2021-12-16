import React, { useEffect } from 'react'
import ImageFeed from '../ImageFeed/ImageFeed'
import { getImagesFromDb } from '../../context/imagesContext'
import { useDispatch } from 'react-redux'
import { getImages } from '../../actions-creators/images'
import { Styles } from './Main.styles'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getImagesFromDb().then((res) => {
      dispatch(getImages(res))
    })
  }, [dispatch])

  return (
    <Styles.PageWrapper>
      <Styles.ContentWrapper>
        <ImageFeed />
        <Styles.NewPictureLink
          to={'/newPicture'}
        >
          <Styles.StyledButton>New picture</Styles.StyledButton>
        </Styles.NewPictureLink>
      </Styles.ContentWrapper>
    </Styles.PageWrapper>
  )
}

export default Main
