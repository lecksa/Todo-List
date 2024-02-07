export function reload(place, your_list) {
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