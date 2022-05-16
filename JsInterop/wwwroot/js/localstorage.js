window.test = {
    LocalStorage: {
        SetItem: (key, value) => localStorage.setItem(key, value),
        GetItem: (key) => {
            return localStorage.getItem(key);
        },
    }
}