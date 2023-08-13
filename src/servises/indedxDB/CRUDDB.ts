import { getTable } from './openDB'
import type { ITask } from '@/common/interfaces'

const getAllTask = () =>
  new Promise((resolve, reject) => {
    const table = getTable()
    const request = table.getAll()

    request.onsuccess = function () {
      resolve(request.result)
    }

    request.onerror = () => {
      reject('An error occurred while adding a task.')
    }
  })

const getTaskById = (id: string) =>
  new Promise((resolve, reject) => {
    const table = getTable()
    const request = table.get(id)

    request.onsuccess = function () {
      resolve(request.result)
    }

    request.onerror = () => {
      reject('An error occurred while adding a task.')
    }
  })

const createTask = (task: ITask) =>
  new Promise((resolve, reject) => {
    const table = getTable()
    const request = table.add(task)

    request.onsuccess = function () {
      resolve(request.result)
    }

    request.onerror = () => {
      reject('An error occurred while adding a task.')
    }
  })

const updateTask = (task: ITask) =>
  new Promise((resolve, reject) => {
    const table = getTable()
    const request = table.put(task)

    request.onsuccess = function () {
      resolve(request.result)
    }

    request.onerror = () => {
      reject('An error occurred while updating a task.')
    }
  })

const deleteTask = (id: string) =>
  new Promise((resolve, reject) => {
    const table = getTable()
    const request = table.delete(id)

    request.onsuccess = function () {
      resolve(request.result)
    }

    request.onerror = () => {
      reject('An error occurred while deleting a task.')
    }
  })

export { getAllTask, getTaskById, createTask, updateTask, deleteTask }
