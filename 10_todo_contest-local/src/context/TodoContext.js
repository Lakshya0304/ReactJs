import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
    todos : [
        {
            id : 1 ,
            todo : "Todo mssg 1",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : ( id , todo ) => {},
    deleteTodo : (id) => {} ,
    completeTodo : (id ) => {} ,
})

export const TodoProvider = TodoContext.Provider ;

export const useTodo = () => {
    return useContext(TodoContext)
}