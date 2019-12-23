import Component from './component.js';
import store from './store/index.js';
import backendAuth from './backendAuth.js';

export default class LoginComponent extends Component {
    constructor(app, settings) {
        const template = document.getElementById('login').content.cloneNode(true);
        app.append(template);
        super(
            store,
            app
        );
        this.settings = settings;
    }

    render(){
        app.querySelector('.button-submit').addEventListener('click', event => {
            event.preventDefault();
            backendAuth.logIn(this.settings.redirect);
        })
    }
}
