
store => It is a kind of globally single variable from where we getting our all stuff

reducers => There are many small store i.e. all functinalty part are done by reducer

useSelector => When you want to select the value from the store 

useDispatch => When you want to send something to the store


1. Create a store => store.js file 
    In this configure the store and add the reducer or features

2. Create a functionality or features => 
    Like todoSlice here slice is just for documentation standards 

    create an initial State like 
    const initialState = { }

    createSlice({
        name : 
        initialState 
        reducers : {
            //here we add our features like addtodo , deletetodo
        }

    })

    export const { reducers } = todoSlice.actions

    export { reducers }
