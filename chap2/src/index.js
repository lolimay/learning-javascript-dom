const h1 = document.createElement('h1')
const ul = document.createElement('ul')
const urls = ['./assets/images/cat.png', './assets/images/dog.png']

h1.innerText = 'Snapshots'
urls.forEach((url) => {
    const li = document.createElement('li')
    li.innerHTML = `<a href="${url}">11</a>`
    ul.appendChild(li)
})

document.body.appendChild(h1)
document.body.appendChild(ul)