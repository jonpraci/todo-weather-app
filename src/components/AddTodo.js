import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Weather from './Weather';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState({ title: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodo({
            ...newTodo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTodo);
        if (newTodo.title != '' || newTodo.description != '') {
            dispatch(addTodo(newTodo));
            setNewTodo({ id: Math.random(), title: '', description: '', checked: false });
        }
    };

    return (
        <div>
            <Weather />

            <h2 className='title' >Add New Todo</h2>

            <form onSubmit={handleSubmit}>
                <Grid container justifyContent='center' gap='15px' style={{ marginBottom: '15px' }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            style={{width:'100%'}}
                            type="text"
                            name="title"
                            value={newTodo.title}
                            onChange={handleInputChange}
                            id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            style={{width:'100%'}}
                            type="text"
                            name="description"
                            value={newTodo.description}
                            onChange={handleInputChange}
                            id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container justifyContent='center'>
                    <button className='custom-btn' variant="contained">ADD TODO</button>
                </Grid>
            </form>
        </div>
    );
};

export default AddTodo;
