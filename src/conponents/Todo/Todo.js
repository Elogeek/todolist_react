import './Todo.css';
import {TodoItem} from "../TodoItem/TodoItem";

export const Todo = function () {

    const todoItems =[
        {id: 1, name: "test", bool:0},
        {id: 2, name: "test_2", bool:0},
        {id: 3, name: "cours react", bool:0},
    ];

    return(
        <div className="Todo">
            <div className="list">
               <p>
                   {todoItems.map(todoItem =>
                    <TodoItem id={todoItem.id} name={todoItem.name} bool={todoItem.bool}/>
               )}
               </p>
            </div>
        </div>
    );
}