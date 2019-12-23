import Component from './component.js';
import store from "./store/index.js"
import backendMain from './backendMain.js';
import Filter from './Filter.js'
import ButtonAdd from './ButtonAdd.js'
import EventHandlers from './EventHandlers.js'

export default class MainComponent extends Component {
    constructor(app, settings) {
        const template = document.getElementById('main').content.cloneNode(true);
        app.append(template);
        super(
            store,
            document.querySelector('.ul')
        );
        backendMain.getItems()
        const input = document.querySelector('.input-main')
        const buttonAdd = new ButtonAdd(document.querySelector('.button-add'))
        buttonAdd.setupListener(input);
    }

    render() {
        this.anchor.innerHTML = `
                ${
                    store.state.todo.map(todoItem => `
                        <li class = "todo-item">
                            <button type = "button" name = "checkbox" class = "button-checkbox"></button>
                            <label class = "title">${todoItem.text}</label>
                            <button type = "button" name = "delete" class = "button-delete">Delete</button>
                        </li>
                    `).join('')
                }
        `;
        this.anchor.querySelectorAll('li').forEach((listItem, id) => {
            listItem.addEventListener('mouseover', () => {
                if(listItem.querySelector('.button-delete')){
                    listItem.querySelector('.button-delete').className = 'button-delete-visible'
                }
            })
            listItem.addEventListener('mouseout', () => {
                if(listItem.querySelector('.button-delete-visible')){
                    listItem.querySelector('.button-delete-visible').className = 'button-delete'
                }
            })
            listItem.addEventListener('mouseover', () => {
                if(listItem.querySelector('.button-checkbox')){
                    listItem.querySelector('.button-checkbox').className = 'button-checkbox-visible'
                }
            })
            listItem.addEventListener('mouseout', () => {
                if(listItem.querySelector('.button-checkbox-visible')){
                    listItem.querySelector('.button-checkbox-visible').className = 'button-checkbox'
                }
            })
            if(store.state.todo[id].completed === true){
                listItem.className = 'todo-item-done';
                this.anchor.querySelectorAll('.button-checkbox')[id].innerText = 'V'
            }
        });

        const eventHandlers = new EventHandlers();
        eventHandlers.handleDone(this.anchor.querySelectorAll('.button-checkbox'), store.state.todo)
        eventHandlers.handleEdit(this.anchor.querySelectorAll('.title'), store.state.todo)
        eventHandlers.handleDelete(this.anchor.querySelectorAll('.button-delete'), store.state.todo)

        const buttonCompleted = new Filter(document.querySelector('.button-filter-completed'),`Completed: ${document.querySelectorAll('.todo-item-done').length}`)
        buttonCompleted.filterCompleted()
        const buttonNotCompleted = new Filter(document.querySelector('.button-filter-not-completed'),`Not Completed: ${document.querySelectorAll('.todo-item').length}`)
        buttonNotCompleted.filterNotCompleted()
        const buttonAll = new Filter(document.querySelector('.button-filter-all'),`All: ${document.querySelectorAll('li').length}`)
        buttonAll.filterAll()
    }
}