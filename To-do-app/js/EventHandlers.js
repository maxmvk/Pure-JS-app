import store from "./store/index.js"
import backendMain from './backendMain.js';
import DomElemCreate from './DomElemCreate.js';

export default class EventHandlers {
    constructor() {}

    handleDelete(buttonsDelete, todo){
        buttonsDelete.forEach((button, id) => {
            let cache = todo[id]._id;
            button.addEventListener('click', () => {
                backendMain.deleteItem(cache)
                store.dispatch('removeItem', { id })
            })
        })
    }

    handleDone(buttonsCheckbox, todo){
        buttonsCheckbox.forEach((button, id) => {
            let newTodo = todo[id];
            button.addEventListener('click', () => {
                backendMain.doneItem(newTodo._id);
                newTodo.completed = true;
                store.dispatch('doneItem', { newTodo, id })
            })
        })
    }

    handleEdit(titles, todo){

        titles.forEach((title, id) =>
            title.addEventListener('click', () => {
                if(!document.querySelector('.input-change')){
                    const changeItem = DomElemCreate('input', { type: 'text', className: 'input-change', value: title.innerText }, 'changeText');
                    const buttonSave = DomElemCreate('button', { type: 'button', className: 'button-save' }, 'Save');
                    document.querySelectorAll('li')[id].appendChild(changeItem);
                    document.querySelectorAll('li')[id].appendChild(buttonSave);
                    changeItem.focus();

                    document.getElementsByName('checkbox')[id].remove();
                    title.remove();
                    document.getElementsByName('delete')[id].remove();

                    let newTodo = todo[id];

                    buttonSave.addEventListener('click', event => {
                        let value = changeItem.value.trim();
                        backendMain.editItem(newTodo._id, value);
                        newTodo.text = changeItem.value.trim();
                        if(value.length) {
                            store.dispatch('editItem', { newTodo, id });
                        }
                    })
                }
            })
        );
    }
}