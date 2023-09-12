import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, List, ListItem, ListItemText } from '@mui/material';
import { toggleTodo, deleteTodo } from '../redux/todos';
import AddTodo from './AddTodo';
import Button from '@mui/material/Button';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='container'>
     <AddTodo />
     <div className='size-20'></div>
    <List className='container'>
      {todos.map((todo , i) => (
        <ListItem key={i} divider>
            <Grid container>
          <ListItemText
            primary={todo.title}
            secondary={todo.description}
            className={todo.checked ? 'line_through' : 'rest_line'}
          />
          </Grid>
          <Grid container gap='15px' justifyContent='end'>
            <Button className='custom-bac' variant="contained" color="success" onClick={() => handleToggle(todo.id)}>
                {todo.checked ? "Undo" : "Archive"}
            </Button>
            <Button variant="outlined" color="error" onClick={() => handleDelete(todo.id)}>
                Delete
            </Button>
            </Grid>
        </ListItem>
      ))}
    </List>
    </div>
  );
};

export default ToDoList;
