import React, {FC, memo} from 'react';
import {ITodo} from "../types/types";

interface TodoProps {
  todo: ITodo
  count: number
}

const TodosItem: FC<TodoProps> = memo(({todo, count}) => {
  return (
    <div>
      {count} {todo.title}
    </div>
  );
})

export default TodosItem;