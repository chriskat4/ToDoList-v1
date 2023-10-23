import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import { Container , Box , List } from '@mui/material';
import TodoItem from '../components/TodoItem';

export default function Home() {
    const [todos, setTodos] = useState([]);
    
    const todoHandler = (todo) => {
        setTodos([...todos,todo]);
    }
    const deleteTodo = (id) =>{
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }
    

    return (
        <Container maxWidth='xs' style={{background:"#dddddd"}}>
        <Box m={5}/>
        <Form todoHandler={todoHandler}/>
        <List sx={{ width: '100%', maxWidth: 360}}>
            {todos.map((todo)=>(
                <div key={todo.id}style={ { padding: "1em",background:"#dddddd"} }>
                    <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                </div>
            ))}
        </List>
        </Container>
    )
}
