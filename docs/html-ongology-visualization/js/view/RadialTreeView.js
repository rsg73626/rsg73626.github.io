


class RadialTreeView {

    constructor(containerViewTagId, size, tree) {
        this.id  = RadialTreeView._id++
        this.svg = d3.select(containerViewTagId)
                            .append('svg')
                                .style('disply', 'none')
                                .attr('width', size)
                                .attr('height', size)
        this.origin         = { x: size/2, y: size/2 }
        this.size           = size
        this.availableSpace = size - 200
        this.controller     = new RadialTreeController(this, tree)
        this.viewNodes      = {}
        this.centerNode     = null
    }

    _createRadialTreeNodesRecursively(treeNode) {
        if (treeNode.hasChildNodes()) {
            treeNode.getChildNodes().forEach(childNode => this._createRadialTreeNodesRecursively(childNode))
        }

        var newNode = new RadialTreeNodeView(treeNode.value.name, this.svg)

        var onclickAction = 'RadialTreeView.instances[' + this.id + '].controller.didClickNodeWithId(' + treeNode.id + ')'
        newNode.svgBackground.attr('onclick', onclickAction)
        newNode.svgLabel.attr('onclick', onclickAction)

        newNode.setClassToSVGs(treeNode.value.type.toLowerCase())
        newNode.setClassToSVGs(treeNode.value.type.toLowerCase(), false)
        newNode.setClassToSVGs(treeNode.level)

        this.viewNodes[treeNode.id] = newNode
    }

    _createNodes() {
        this._createRadialTreeNodesRecursively(this.controller.tree.getRoot())
        this.centerNode = this.viewNodes[this.controller.tree.getRoot().id]
        this.centerNode.center = true
    }

    _defineNodesPositions() {
        var viewNodes = this.viewNodes
        var nodesPositions = this._defineNodesPositionsRecursively(
            0, this.controller.tree.getRoot(), 0, 
            this.controller.tree.getLevelLengths(), 
            new Array(this.controller.tree.getAmountOfLevels()).fill(0),
            this.controller.tree.getLevelLengths().map(length => -360 / length),
            this.availableSpace/2/(this.controller.tree.getAmountOfLevels() - 1)
        )
        d3.keys(nodesPositions).forEach(function(id) { 
            var pos = nodesPositions[id]
            viewNodes[id].setPosition(pos.x, pos.y)
        })
    }

    _defineNodesSizes() {
        var viewNodes = this.viewNodes
        var nodesSizes = this._defineNodesSizesWithCenterNodeAtLevelAndLevelLengths(0, this.controller.tree.getLevelLengths())
        this.controller.tree.nodes.forEach(function(node) {
            viewNodes[node.id].setSize(nodesSizes[node.level])
        })
    }

    _defineBranchPositionRecursively(treeNode) {
        var treeNodeView = this.viewNodes[treeNode.id]
        var parentNodeView = this.viewNodes[treeNode.getParentNode().id]
        treeNodeView.setLinePosition(parentNodeView.x, parentNodeView.y, treeNodeView.x, treeNodeView.y)
        treeNode.getChildNodes().forEach(childNode => this._defineBranchPositionRecursively(childNode))       
    }

    _defineBranchesPositions() {
        this.controller.tree.getRoot().getChildNodes().forEach(childNode => this._defineBranchPositionRecursively(childNode))
    }

    _draw() {
        this.svg.style('disply', '')
    }

    init() {

        RadialTreeView.instances[this.id] = this

        this._createNodes()
        this._defineNodesPositions()
        this._defineNodesSizes()
        this._defineBranchesPositions()
        this._draw()
    }

    /**
     * 
     * @param {TreeNode} currentNode 
     * @param {number} currentLevel 
     * @param {Array} levelLengths An array with length equals the amount of levels in the tree, with each position containing the amount of nodes in each level.
     * @param {Array} placedNodesPerLevel An array with length equals the amount of levels in the tree. All the positions must start with 0. It is going to be used by the function to accumulate the amount of nodes that already have its position calculated.
     * @param {Array} sectorPerLevel An array with length equals the amount of levels in the tree. Each position must contain the angle that each node should occupy at each level.
     * @param {number} space A value indicating the distance between the nodes of each level.
     * @param {Object} results An object containing pair in the format `{ node-id: node-position }`. It is used by the function to accumulated the positions. Initially starts empty. It is returned at the end of the recursivity.
     */
    _defineNodesPositionsRecursively(
        centerNodelevel,
        currentNode, 
        currentLevel, 
        levelLengths, 
        placedNodesPerLevel, 
        sectorPerLevel, 
        space, 
        results = {}) {

        if (currentNode.hasChildNodes()) {
            currentNode.getChildNodes().forEach(
                childNode => 
                    this._defineNodesPositionsRecursively(
                        centerNodelevel,
                        childNode, 
                        currentLevel + 1, 
                        levelLengths,
                        placedNodesPerLevel, 
                        sectorPerLevel, 
                        space, 
                        results))
        }

        var sector = sectorPerLevel[currentLevel]
        var distance = space * currentLevel
        var angle = sector * (placedNodesPerLevel[currentLevel] + 1)

        if (currentNode.hasChildNodes() && levelLengths[currentLevel + 1] > levelLengths[currentLevel]) { 
            angle = (sectorPerLevel[currentLevel + 1] * placedNodesPerLevel[currentLevel + 1]) - (sectorPerLevel[currentLevel + 1] * (currentNode.getChildNodes().length * 0.5))
        }

        var coordinate = getCoordenate(this.origin.x, this.origin.y, distance, angle)
        if (sector == -360 && currentLevel == centerNodelevel) {
            coordinate = this.origin
        }
        results[currentNode.id] = coordinate
        placedNodesPerLevel[currentLevel] += 1
        return results
    }

    _defineNodesSizesWithCenterNodeAtLevelAndLevelLengths(centerNodeLevel, levelLengths) {
        var results = {}
        levelLengths.forEach((_,i) => results[i] = 0)

        var amountOfLevels = this.controller.tree.getAmountOfLevels() - centerNodeLevel
        var space = this.availableSpace / 2 / amountOfLevels
        var i = 0
        for (i = centerNodeLevel; i < levelLengths.length; i++) {
            var distance = space * i
            results[i] = ((2 * Math.PI * distance) / levelLengths[i]) * 0.5 * 0.6
            if (results[i] < 25) {
                results[i] = ((2 * Math.PI * distance) / levelLengths[i]) * 0.7
            }
            if (results[i] == 0) {
                results[i] = space * 0.5 * 0.6
            }
            if (results[i] > 40) {
                results[i] = 40
            }
        }
        return results
    }

    moveNode(treeNode) {
        var parentTreeNode = treeNode.getParentNode()
        var tree           = this.controller.tree
        var space          = this.availableSpace/2
        var viewNodes      = this.viewNodes
        var viewNode       = this.viewNodes[treeNode.id]

        // BACKWARDS
        if (viewNode.center && parentTreeNode != null) {

            var levelLengths = parentTreeNode.getSubtreeMetadata()

            var nodesPosition = this._defineNodesPositionsRecursively(
                parentTreeNode.level,
                parentTreeNode, 
                parentTreeNode.level, 
                levelLengths, 
                newArrayWithSize(tree.getAmountOfLevels()),
                levelLengths.map(length => -360 / length),
                space/(tree.getAmountOfLevels() - parentTreeNode.level - 1)
            )
            
            d3.keys(nodesPosition).forEach(function(id) {
                var currentNode = tree.getNodeWithId(id)
                var currentNodeParent = currentNode.getParentNode()
                var currentViewNode = viewNodes[id]
                var position = nodesPosition[id]
                
                if (currentViewNode.visible && currentViewNode.size != currentViewNode.originalSize) {
                    currentViewNode.resize(currentViewNode.size/2)
                }
                currentViewNode.moveToPosition(position.x, position.y, null, true, 500)

                if (currentNodeParent != null) {
                    var parentPosition = nodesPosition[currentNodeParent.id]
                    if (parentPosition != null) {
                        currentViewNode.moveLine(parentPosition.x, parentPosition.y, position.x, position.y, null, true, 500)
                    }
                }

                if (!currentViewNode.visible) {
                    currentViewNode.showBackground(null, true, 1000)
                    currentViewNode.showLabel(null, true, 1000)
                    currentViewNode.showLine(null, true, 1500)
                }
            
            })

            this.centerNode.center = false
            this.centerNode = viewNodes[parentTreeNode.id]
            this.centerNode.center = true

        // FORWARD
        } else if (!viewNode.center && treeNode.hasChildNodes()) {
            var levelLengths = treeNode.getSubtreeMetadata()

            var nodesPosition = this._defineNodesPositionsRecursively(
                treeNode.level,
                treeNode, 
                treeNode.level, 
                levelLengths, 
                newArrayWithSize(tree.getAmountOfLevels()),
                levelLengths.map(length => -360 / length),
                space/(tree.getAmountOfLevels() - treeNode.level)
            )
            
            d3.keys(viewNodes).forEach(function(id) {
                var currentNode = tree.getNodeWithId(id)
                var currentViewNode = viewNodes[id]
                var position = nodesPosition[id]

                if (position == null) { 
                    currentViewNode.hideLine()
                    currentViewNode.hideBackground(null, true, 500)
                    currentViewNode.hideLabel(null, true, 500)
                } else {
                    currentViewNode.moveToPosition(position.x, position.y, null, true, 1000)
                    if (currentViewNode.originalSize < 25) {
                        currentViewNode.resize(currentViewNode.size * 2, null, true, 1500)
                    }

                    var currentNodeParent = currentNode.getParentNode()
                    if (currentNodeParent != null) {
                        var parentPosition = nodesPosition[currentNodeParent.id]
                        if (parentPosition != null) {
                            currentViewNode.moveLine(parentPosition.x, parentPosition.y, position.x, position.y, null, true, 1000)
                        }
                    }
                }
            })
            viewNode.hideLine()

            this.centerNode.center = false
            this.centerNode = viewNode
            this.centerNode.center = true

        }
    }
}

RadialTreeView._id = 1
RadialTreeView.instances = {}