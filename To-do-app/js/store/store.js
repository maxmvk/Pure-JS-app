import Observer from "./observer.js"

export default class Store {
    constructor(reducers) {
        this.reducers = reducers;
        this.state = {
            todo: [],
            userInfo: {}
        }
        this.events = new Observer();
    }

    dispatch(actionType, payload) {
        if (this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state);
            console.log(this.state);
            if(actionType === 'login'){
                this.events.next('switchRoute', this.state.userInfo.redirect);
            }
            else this.events.next('change', this.state);
        }
    }
}