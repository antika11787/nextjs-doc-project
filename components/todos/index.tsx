'use client';

import { useState, useEffect } from "react";

type Todos = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

type TodosData = {
    todos: Todos[];
    total: number;
    skip: number;
    limit: number;
}

const Todos = () => {
    const [data, setData] = useState<TodosData>({ todos: [], total: 0, skip: 0, limit: 0 });

    const fetchTodos = async () => {
        const res = await fetch('https://dummyjson.com/todos')
        const fetchedData = await res.json()
        setData(fetchedData)
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div className="card-container">
            {data?.todos?.map((todo) => {
                return (
                    <div key={todo.id} className="todos">
                        <p>{todo.todo}</p>
                    </div>
                )
            })} 
        </div>
    )
}

export default Todos;
