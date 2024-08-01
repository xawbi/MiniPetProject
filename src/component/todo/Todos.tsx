import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import TodosItem from "./TodosItem";

const Todos = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
    console.log('UseEffectRunTodos')
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      return setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  let count: number = 1

  return (
    <div>
      {todos.map(todo =>
        <TodosItem count={count++} key={todo.id} todo={todo}/>
      )}
    </div>
  );
};

export default Todos;