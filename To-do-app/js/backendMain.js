import store from "./store/index.js"
import authStorage from "./store/AuthStorage.js";
class BackendMain {
    constructor() {
        this.url = 'https://todo-app-back.herokuapp.com/todos';
    }
    
    getItems(){
        fetch(this.url, {
            method: 'GET',
            headers: {
                'Authorization': authStorage.getAuthItem('auth-items').token
            }
        })
        .then(resp => resp.json())
        .then(resp => resp.forEach(item => {store.dispatch('addItem', item)}))
    }
    addItem(item){
        fetch(this.url, {
            method: 'POST',
            body:
              JSON.stringify({
                text: item,
              }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': authStorage.getAuthItem('auth-items').token
            }
          })
          .then(resp => resp.json())
          .then(resp => store.dispatch('addItem', resp))
    }
    deleteItem(cache) {
        fetch(this.url + '/' + cache, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authStorage.getAuthItem('auth-items').token
            }
        })
    }
    doneItem(cache) {
        fetch(this.url + '/' + cache, {
            method: 'PUT',
            body:
                JSON.stringify({
                    completed: true,
                }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authStorage.getAuthItem('auth-items').token
            }
        })
    }
    editItem(cache, value) {
        fetch(this.url + '/' + cache, {
            method: 'PUT',
            body:
                JSON.stringify({
                    text: value,
                }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authStorage.getAuthItem('auth-items').token
            }
        })
    }
}

export default new BackendMain()