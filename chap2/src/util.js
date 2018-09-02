export default {
    appendChilds(element, ...childs) {
        for(let i=0; i<childs.length; i++) {
            element.appendChild(childs[i])
        }
    },
    insertAfter(newElement, targetElement) {
        const parent = targetElement.parentNode
        if(parent.lastChild === targetElement) {
            parent.appendChild(newElement)
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling)
        }
    },
    countBodyChildrenElement() {
        return document.body.childElementCount
    },
    countBodyChildren() {
        return document.body.childNodes.length
    },
    showPic(img) {
        const url = img.getAttribute('href')
        const gallery = document.querySelector('#placeholder')

        gallery.setAttribute('src', url)
    }
}