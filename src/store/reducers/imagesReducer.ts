import { ImagesAction, ImageState } from '../../types/images'

const GET_IMAGES = 'GET_IMAGES'

const initialState: ImageState = {
  images: [],
}

export const imagesReducer = (
  state = initialState,
  action: ImagesAction
): ImageState => {
  switch (action.type) {
    case GET_IMAGES:
      return { images: action.payload }
    default:
      return state
  }
}
