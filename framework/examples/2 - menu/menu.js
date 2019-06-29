const aboutitems = [ mi('Who are we?', '#', 'fa fa-smile-o'), 
                     mi('Mission', '#', 'fa fa-smile-o'), 
                     mi('Values', '#', 'fa fa-smile-o') ]

const menuitems = [ mi('Home', '#', 'fa fa-home fa-lg'), 
                    mi('About', '#', 'fa fa-info fa-lg', aboutitems),
                    mi('Register', '#', 'fa fa-handshake-o fa-lg'),
                    mi('Login', '#', 'fa fa-sign-in fa-lg') ]

// const menuitems = [ mi('Home', '#'), 
//                     mi('About', '#', null, aboutitems),
//                     mi('Register', '#'),
//                     mi('Login', '#') ]

const menu = mn(menuitems) 

menu.size = menu_extra_large
menu.icon_side = left
menu.suboptions_icon = true