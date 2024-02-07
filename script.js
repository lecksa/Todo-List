import { reload } from "./function.js"

let body = document.body
// let form = document.forms.todolist
let wrap = document.querySelector('.wrap')
let submit = document.querySelector('#submit')
let todo = document.querySelector('#todo')

let arr = []

// let data = new Date().toLocaleTimeString()
// console.log(data);

// form.onsubmit = (event) => {
//     event.preventDefault();
//     add_list()
// }

// function add_list() {
//     let lists = []

//     let data = new FormData(form)

//     lists.push(data)

//     console.log(lists);
// }



submit.onclick = () => {
    
    if (todo.value.trim() !== '') {
        // let value = todo.value.trim()
        // let time = new Date().toLocaleTimeString()
        // let random = Math.round(Math.random() * 246)
        let value_time = {
            value: todo.value.trim(),
            time: new Date().toLocaleTimeString(),
            id: Math.round(Math.random() * 246)
        }

        arr.push(value_time)
        reload(wrap, arr)
        todo.value = ''
    }
}
