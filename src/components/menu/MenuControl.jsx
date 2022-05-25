import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import PostAddIcon from '@mui/icons-material/PostAdd';
import MenuItem from "@mui/material/MenuItem";
import {useDispatch} from "react-redux";
import {addFile} from "../../redux/filesReducer";

const MenuControls = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')


    const addF = () => {
        dispatch(addFile(name))
        setName('')
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            addF()
        }
    }

    return (
        <MenuItem>
            <Box sx={{display: "flex", justifyContent: "center", width: "100%"}}>
                <ListItemIcon sx={{marginRight: "10px"}}>
                    <PostAddIcon fontSize="large" onClick={addF}/>
                </ListItemIcon>
                <TextField onKeyPress={(e) => handleKey(e)} placeholder="Имя файла" variant="standard"
                           onChange={(e) => setName(e.currentTarget.value)}/>
            </Box>
        </MenuItem>
    );
};

export default MenuControls;