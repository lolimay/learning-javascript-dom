import  util from './util'
import './style/main.css'
import images from './data.json'

const h1 = document.createElement('h1')
const ul = document.createElement('ul')
const gallery = document.createElement('img')
const description = document.createElement('p')

window.onload = () => {
    console.log(`
onload: body的子元素节点一共有：${util.countBodyChildrenElement()} 个
onload: body的子节点一共有：${util.countBodyChildren()} 个`.trim())
}

h1.innerText = 'Snapshots'
for(const item in images) {
    const li = document.createElement('li')

    li.innerHTML = `<a href="${images[`${item}`].url}" title="${images[`${item}`].title}">${images[`${item}`].name}</a>` // ${images[`${item}`]}
    ul.appendChild(li)

    const a = li.querySelector('a')
    a.onclick = (e) => {
        const descripton =  document.querySelector('.description')

        event.preventDefault()
        util.showPic(e.target)
        descripton.innerText = e.target.getAttribute('title')
    }
}
gallery.id = 'placeholder'
gallery.src = './assets/images/gallery.png'
description.classList.add('description')
description.innerText = '请选择一张图片'

document.body.appendChild(h1)
document.body.appendChild(ul)
document.body.appendChild(gallery)
document.body.appendChild(description)