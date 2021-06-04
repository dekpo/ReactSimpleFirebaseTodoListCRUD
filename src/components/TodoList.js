import firebase from '../firebase'
import React, { useEffect, useState } from 'react'
import Todo from './Todo'
export default function TodoList() {
    // on utilise le hook state sur la liste de taches
    const [todoList,setTodoList] = useState()
    // on lance un callback à l'affichage de notre composant
    // pour mettre à jour la liste si une nouvelle entrée est détectée
    useEffect(()=>{
        const todoRef = firebase.database().ref('/Todo')
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = []
            for (let id in todos){ todoList.push({id,...todos[id]})}
            todoList.reverse()
            setTodoList(todoList)
            // console.log(todoList)
        })
    },[]);
    // on affiche la liste
    return (
        <div>
            {
            todoList ? todoList.map( (todo, index) => <Todo todo={todo} key={index} />) : '' }
        </div>
    )
}