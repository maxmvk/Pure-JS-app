import LoginComponent from './LoginComponent.js';
import MainComponent from './MainComponent.js';
export default {
    'login': {
        data: { route: 'login' },
        url: 'login',
        component: LoginComponent,
        settings: {
            redirect: 'main'
        }
    },
    'main': {
        data: { route: 'main' },
        url: 'main',
        component: MainComponent,
        settings: {}
    }
}