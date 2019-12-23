import store from "./store/index.js"
import authStorage from "./store/AuthStorage.js";
class BackendAuth {
    constructor() {
        this.url = 'https://todo-app-back.herokuapp.com'
    }
    logIn(settings){
        fetch(this.url + '/login', {
            method: 'POST',
            body:
                JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(resp => authStorage.setAuthItem('auth-items', resp)).then(setTimeout(()=>{store.dispatch('login', settings)},500))
            } else {
                console.log('Network request for products.json failed with response ' + resp.status + ': ' + resp.statusText);
            }
        })
        
    }
    checkAuth(settings) {
        fetch(this.url + '/me', {
            method: 'GET',
            headers: {
                'Authorization': authStorage.getAuthItem('auth-items').token
            }
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(store.dispatch('login', settings))
            } else {
                resp.json().then(store.dispatch('login', 'login'))
            }
        })
    }
}

export default new BackendAuth()