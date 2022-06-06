const ADD_FILE = 'ADD_FILE'
const DELETE_FILE = 'DELETE_FILE'
const CHANGE_FILE_NAME = 'CHANGE_FILE_NAME'
const CHANGE_FILE_PRIORITY = 'CHANGE_FILE_PRIORITY'


let initialState = {
    files: [
        {
            id: 0,
            name: "FILE 1",
            priority: 1
        },
        {
            id: 1,
            name: "FILE 2"
            ,
            priority: 1
        },
        {
            id: 2,
            name: "FILE 3",
            priority: 2
        },
        {
            id: 3,
            name: "FILE 4"
            ,
            priority: 2
        },
        {
            id: 4,
            name: "FILE 5"
            ,
            priority: 3
        },
        {
            id: 5,
            name: "FILE 6",
            priority: 3
        }
    ]
}


const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILE:
            let newFile = {
                id: state.files.length,
                name: action.name
            }
            return {
                ...state,
                files: [...state.files, newFile]
            }
        case DELETE_FILE:
            return {
                ...state,
                files: [...state.files.filter( file => file.id !== action.id)]
            }
        case CHANGE_FILE_NAME:
            return {
                ...state,
                files: [...state.files.map( file => {
                    if(file.id === action.id){
                        file.name = action.name
                    }
                    return file
                })]
            }
        case CHANGE_FILE_PRIORITY:
            return {
                ...state,
                files: [...state.files.map( file => {
                    if(file.id === action.id){
                        file.priority = action.priority
                        console.log(file)
                    }
                    return file
                })]
            }
        default:
            return state
    }
}

export const addFile = (name) => {
    return {type: ADD_FILE, name}
}
export const deleteFile = (id) => {
    return {type: DELETE_FILE, id}
}
export const changeFileName = (id, name) => {
    return {type: CHANGE_FILE_NAME, id, name}
}
export const changeFilePriority = (id, priority) => {
    return {type: CHANGE_FILE_PRIORITY, id, priority}
}


export default filesReducer