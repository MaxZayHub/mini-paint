import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'

const usersCollectionRef = collection(db, 'users')

export const getUsersFromDb = async () => {
  let data = await getDocs(usersCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}
