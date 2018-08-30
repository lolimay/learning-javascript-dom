import './style.css'

const element = document.createElement('div')

element.classList.add('panel')
element.setAttribute('title', 'lolimay')

element.innerHTML = `
<p>JavaScript DOM 编程艺术</p>
<p>${element.getAttribute('title')}</p>
`.trim()

document.body.appendChild(element)