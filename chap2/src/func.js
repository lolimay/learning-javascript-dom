export function showPic(img) {
    const url = img.getAttribute('href')
    const gallery = document.querySelector('#placeholder')

    gallery.setAttribute('src', url)
}