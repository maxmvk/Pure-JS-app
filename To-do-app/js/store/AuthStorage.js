class AuthStorage {
    constructor() {
        this.data = {};
    }
    
    getAuthItem (key) {
        if(JSON.parse(localStorage.getItem('auth-items'))) {
            this.data = JSON.parse(localStorage.getItem('auth-items'))
            return this.data[key];
        } else {
            this.data[key] = 'auth-items';
            return this.data[key];
        }
    }

    setAuthItem (key, value) {
        this.data[key] = value;
        localStorage.setItem('auth-items', JSON.stringify(this.data));
    }
}

export default new AuthStorage();