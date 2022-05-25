const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS'

let initialState = {
    tasks: [
        {
            id: 0,
            name: "Бургииир",
            isDone: false,
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
                name: action.name
            }
            return {
                ...state,
                files: [...state.files, newTask]
            }
        case DELETE_TASK:
            return {
                ...state,
                files: [...state.tasks.filter(task => task.id !== action.id)]
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
        default:
            return state
    }
}

export const addTask = (name) => {
    return {type: ADD_TASK, name}
}
export const deleteTask = (id) => {
    return {type: DELETE_TASK, id}
}
export const changeTaskStatus = (id, status) => {
    return {type: CHANGE_TASK_STATUS, id, status}
}


export default tasksReducer