import React from 'react';
import {Divider, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {deleteFile} from "../../redux/filesReducer";
import {Link, NavLink} from "react-router-dom";

const File = ({id, name, priority}) => {

    const dispatch = useDispatch();

    let backColor;

    if(priority === 1){
        backColor = '#33CC33';
    } else if(priority === 2){
        backColor = '#FFFF33';
    } else if(priority === 3) {
        backColor = '#FF3333';
    } else{

    }


    return (<NavLink style={{textDecoration: "none", color: "black"}} to={`/file/${id}`}>
            <Divider />
            <ListItem style={{backgroundColor: `${backColor}`}}>
                <ListItemIcon>
                    <ArticleIcon/>
                </ListItemIcon>
                <ListItemText>{name}</ListItemText>
                <ListItemIcon onClick={() => dispatch(deleteFile(id))}>
                    <DeleteIcon/>
                </ListItemIcon>
            </ListItem>
            <Divider/>
        </NavLink>
    );
};

export default File;