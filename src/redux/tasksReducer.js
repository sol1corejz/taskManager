import {logDOM} from "@testing-library/react";

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS'
const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME'

let initialState = {
    tasks: [
        {
            id: 0,
            name: "Бургииир",
            isDone: true,
            fileId: 0
        },
        {
            id: 1,
            name: "ahaha",
            isDone: false,
            fileId: 0
        },
        {
            id: 2,
            name: "huhu",
            isDone: false,
            fileId: 1
        },
    ]
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: state.tasks.length + 1,
                name: action.name,
                isDone: false,
                fileId: action.fileId
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                        if (task.id === action.id) {
                            task.isDone = action.status
                        }
                        return task
                    }
                )
            }
        case CHANGE_TASK_NAME:
            return {
                ...state,
                tasks: [...state.tasks.map(task => {
                    if (task.id === action.id) {
                        task.name = action.name
                    }
                    return task
                })]
            }
        default:
            return state
    }
}

export const addTask = (name, fileId) => {
    return {type: ADD_TASK, name, fileId}
}
export const deleteTask = (id) => {
    return {type: DELETE_TASK, id}
}
export const changeTaskStatus = (id, status) => {
    return {type: CHANGE_TASK_STATUS, id, status}
}
export const changeTaskName = (id, name) => {
    return {type: CHANGE_TASK_NAME, id, name}
}


export default tasksReducer