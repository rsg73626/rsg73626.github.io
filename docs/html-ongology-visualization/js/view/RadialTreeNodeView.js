


class RadialTreeNodeView {

    constructor(name, svg) {
        this.name = name

        this.x0   = null
        this.y0   = null
        this.x    = null
        this.y    = null
        this.size = null
        this.originalSize = null

        this.backgroundType = RadialTreeNodeView.BackgroundType.circle
        this.svgLine        = svg.append('line')
        this.svgBackground  = svg.append('circle')
        this.svgLabel       = svg.append('text').text(name)

        this.center = false
        this.visible = true
    }

    // SETTERS

    setPosition(x, y) {
        var move = this.x == null && this.y == null
        this.x = x
        this.y = y
        if (move) {
            this.moveToPosition(this.x, this.y, null, false)
        }
    }

    setSize(size) {
        var show = this.size == null
        this.size = size
        if (show) {
            this.originalSize = size
            this.showBackground(null, false)
            this.showLabel(null, false)
        }
    }

    setBackgroundType(type) {
        this.backgroundType = type
    }

    setLinePosition(x0, y0, x, y) {
        var showAndMove = this.x0 == null && this.y0 == null
        this.x0 = x0
        this.y0 = y0
        this.x = x
        this.y = y
        if (showAndMove) {
            this.showLine(null, false)
            this.moveLine(x0, y0, x, y, null, false)
        }
    }

    setClassToSVGs(cls, addPrefix = true) {
        this.svgBackground.classed((addPrefix ? 'background-' : '') + cls, true)
        this.svgLabel.classed((addPrefix ? 'label-' : '') + cls, true)
        this.svgLine.classed((addPrefix ? 'line-' : '') + cls, true)
    }

    // ANIMATIONS - SHOW

    showBackground(callback, animated = true, delay = 0, animationDuration = 500) {
        if (animated) {
            this.svgBackground.attr('r', this.size)
            this.svgBackground.transition()
                .duration(animationDuration).delay(delay)
                .style('disply', '?')
                .style('opacity', 1)
                .on('end', function() { tryToInvoque(callback) })
        } else {
            this.svgBackground
                .attr('r', this.size)
                .style('disply', '?')
                .style('opacity', 1)
            tryToInvoque(callback)
        }
        this.visible = true
    }

    showLabel(callback, animated = true, delay = 0, animationDuration = 500) {
        if (animated) {
            this.svgLabel.text(this.name)
            this.svgLabel.transition()
                .duration(animationDuration).delay(delay)
                .style('disply', '?')
                .style('opacity', 1)
                .on('end', function() { tryToInvoque(callback) })
        } else {
            this.svgLabel
                .text(this.name)
                .style('disply', '?')
                .style('opacity', 1)
            tryToInvoque(callback)
        }
        this.visible = true
    }

    showLine(callback, animated = true, delay = 0, animationDuration = 500) {
        if (animated) {
            this.svgLine.transition()
                .duration(animationDuration).delay(delay)
                .style('disply', '?')
                .style('opacity', 1)
                .on('end', function() { tryToInvoque(callback) })
        } else {
            this.svgLine
                .style('disply', '?')
                .style('opacity', 1)
            tryToInvoque(callback)
        }
        this.visible = true
    }

    show(callback, animated = true, delay = 0, animationDuration = 500) {
        var didShowBackground = false
        var didShowLabel      = false
        var didShowLine       = false

        function didEndShowingElements() {
            if (didShowBackground && didShowLabel && didShowLine) {
                tryToInvoque(callback)
            }
        }

        this.showBackground(function() {
            didShowBackground = true
            didEndShowingElements()
        }, animated, delay = 0, animationDuration)

        this.showLabel(function() {
            didShowLabel = true
            didEndShowingElements()
        }, animated, delay = 0, animationDuration)

        this.showLine(function() {
            didShowLine = true
            didEndShowingElements()
        }, animated, delay = 0, animationDuration)
    }

    // ANIMATIONS - HIDE

    hideBackground(callback, animated = true, delay = 0, animationDuration = 500) {
        var svg = this.svgBackground
        if (animated) {
            svg.transition()
                .duration(animationDuration).delay(delay)
                .style('opacity', 0)
                .on('end', function() { 
                    svg.style('disply', 'none')
                    svg.attr('r', 0)
                    tryToInvoque(callback)
                })
        } else {
            svg
                .style('opacity', 0)
                .style('disply', 'none')
                .attr('r', 0)
            tryToInvoque(callback)
        }
        this.visible = false
    }

    hideLabel(callback, animated = true, delay = 0, animationDuration = 500) {
        var svg = this.svgLabel
        if (animated) {
            svg.transition()
                .duration(animationDuration).delay(delay)
                .style('opacity', 0)
                .on('end', function() { 
                    svg.style('disply', 'none')
                    svg.text(null)
                    tryToInvoque(callback)
                })
        } else {
            svg
                .style('opacity', 0)
                .style('disply', 'none')
                .text(null)
            tryToInvoque(callback)
        }
        this.visible = false
    }

    hideLine(callback, animated = true, delay = 0, animationDuration = 500) {
        var svg = this.svgLine
        if (animated) {
            svg.transition()
                .duration(animationDuration).delay(delay)
                .style('opacity', 0)
                .on('end', function() { 
                    svg.style('disply', 'none')
                    tryToInvoque(callback)
                })
        } else {
            svg
                .style('opacity', 0)
                .style('disply', 'none')
            tryToInvoque(callback)
        }
        this.visible = false
    }

    hideNode(callback, animated = true, delay = 0, animationDuration = 500) {
        var didHideBackground = false
        var didHideLabel      = false

        function didEndHidingElements() {
            if (didHideBackground && didHideLabel) {
                tryToInvoque(callback)
            }
        }

        this.hideBackground(function() {
            didHideBackground = true
            didEndHidingElements()
        }, animated, delay = delay, animationDuration)

        this.hideLabel(function() {
            didHideLabel = true
            didEndHidingElements()
        }, animated, delay = delay, animationDuration)
    }

    hide(callback, animated = true, delay = 0, animationDuration = 500) {
        var didHideBackground = false
        var didHideLabel      = false
        var didHideLine       = false

        function didEndHidingElements() {
            if (didHideBackground && didHideLabel && didHideLine) {
                tryToInvoque(callback)
            }
        }

        this.hideBackground(function() {
            didHideBackground = true
            didEndHidingElements()
        }, animated, delay = delay, animationDuration)

        this.hideLabel(function() {
            didHideLabel = true
            didEndHidingElements()
        }, animated, delay = delay, animationDuration)

        this.hideLine(function() {
            didHideLine = true
            didEndHidingElements()
        }, animated, delay = delay, animationDuration)
    }

    // ANIMATIONS - MOVE

    moveBackground(x, y, callback, animated = true, delay = 0, animationDuration = 500) {
        if (animated) {
            this.svgBackground.transition()
                    .duration(animationDuration).delay(delay)
                    .attr('cx', x)
                    .attr('cy', y)
                    .on('end', function() {
                        tryToInvoque(callback)
                    })
        } else {
            this.svgBackground
                    .attr('cx', x)
                    .attr('cy', y)
            tryToInvoque(callback)
        }
    }

    moveLabel(x, y, callback, animated = true, delay = 0, animationDuration = 500) {
        var name = this.name
        if (animated) {
            this.svgLabel.transition()
                    .duration(animationDuration).delay(delay)
                    .attr('x', x - (3.3 * name.length))
                    .attr('y', y)
                    .on('end', function() {
                        tryToInvoque(callback)
                    })
        } else {
            this.svgLabel
                    .attr('x', x - (3.3 * name.length))
                    .attr('y', y)
            tryToInvoque(callback)
        }
    }

    moveToPosition(x, y, callback, animated = true, delay = 0, animationDuration = 500) {
        var didMoveBackground = false
        var didMoveLabel      = false

        function didEndMovingElements() {
            if (didMoveBackground && didMoveLabel) {
                tryToInvoque(callback)
            }
        }

        this.moveBackground(x, y, function() {
            didMoveBackground = true
            didEndMovingElements()
        }, animated, delay = delay, animationDuration)

        this.moveLabel(x, y, function() {
            didMoveBackground = true
            didEndMovingElements()
        }, animated, delay = delay, animationDuration)
    } 

    moveLine(x0, y0, x, y, callback, animated = true, delay = 0, animationDuration = 500) {
        if (animated) {
            this.svgLine.transition()
                    .duration(animationDuration).delay(delay)
                    .attr('x1', x0)
                    .attr('y1', y0)
                    .attr('x2', x)
                    .attr('y2', y)
                    .on('end', function() {
                        tryToInvoque(callback)
                    })
        } else {
            this.svgLine
                    .attr('x1', x0)
                    .attr('y1', y0)
                    .attr('x2', x)
                    .attr('y2', y)
            tryToInvoque(callback)
        }
    }

    // ANIMATIONS - RESIZE

    resize(newSize, callback, animated = true, delay = 0, animationDuration = 500) {
        this.size = newSize
        if (animated) {
            this.svgBackground.transition()
                .duration(animationDuration).delay(delay)
                .attr('r', newSize)
                .on('end', function() {
                    tryToInvoque(callback)
                })
        } else {
            this.svgBackground
                .attr('r', newSize)
                .on('end', function() {
                    tryToInvoque(callback)
                })
        }
    }

}

RadialTreeNodeView.BackgroundType = {
    circle: 0
}