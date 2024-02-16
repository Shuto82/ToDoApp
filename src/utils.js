import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebaseApp";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";

export const readTodos = (setTodos) => {
    const todolistRef = collection(db, "todolist");
    const q = query(todolistRef, orderBy('timestamp', 'desc'))
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({...doc.data(), id:doc.id })));
      console.log(snapshot.docs);
    });
}

export const toggleDone = async (id, done) => {
  const docRef = doc(db, 'todolist', id);
  await updateDoc(docRef, {done});
}

export const addNewToDo = async (newItem) => {
  const collectionRef = collection(db, 'todolist');
  const newToDo = {
    description: newItem,
    timestamp: serverTimestamp(),
    done: false
  }
  await addDoc(collectionRef, newToDo)
}

//autentikáció
export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  }
  catch (err) {
    console.log(err);
  }
}

export const getCurrentUser = (setUser) => {
  onAuthStateChanged(auth, (current) => setUser(current))
}

export const signOutUser = async () => {
  await signOut(auth);
}

export const deleteToDo = async (id) => {
  const docRef = doc(db, 'todolist', id);
  await deleteDoc(docRef);
}

export const editItem = async (id, description, title, photoUrl) => {
  const docRef = doc(db, 'todolist', id);
  await updateDoc(docRef, {description}, {title}, {photoUrl});
} 