import { deleteDoc, doc } from 'firebase/firestore'

import { collections } from '../collections'
import { database } from '../firebase'

export async function deleteContact(id: string) {
  try {
    await deleteDoc(doc(database.db, collections.contacts, id))
    return true
  } catch (e) {
    console.log('не удалено ', e)
    return false
  }
}
