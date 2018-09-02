export default {
    moveElement(element, finalX, finalY, interval = 100) {
        const position = {
            xPos: parseInt(element.style.left),
            yPos: parseInt(element.style.top)
        }

        setInterval(() => {
            if(position.xPos === finalX) {
                clearInterval(this)
            } else {
                move(element, position, finalX, finalY)
            }
        }, interval)
        setInterval(() => {
            if(position.yPos === finalY) {
                clearInterval(this)
            } else {
                move(element, position, finalX, finalY)
            }
        }, interval)
    }
}

function move(element, position, x2, y2) {
    if(position.xPos < x2) position.xPos++
    else position.xPos--
    if(position.yPos < y2) position.yPos++
    else position.yPos--
    element.style.left = `${position.xPos}px`
    element.style.top = `${position.yPos}px`
}