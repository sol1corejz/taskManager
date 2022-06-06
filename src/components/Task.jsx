import * as React from 'react';
import {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import {useDispatch} from "react-redux";
import {changeTaskName, changeTaskStatus, deleteTask} from "../redux/tasksReducer";
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import {TextField} from "@mui/material";

export default function Task({id, name, isDone}) {

    const dispatch = useDispatch()

    const [checked, setChecked] = useState(isDone);
    const [isEdit, setIsEdit] = useState(false)
    const [taskName, setTaskName] = useState(name)

    const handleToggle = () => {
        setChecked(!checked);
        dispatch(changeTaskStatus(id, !checked))
    };
    const handleDelete = () => {
        setIsEdit(!isEdit)
        dispatch(deleteTask(id))
    };

    const changeT = () => {
        dispatch(changeTaskName(id, taskName))
        setIsEdit(!isEdit)
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            changeT()
        }
    }

    return (
        !isEdit ?
            <ListItem secondaryAction={
                <IconButton edge="end" onClick={() => setIsEdit(!isEdit)}>
                    <SettingsIcon/>
                </IconButton>
            }
                      disablePadding
            >
                <ListItemButton onClick={handleToggle} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={name}/>
                </ListItemButton>
            </ListItem>
            :
            <ListItem disablePadding>

                <TextField sx={{marginLeft: "50px", marginRight: "50px"}} value={taskName}
                           onKeyPress={(e) => handleKey(e)} variant="standard"
                           onChange={(e) => setTaskName(e.currentTarget.value)}/>

                <IconButton edge="start" sx={{marginRight: "10px"}} onClick={changeT}>
                    <SaveIcon/>
                </IconButton>

                <IconButton edge="start" sx={{marginRight: "3px"}} onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>

            </ListItem>


    );
}
