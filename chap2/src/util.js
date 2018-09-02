export default {
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