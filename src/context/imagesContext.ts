import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { Image } from '../types/image'

const imagesCollectionRef = collection(db, 'images')

export const getImagesFromDb = async () => {
  let data = await getDocs(imagesCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const addImage = async (image: Image) => {
  await addDoc(imagesCollectionRef, { ...image })
}

export const updateImage = async (image: Image) => {
  if (image.idInDb) {
    const imageDoc = doc(db, 'images', image.idInDb)
    await updateDoc(imageDoc, { image: image.image })
  }
}

export const getOnePictureFromDb = async (id: string) => {
  let data = await getDocs(imagesCollectionRef)
  return data.docs.find((doc) => doc.data().id === id)
}
