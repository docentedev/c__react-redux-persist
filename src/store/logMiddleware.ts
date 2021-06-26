const logMiddleware = (store: any) => (next: any) => (action: any) => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Store', store.getState())
        console.log('Action', action)
    }
    next(action)
}

export default logMiddleware
