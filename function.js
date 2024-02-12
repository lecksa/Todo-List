export function reload(place, your_list) {
    place.innerHTML = ""

    for (let item of your_list) {

        let box = document.createElement('div')
        let text = document.createElement('div')
        let h1 = document.createElement('h1')
        let btn = document.createElement('button')
        let p = document.createElement('p')
        let h2 = document.createElement('h2')

        box.classList.add('box')
        text.classList.add('text')

        h1.innerHTML = item.value
        btn.innerHTML = "x"
        p.innerHTML = item.time
        h2.innerHTML = 'id' + ':' + ' ' + item.id

        place.append(box)
        box.append(text, p, h2)
        text.append(h1, btn)

        if(item.status){
            p.classList.add('line')
        }

        btn.onclick = () => {
            your_list.splice(your_list.indexOf(item), 1)

            box.classList.add('animation')

            setTimeout(() => {
                box.remove()
            }, 500)
        }

        box.ondblclick = () => {
            let dbl = prompt('Измените свой таск')
            if (dbl.trim() !== "") {
                item.value = dbl
                h1.innerHTML = item.value
            }
        }

        h1.onclick = () => {
            if (item.status === false) {
                h1.classList.add("line")
                item.status = true
            } else {
                h1.classList.remove("line")
                item.status = false
            }
        }
console.log(your_list);
    }
}