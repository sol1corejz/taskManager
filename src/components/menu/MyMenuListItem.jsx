import React from 'react';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import File from "./File";


const MyMenuListItem = () => {

    let files = useSelector(state => state.filesReducer.files)

    return (
        <Box>
            {files.map(file => <File key={file.id} id={file.id} name={file.name} priority={file.priority}/>)}
        </Box>

    );
};

export default MyMenuListItem;