export default class Filter {
    constructor(elem, text) {
        this.elem = elem;
        this.elem.innerText = text;
    }
    filterCompleted(){
        this.elem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelectorAll('li').forEach((li)=>{
                li.style.display='';
                if(li.classList.contains('todo-item-done') === false){
                    li.style.display='none';
                }
            })
        });
    }
    filterNotCompleted(){
        this.elem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelectorAll('li').forEach((li)=>{
                li.style.display='';
                if(li.classList.contains('todo-item-done') === true){
                    li.style.display='none';
                }
            })
        })
    }
    filterAll(){
        this.elem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelectorAll('li').forEach((li)=>{
                li.style.display='';
            })
        });
    }
}