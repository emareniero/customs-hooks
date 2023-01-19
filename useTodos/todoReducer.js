
// Creamos la función del reducer
export const todoReducer = ( initialState = [], action) => {

    // Usamos un swtich para evaluar las acciones
    switch (action.type) {
        case '[TODO] Add Todo':
            // // Lanzamos un error para saber que estamos aca
            // throw new Error('action.type = ABC, no esta definido')
            
            // Aca va a devolver el nuevo estado  
            return [ ...initialState, action.payload ];
    
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            } )
        
        default:
            // En caso que no se mande mandamos el estado inicial
            return initialState;
    }

}