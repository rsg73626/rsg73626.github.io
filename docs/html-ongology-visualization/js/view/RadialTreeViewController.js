


class RadialTreeController {

    constructor(view, tree) {
        this.view = view
        this.tree = tree
    }

    didClickNodeWithId(id) {
        this.view.moveNode(this.tree.getNodeWithId(id))
    }

}