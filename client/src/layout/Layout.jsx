import { useState, useEffect } from 'react'

// Components
import { Header } from "../components/Header.jsx"
import { Body } from "../components/Body.jsx"
import { Footer } from "../components/Footer.jsx"

export const Layout = () => {
    const [showForm, setShowForm] = useState(false);
    const [todoState, setTodoState] = useState(false);
    const [todoItems, setTodoItems] = useState(JSON.parse(localStorage.getItem('todo')) || [])

    const handleShowForm = () => {
        setShowForm((prev) => !prev)
    }

    const handleTodoState = () => {
        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }
        setTodoState(!isEmpty(todoItems) ? true : false);
    }

    useEffect(() => {
        handleTodoState()
    }, [todoItems]) 

    const handleCreateTodo = (newTodo) => {

        const existingTodos = JSON.parse(localStorage.getItem('todo')) || [];
        const updatedTodos = [...existingTodos, newTodo];

        setTodoItems(updatedTodos)
        localStorage.setItem('todo', JSON.stringify(updatedTodos));
    }

    const handleDeleteTodo = (index) => {
        const deletedTodo = todoItems.filter((_, i) => i !== index)
        setTodoItems(deletedTodo)

        localStorage.setItem('todo', JSON.stringify(deletedTodo));
    }

    const props = {
        showForm,
        todoState,
        todoItems,
        handleShowForm,
        handleTodoState,
        handleCreateTodo,
        handleDeleteTodo
    }

    return (
        <main id="app-layout">
            <Header {...props}/>
            <Body {...props}/>
            <Footer/>
        </main>
    )
}