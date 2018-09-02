import util from './util'
import './style/main.css'

const box = document.createElement('div')

box.style.position = 'absolute'
box.style.left = '800px'
box.style.top = '500px'
box.classList.add('box')
console.log(box.style)
util.moveElement(box, 600, 0, 10)

document.body.appendChild(box)