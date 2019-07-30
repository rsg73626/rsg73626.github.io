
function getHeaderObjects() {

    const home = mi('Inicio', '/index.html')
    const about = mi('Sobre', '/about/about.html')
    const accessibility = mi('Acessibilidade', '/accessibility/accessibility.html')
    const getstarted = mi('Como usar?', '/getstarted/getstarted.html')
    const mainMenu = mn([home, about, accessibility, getstarted])

    return [mainMenu]

}

function getMainObjects() {

    return [h(title)]

}