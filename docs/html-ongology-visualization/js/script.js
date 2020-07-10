
function log(content) {
    console.log(content)
}

function logError(content) {
    console.error('ERROR: ' + content)
}

function toRadians(value) {
    return (value * Math.PI) / 180
}

function toDegrees(value) {
    return (value * 180) / Math.PI
}

function getCoordenate(x0, y0, length, angle) {
    var sinAlpha = Math.sin(toRadians(angle))
    var cosAlpha = Math.cos(toRadians(angle))
    var x1 = (length * cosAlpha) + x0
    var y1 = (length * sinAlpha) + y0
    return { x: x1, y: y1 }
}

function getDistance(pointA, pointB) {
    var distX = pointB.x - pointA.x
    var distY = pointB.y - pointA.y
    return Math.sqrt((distX * distX) + (distY * distY))
}

function tryToInvoque(func) {
    if (func != null && (typeof func) == 'function') {
        func()
    }
}

function newArrayWithSize(size) {
    if ((typeof size) != 'number' || size < 0) {
        return []
    }
    return new Array(size).fill(0)
}