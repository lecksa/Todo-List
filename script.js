import { reload } from "./function.js"

export let wrap = document.querySelector('.wrap')
let submit = document.querySelector('#submit')
let todo = document.querySelector('#todo')

let dialog = document.querySelector('[data-modal]')

let close = document.querySelector('#first')

close.onclick = () => {
    dialog.close()
}

export let arr = []

submit.onclick = () => {
    
    if (todo.value.trim() !== '') {
        let value_time = {
            value: todo.value.trim(),
            time: new Date().toLocaleTimeString('uz-UZ'),
            id: Math.random().toFixed(2),
            status: false
        }

        arr.push(value_time)
        reload(wrap, arr)
        todo.value = ''
    }
}

