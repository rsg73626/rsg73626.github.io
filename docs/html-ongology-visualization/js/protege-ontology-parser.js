
function getTreeForProtegeOntologyJSONFile(fileName, didCreateClassesHierarchyTreeCallback, didCreateIndividualsTreeCallback) {

    function addTreeNodeRecursively(nodeName, currentNode, treeHierarchy, tree, elementType = 'Class') {
        var treeNode = new TreeNode(new TreeElement(nodeName, elementType), currentNode.level + 1)
        currentNode.addChildNode(treeNode)
        tree.addNode(treeNode)
        treeHierarchy[nodeName].forEach(item => addTreeNodeRecursively(item, treeNode, treeHierarchy, tree, elementType))
    }

    function didParseJSONFile(classesNames, classesHierarchy, individualsNames, individualsPerClass) {
        var classesHierarchyTree = new Tree()
        var classesHierarchyTreeRootNode = new TreeNode(new TreeElement('Ontology', 'Ontology'), 0)
        classesHierarchyTree.addNode(classesHierarchyTreeRootNode)
        classesNames.forEach(function(item) {
            if (classesHierarchy[item].length > 0) {
                addTreeNodeRecursively(item, classesHierarchyTreeRootNode, classesHierarchy, classesHierarchyTree)
            }
        })
        didCreateClassesHierarchyTreeCallback(classesHierarchyTree)

        var treeHierarchyForIndividualsTrees = {}
        individualsNames.forEach(item => treeHierarchyForIndividualsTrees[item] = [])
        classesNames.forEach(function(item) {
            if (individualsPerClass[item].length > 0) {
                var individualsTree = new Tree()
                var individualsTreeRootNode = new TreeNode(new TreeElement(item, 'Class'), 0)
                individualsTree.addNode(individualsTreeRootNode)
                individualsPerClass[item].forEach(function(individual) {
                    addTreeNodeRecursively(individual, individualsTreeRootNode, treeHierarchyForIndividualsTrees, individualsTree, 'Individual')
                })
                didCreateIndividualsTreeCallback(item, individualsTree)
            }
        })
    }

    function stringURLToName(stringURL) {
        var parts = stringURL.split('#')
        if (parts.length > 1) {
            return parts[parts.length - 1]
        }
        return null
    }

    function checkIfTypesContainValue(types, value) {
        if (!Array.isArray(types) || (typeof value) != 'string') {
            return false
        }
        var index = types.findIndex(function(item) {
            return stringURLToName(item) == value
        })
        return index > -1
    }

    function didReadJSONFile(content) {
        var keys = {
            id: '@id',
            type: '@type',
            subclassof: 'http://www.w3.org/2000/01/rdf-schema#subClassOf'
        }

        var types = {
            class: 'Class',
            individual: 'NamedIndividual'
        }

        var classesObjects = content.filter(function(item) {
            return checkIfTypesContainValue(item[keys.type], types.class)
        })
        var classesNames = classesObjects.map(item => stringURLToName(item[keys.id]))
        var classesHierarchy = {}
        classesNames.forEach(item => classesHierarchy[item] = [])
        classesObjects.forEach(function(item) {
            var subClassesObjects = item[keys.subclassof]
            if (Array.isArray(subClassesObjects) && subClassesObjects.length > 0) {
                subClassesObjects.forEach(function(object) {
                    classesHierarchy[stringURLToName(object[keys.id])].push(stringURLToName(item[keys.id]))
                })
            }
        })
        
        var individualsObjects = content.filter(function(item) {
            return checkIfTypesContainValue(item[keys.type], types.individual)
        })
        var individualsNames = individualsObjects.map(item => stringURLToName(item[keys.id]))
        var individualsPerClass = {}
        classesNames.forEach(item => individualsPerClass[item] = [])
        individualsObjects.forEach(function(item) {
            item[keys.type].forEach(function(type) {
                var name = stringURLToName(type)
                if (name != types.individual) {
                    individualsPerClass[name].push(stringURLToName(item[keys.id]))
                }
            })
        })
        
        didParseJSONFile(classesNames, classesHierarchy, individualsNames, individualsPerClass)
    }

    d3.json(fileName).then(didReadJSONFile)

}