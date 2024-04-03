import React, { useState, useEffect } from 'react';
import './index.css';

function TodoApp() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []); // KAydedilem todo listesi varsa onu kullandık
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); //todos her değiştiğinde local storage kayıt ediliyor.

    const add = (text) => {
        const clearTrimText = text.trim();
        if (clearTrimText) {
            setTodos([...todos, { text: clearTrimText, done: false }]);
            setNewTodo('');
        }
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done; //False true oldu.
        setTodos(newTodos);
    };

    const del = (index) => {
        const newTodos = todos.filter((_, item) => item !== index); //Diğerlerini listeledik.
        setTodos(newTodos);
    };

    const delCompleted = () => {
        setTodos(todos.filter(todo => !todo.done)); //tamamlanmamış todolar gösterilir.
    };

    const filtered = todos.filter(todo => {
        if (filter === 'active') return !todo.done; // active iken tamamlanmayanlar 
        if (filter === 'completed') return todo.done; // completed iken tamamlananlar
        return true; // ikisi de değilse tm todolar listelenir.
    });

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={(e) => { e.preventDefault(); add(newTodo); }}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        autoFocus
                    />
                </form>
            </header>

            {todos.length > 0 && (
                <React.Fragment>
                    <section className="main">
                        <ul className="todo-list">
                            {filtered.map((todo, index) => (
                                <li key={index} className={todo.done ? 'completed' : ''}>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" checked={todo.done} onChange={() => toggleComplete(index)} />
                                        <label>{todo.text}</label>
                                        <button className="destroy" onClick={() => del(index)}></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <footer className="footer">
                        <span className="todo-count">
                            {todos.filter(todo => !todo.done).length} items left
                        </span>
                        <ul className="filters">
                            <li><button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All</button></li>
                            <li><button onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Active</button></li>
                            <li><button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Completed</button></li>
                        </ul>
                        <button className="clear-completed" onClick={delCompleted}>
                            Clear completed
                        </button>
                    </footer>
                </React.Fragment>
            )}
        </section>
    );
}

export default TodoApp;