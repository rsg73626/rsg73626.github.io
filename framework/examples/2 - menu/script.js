
function didStartSetup() {
    // Do anything you want here before the document finished loading and tags creation.
    console.log('didStartSetup()')
}

function getHeaderObjects() {
    return [menu]
}

function getMainObjects() { 
    // Create the tag objets here to be return inside the array bellow
    // return [{type: _h_, content: 'This is an H1.'}]
    return []
}

function getFooterObjects() {
    // Create the tag objets here to be return inside the array bellow
    return []
}

function didEndSetup() {
    // Do anything you want here after the document finished loading and tags creation.
    console.log('didEndSetup()')
}