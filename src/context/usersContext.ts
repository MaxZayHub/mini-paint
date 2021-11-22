import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { User } from '../types/user'

const usersCollectionRef = collection(db, 'users')

export const getUsersFromDb = async () => {
  let data = await getDocs(usersCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data() }))
}

export const addUserToDb = async (user: User) => {
  await addDoc(usersCollectionRef, {...user})
}
