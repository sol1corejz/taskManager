import React, {useState} from 'react';
import {Button, Divider, ListItemIcon, Paper, Stack, TextField} from "@mui/material";

import {styled} from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Task from "./Task";
import SettingsIcon from '@mui/icons-material/Settings';
import {addFile, changeFileName, changeFilePriority} from "../redux/filesReducer";
import SaveIcon from '@mui/icons-material/Save';
import Priority from "./Priority";
import {addTask} from "../redux/tasksReducer";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FileContent = () => {

    const location = useLocation()

    const file = useSelector(state => state.filesReducer.files.filter(file => file.id == location.pathname.substr(6)))


    let fileName = ''
    let fileId = null
    let fileTasks = []
    let filePr = null

    if (file.length) {
        fileName = file[0].name
        fileId = file[0].id
        filePr = file[0].priority
    }
    fileTasks = useSelector(state => state.tasksReducer.tasks.filter(task => task.fileId === fileId))

    const [isEdit, setIsEdit] = useState()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [taskName, setTaskName] = useState('')


    const takeFilePriority = (priority) => {
        filePr = priority;
    }


    const changeF = () => {
        dispatch(changeFileName(fileId, name))
        dispatch(changeFilePriority(fileId, filePr))
        setIsEdit(!isEdit)
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            changeF()
        }
    }

    const addT = () => {
        dispatch(addTask(taskName, fileId))
        setTaskName('')
    }

    return (
        <Stack sx={{height: "100%"}}>
            {!isEdit ?
                <Item sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10%",
                    boxSizing: "border-box",
                    fontSize: "40px"
                }}>
                    {fileName}
                    <ListItemIcon sx={{marginLeft: "20px"}} onClick={() => setIsEdit(!isEdit)}>
                        <SettingsIcon fontSize={"large"}/>
                    </ListItemIcon>
                </Item>
                :
                <Item sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    height: "10%",
                    boxSizing: "border-box",
                    fontSize: "40px"
                }}>
                    <Priority fileId={fileId} takeFilePriority={takeFilePriority}/>
                    <TextField value={name} onKeyPress={(e) => handleKey(e)} placeholder="Имя файла" variant="standard"
                               onChange={(e) => setName(e.currentTarget.value)}/>
                    <ListItemIcon sx={{marginLeft: "20px", alignSelf: "center"}} onClick={changeF}>
                        <SaveIcon fontSize={"large"}/>
                    </ListItemIcon>
                </Item>
            }

            <Divider/>
            <Item sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "90%",
                boxSizing: "border-box"
            }}>
                <div>
                    <TextField sx={{marginRight: "20px"}}
                               value={taskName}
                               variant="standard"
                               onChange={(e) => setTaskName(e.currentTarget.value)}
                               placeholder="Задача"/>
                    <Button variant="outlined" onClick={addT}>Add Task</Button>
                </div>

                {fileTasks.map(task => <Task key={task.id} id={task.id} name={task.name} isDone={task.isDone}/>)}
            </Item>
        </Stack>
    );
};

export default FileContent;