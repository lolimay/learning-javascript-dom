import  { showPic } from './func'
import './style/main.css'

const h1 = document.createElement('h1')
const ul = document.createElement('ul')
const gallery = document.createElement('img')
const images = {
    cat: './assets/images/cat.jpg',
    dog: './assets/images/dog.jpg',
    planet: './assets/images/planet.jpg',
    grass: './assets/images/grass.jpg',
    magic: './assets/images/magic.jpg'
}

h1.innerText = 'Snapshots'
Object.keys(images).forEach((item) => {
    const li = document.createElement('li')
    
    li.innerHTML = `<a href="${images[`${item}`]}">${item}</a>`
    ul.appendChild(li)

    const a = li.querySelector('a')
    a.onclick = (e) => {
        event.preventDefault()
        showPic(e.target)
    }
})
gallery.id = 'placeholder'
gallery.src = './assets/images/gallery.png'

document.body.appendChild(h1)
document.body.appendChild(ul)
document.body.appendChild(gallery)