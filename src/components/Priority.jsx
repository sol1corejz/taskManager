import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {FormControl, InputLabel, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

const Priority = ({fileId, takeFilePriority}) => {

    const dispatch = useDispatch()

    const filePriority = useSelector(state => state.filesReducer.files.filter(file => file.id === fileId))[0].priority

    const [priority, setPriority] = React.useState(filePriority);

    const handleChange = (event) => {
        setPriority(event.target.value);
        takeFilePriority(event.target.value);
    };

    return (
        <FormControl variant="standard" sx={{m: 1, minWidth: 70, marginRight: "20px"}}>
            <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
            <Select
                onChange={handleChange}
                label="Priority"
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Priority;