import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {id:Math.random(),title:'Start ',description:'this todo just for trying ',checked:false}

  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    addTodo: (state, action) => {
        state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
