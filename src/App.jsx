import { useState } from "react";
import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { SignIn } from "./components/Login";
import { getCurrentUser, signOutUser } from "./utils";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { auth } from "./firebaseApp";

function App() {
  const [user, setUser] = useState(null);
  getCurrentUser(setUser);

  return (
    <div className="app">
      <h1>My To Do List</h1>
      {user && (
        <MeetingRoomIcon
          onClick={() => signOutUser(auth)}
          titleAccess="Kilépés"
          sx={{ width: "100%", cursor: "pointer", color: "red", fontSize: '2rem' }}
        />
      )}
      {user == null ? <SignIn /> : <TodoList />}
    </div>
  );
}

export default App;
