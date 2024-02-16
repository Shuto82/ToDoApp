import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { addNewToDo } from '../utils';
import { useState } from 'react';

export const AddNewItem = () => {
    const [newItem, setNewItem] = useState('')
    const handleAdd = () => {
        addNewToDo(newItem);
        setNewItem('')
    }

  return (
    <div className='addNewItem'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="Új tennivaló hozzáadása" 
      variant="outlined" 
      value = {newItem}
      onChange={(e) => setNewItem(e.target.value)}
      /> 
      
    </Box><AddBoxIcon onClick = {handleAdd} sx={{color: 'green', fontSize: '2rem', cursor: 'pointer'}}/>
    </div>
  );
}