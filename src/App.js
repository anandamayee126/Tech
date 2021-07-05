import './App.css';
import React,{useEffect, useState} from 'react';
import { Button,InputLabel,FormControl,Input } from '@material-ui/core';
import Todo from './Todo'
import {db} from './Firebase'
import firebase from 'firebase'
function App() {
  const [Todos,setTodos]=useState([])
  const [input,setInput]=useState('')
  const AddTodo= (e)=>{
    e.preventDefault()
    db.collection('Todos').add({
      todo:input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...Todos,input])
    setInput('')
  }
  useEffect(() => {
       db.collection('Todos').orderBy('timeStamp','desc').onSnapshot(snapshot=>{
        setTodos(snapshot.docs.map(doc=>doc.data().todo))
     })
  }, [])
  return (
    <div className="App">
        <h1> TODO_APP</h1>
        <form>
          <FormControl>
            <InputLabel>**Write your ToDo</InputLabel>
            <Input value={input} onChange={e=>(
              setInput(e.target.value) )}/>
          </FormControl>
          <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={AddTodo}>
            Add ToDo
          </Button>
        </form>
        
        <ul>
          {Todos.map(todo=>(
            <Todo text={todo}/>
            //<li>{todo}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
