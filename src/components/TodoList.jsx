import React, { useEffect, useState } from 'react'
import { readTodos } from '../utils';
import { Todo } from './Todo';
import { List } from '@mui/material';
import { AddNewItem } from './AddNewItem';

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        const unsubscribe = readTodos(setTodos);
        return () => unsubscribe;
    }, []);

  return (
    <div>
      <AddNewItem />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(obj => <Todo key={obj.id} {...obj} /> )}
      </List>
    </div>
  )}