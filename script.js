import { reload } from "./function.js"

let wrap = document.querySelector('.wrap')
let submit = document.querySelector('#submit')
let todo = document.querySelector('#todo')

let arr = []

submit.onclick = () => {
    
    if (todo.value.trim() !== '') {
        let value_time = {
            value: todo.value.trim(),
            time: new Date().toLocaleTimeString(),
            id: Math.random(),
            status: false
        }

        arr.push(value_time)
        reload(wrap, arr)
        todo.value = ''
    }
}