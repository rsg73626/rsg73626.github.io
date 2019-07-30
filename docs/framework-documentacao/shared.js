
function getHeaderObjects() {

    const home = mi('Inicio', '/docs/framework-documentacao/index.html')
    const about = mi('Sobre', '/docs/framework-documentacao/about/about.html')
    const accessibility = mi('Acessibilidade', '/docs/framework-documentacao/accessibility/accessibility.html')
    const getstarted = mi('Como usar?', '/docs/framework-documentacao/getstarted/getstarted.html')
    const mainMenu = mn([home, about, accessibility, getstarted])
    mainMenu.size = menu_large

    return [mainMenu]

}

function getMainObjects() {

    return [h(title)]

}