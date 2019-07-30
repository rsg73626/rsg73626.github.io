
function getHeaderObjects() {

    const home = mi('Inicio', '/docs/framework-documentacao/index.html')

    const about = mi('Sobre', '/docs/framework-documentacao/about/about.html')

    const accessibility = mi('Acessibilidade', '/docs/framework-documentacao/accessibility/accessibility.html')

    const instalation = mi('Instalação', '#')
    const functioning = mi('Funcionamento', '#')
    const tags = mi('Tags', '#')
    const getstarted = mi('Como usar?', /*'/docs/framework-documentacao/getstarted/getstarted.html'*/ null, [instalation, functioning, tags])

    const mainMenu = mn([home, about, accessibility, getstarted])
    mainMenu.size = menu_large
    mainMenu.suboptions_icon = true

    return [mainMenu]

}

function getMainObjects() {

    return [h(title)]

}