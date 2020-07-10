
class TreeElement {

    constructor(name, type) {
        this.name = name
        this.type = type
    }

}

class TreeNode extends Node {

    constructor(value, level, weight = null) {
        super(value, weight)
        this.level = level
    }

    hasChildNodes() {
        return this.getChildNodes().length > 0
    }

    getChildNodes() {
        if (this.level > 0) {
            return this.connections.filter((_, i) => i > 0)   
        }
        return this.connections
    }

    getParentNode() {
        if (this.level > 0) {
            return this.connections[0]
        }
        return null
    }

    addChildNode(node) {
        this.addConnection(node)
    }

    _getSubtreeMetadataRecursively(levelLengths = {}) {
        if (levelLengths[this.level] == null) {
            levelLengths[this.level] = 0
        }
        levelLengths[this.level] += 1
        this.getChildNodes().forEach(childNode => childNode._getSubtreeMetadataRecursively(levelLengths))
        return levelLengths
    }

    getSubtreeMetadata() {
        var subtreeLevelLengths = this._getSubtreeMetadataRecursively()
        var subtreeLevels = d3.keys(subtreeLevelLengths)

        var levels = new Array(this.level).fill(0)

        subtreeLevels.forEach(function(l) {
            levels.push(0)
            levels[l] += subtreeLevelLengths[l]
        })

        return levels
    }

}

class Tree extends Graph {

    constructor() {
        super()

        this.levelLengths = null
    }

    _defineMetadata() {
        this.levelLengths = []
        var length = this.getNodesForLevel(0).length
        while(length > 0) {
            this.levelLengths.push(length)
            length = this.getNodesForLevel(this.levelLengths.length).length
        }
    }

    getRoot() {
        if (this.nodes.length == 0) {
            return null
        }
        return this.nodes[0]
    }

    getLevelLengths() {
        if (this.levelLengths == null) {
            this._defineMetadata()
        }
        return this.levelLengths
    }

    getNodesForLevel(level) {
        if ((typeof level) != 'number' || level < 0) {
            logError('invalid level value.')
            return []
        }
        return this.nodes.filter(node => node.level == level)
    }

    getAmountOfLevels() {
        if (this.levelLengths == null) {
            this._defineMetadata()
        }
        return this.levelLengths.length
    }

    getLevelLength(level) {
        if (this.levelLengths == null) {
            this._defineMetadata()
        }
        if ((typeof level) != 'number' || level < 0 || level >= this.levelLengths.length) {
            logError('invalid level. The tree contains ' + this.levelLengths.length + ' levels.')
            return
        }
        return this.levelLengths[level]
    }

}