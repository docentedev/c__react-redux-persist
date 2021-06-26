const createPersist = (key: string) => {
    const ls = window.localStorage
    return {
        set: (value: any) => {
            ls.setItem(key, JSON.stringify(value))
        },
        get: () => {
            try {
                const value = ls.getItem(key)
                if (value) return JSON.parse(value)
                return false
            } catch (error) {
                return false
            }
        },
        remove: () => {
            ls.removeItem(key)
        }
    }
}

export default createPersist
