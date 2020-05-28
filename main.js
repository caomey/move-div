var div = document.createElement('div')
document.body.append(div)
var dragging = false

var lastX
var lastY

div.onmousedown = function(e){
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
    console.log(dragging)
}
document.onmouseup = () => {
    dragging = false
    console.log(dragging)
}

document.onmousemove = (e) => {
    if (dragging){
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        console.log('lastX, lastY')
        console.log(deltaX, deltaY)

        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0

        div.style.top = top + deltaY + 'px' ;
        div.style.left = left + deltaX + 'px';
        console.log(div.style.top)
        lastX = e.clientX
        lastY = e.clientY
    }
}
