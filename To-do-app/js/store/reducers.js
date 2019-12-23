export default function createReducers() {
    return {
        addItem: (payload, state) => ({
            ...state,
            todo: [payload, ...state.todo]
        }),
        removeItem: (payload, state) => ({
            ...state,
            todo: [
                ...state.todo.slice(0, payload.id),
                ...state.todo.slice(payload.id + 1, state.todo.length),
            ]
        }),
        doneItem: (payload, state) => ({
            ...state,
            todo: [
                ...state.todo.slice(0, payload.id),
                payload.newTodo,
                ...state.todo.slice(payload.id + 1, state.todo.length),
            ],
        }),
        editItem: (payload, state) => ({
            ...state,
            todo: [
                ...state.todo.slice(0, payload.id),
                payload.newTodo,
                ...state.todo.slice(payload.id + 1, state.todo.length),
            ],
        }),
        login: (payload, state) => ({
            ...state,
            userInfo: {
                authorized: true,
                redirect: payload,
            }
        })
    }
}