import React, { useEffect, useState } from 'react'
import { readTodos } from '../utils';
import { Todo } from './Todo';
import { List } from '@mui/material';

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        readTodos(setTodos)
    }, []);

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(obj => <Todo key={obj.id} {...obj} /> )}
      </List>
    </div>
  )}