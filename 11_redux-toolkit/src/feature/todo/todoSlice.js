import { createSlice , nanoid } from "@reduxjs/toolkit";

// nanoid => Basically create a unique id  

const initialState = {
    todos : [
        {
            id : nanoid(), 
            text : "test"
        }
    ]
}

function add () {
    console.log("Hello");  
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        // addTodo : add 
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        
        removeTodo : (state , action) => {
            state.todos = state.todos.filter( (todo) => todo.id !==action.payload)
        },

        updateTodo : (state , action) => {
            state.todos = state.todos.filter( (todo) => todo.id === id ? text : todo )
        }
    }
})

export const { addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer 