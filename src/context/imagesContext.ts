import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { Image } from '../types/image'

const imagesCollectionRef = collection(db, 'images')

export const getImagesFromDb = async () => {
  let data = await getDocs(imagesCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data() }))
}

export const addImage = async (image: Image) => {
  await addDoc(imagesCollectionRef, { ...image })
}
