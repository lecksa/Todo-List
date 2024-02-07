let body = document.body
let form = document.forms.todolist
let wrap = document.querySelector('.wrap')
let submit = document.querySelector('#submit')
let todo = document.querySelector('#todo')

let arr = []

let data = new Date().toLocaleTimeString()
console.log(data);

form.onsubmit = (event) => {
    event.preventDefault();
    add_list()
}

function add_list() {
    let lists = []

    let data = new FormData(form)

    lists.push(data)

    console.log(lists);
}

