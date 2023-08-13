import { DatabaseName } from '@/common/constants'

let db: IDBDatabase

const openDb = () => {
  const indexDBRequest = indexedDB.open(DatabaseName, 1)

  indexDBRequest.onerror = () => {
    alert('Database opening error')
  }

  indexDBRequest.onupgradeneeded = () => {
    db = indexDBRequest.result

    db.createObjectStore(DatabaseName, { keyPath: 'id' })
  }

  indexDBRequest.onsuccess = () => {
    db = indexDBRequest.result
  }
}

const getTable = () => {
  const transaction = db.transaction(DatabaseName, 'readwrite')
  return transaction.objectStore(DatabaseName)
}

export { getTable, openDb }
