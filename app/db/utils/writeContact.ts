import { addDoc, collection } from 'firebase/firestore'

import { collections } from '../collections'
import { database } from '../firebase'

type Props = {
  name: string
  number: string
}

export async function writeContactToDB(data: Props) {
  try {
    const collec = collection(database.db, collections.contacts)
    const docRef = await addDoc(collec, data)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
    throw e
  }
}
