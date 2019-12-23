import Router from './router.js';
import backendAuth from './backendAuth.js';

//localStorage.removeItem('auth-items');

const router = new Router(document.getElementById('app'));
backendAuth.checkAuth('main')