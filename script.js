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
        let value_time = {
            value: todo.value.trim(),
            time: new Date().toLocaleTimeString()
        }

        arr.push(value_time)
        reload(wrap, arr)
        todo.value = ''
    }
}

function reload(place, your_list) {
    place.innerHTML = ""

    for (let item of your_list) {

        let box = document.createElement('div')
        let text = document.createElement('div')
        let h1 = document.createElement('h1')
        let btn = document.createElement('button')
        let p = document.createElement('p')

        box.classList.add('box')
        text.classList.add('text')

        h1.innerHTML = item.value
        btn.innerHTML = "x"
        p.innerHTML = item.time

        place.append(box)
        box.append(text, p)
        text.append(h1, btn)

        btn.onclick = () => {
            your_list.splice(your_list.indexOf(item), 1)
            box.remove()
        }
    }
}


