import { collection, getDocs } from 'firebase/firestore'

import { collections } from '../collections'
import { database } from '../firebase'

type IContact = { id: string; name: string; number: string }

export async function getAllContacts() {
  try {
    const querySnapshot = await getDocs(collection(database.db, collections.contacts))
    const contacts: any = []

    querySnapshot.forEach((doc) => {
      contacts.push({
        id: doc.id, // ID документа
        ...doc.data(), // Все поля документа
      })
    })

    return contacts as IContact[]
  } catch (error) {
    console.error('Ошибка при загрузке контактов:', error)
    return []
  }
}

// Использование
getAllContacts()
