import backendMain from './backendMain.js';

export default class ButtonAdd {
    constructor(elem) {
        this.elem = elem;
    }

    setupListener(input){
        this.elem.addEventListener('click', () => {
            event.preventDefault();
            if(input.value.length>=5) {
                
                backendMain.addItem(input.value.trim());
                input.value = '';
                input.focus();
            }
        })
    }
}