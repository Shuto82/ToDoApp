import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteToDo, toggleDone } from "../utils";
import CreateIcon from "@mui/icons-material/Create";
import { EditItem } from "./EditItem";

export const Todo = ({ id, description, done }) => {
  console.log(id);
  const [open, setOpen] = React.useState(false); 

  return (
    <>
    <ListItem
      key={id}
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="comments">
            <DeleteForeverIcon
              onClick={() => deleteToDo(id)}
              sx={{ color: "red" }}
            />
          </IconButton>
          <IconButton edge="end" aria-label="comments">
            <CreateIcon sx={{ color: "blue" }} 
              onClick={() => setOpen(true)}
            />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={() => toggleDone(id, !done)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={done}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": id }}
          />
        </ListItemIcon>
        <ListItemText id={id} primary={description} />
      </ListItemButton>
    </ListItem>
    {open && <EditItem open = {open} setOpen = {setOpen} id = {id} description = {description} />}
    </>
  );
};
