import React, { useState } from 'react';
import firebase from '../firebase';

export default function Form() {
    // on utilise le hook state
    const [title, setTitle] = useState('')
    // fonction pour mettre a jour mon title
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    // on fait l'enregistrement dans la DB
    const createTodo = () => {
        const todoRef = firebase.database().ref('/Todo')
        const todo = {
            title,
            completed: false
        }
        todoRef.push(todo);
    }
    // on affiche notre formulaire
    return (
        <div>
            <input type="text" onChange={handleChange} ></input>
            <button onClick={createTodo}>Add Todo</button>
        </div>
    )
}