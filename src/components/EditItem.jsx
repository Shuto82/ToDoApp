import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { editItem } from '../utils';

export const EditItem = ({open, setOpen, id, description}) => {
  const [input, setInput] = React.useState(description)

  const handleSave = () => {
    editItem(id, input);
    handleClose();
  }

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Módosítás</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            multiline
            maxRows={3}
            type='text'
            fullWidth
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button>
          <Button onClick={handleSave}>Mentés</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}