import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeTaskStatus} from "../redux/tasksReducer";

const Task = ({id, name, isDone}) => {

    const [done, setDone] = useState(isDone)
    const dispatch = useDispatch()
    const setIsDone = () => {
        setDone(!done)
        dispatch(changeTaskStatus(id, !done))
    }

    return (
        <div>
            <input checked={done} type={"checkbox"} onChange={setIsDone}/>
            {name}
        </div>

    );
};

export default Task;