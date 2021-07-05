import React from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core';
import './Todo.css';
function Todo(props) {
    return (
        <div>
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.text}></ListItemText>
                </ListItem>
            </List>

        </div>
    )
}

export default Todo
