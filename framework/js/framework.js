
/* - - - - - - - - - - Component types - - - - - - - - - - */

/* - - - - - Raw HTML - - - - - */

/* Text component types */

const _p_ = 0
const _i_ = 1
const _span_ = 2
const _a_ = 3
const _h_ = 4
const _hgroup_ = 5
const _abreviation_ = 6
const _abbr_ = 7
const _acronym_ = 8

/* List component types */

const _ul_ = 9
const _ol_ = 10

/* Image component types */

const _figure_ = 11
const _img_ = 12

/* Structure component types */

const _br_ = 13
const _section_ = 14
const _article_ = 15
const _nav_ = 16
const _aside_ = 17

/* Form component types */

const _form_ = 18
const _input_ = 19
const _checkbox_ = 20
const _radio_ = 21
const _button_ = 22
const _select_ = 23

/* Input types */

const _text = 'text'
const _number = 'number'
const _tel = 'tel'
const _email = 'email'
const _date = 'date'
const _submit = 'submit'
const _reset = 'reset'
const _password = 'password'

/* Custom components */

const menu_small = 'menu-small'
const menu_medium = 'menu-medium'
const menu_large = 'menu-large'
const menu_extra_large = 'menu-extra-large'
const menu_extra_extra_large = 'menu-extra-extra-large'
const right = 'right'
const left = 'left'


/* - - - - - Custom components - - - - - */

const _menu_ = 24

/* - - - - - - - - - - Aux - - - - - - - - - - */

/* - - - - - Global variables - - - - - */

var _body
const _STRING = 'string'
const _NUMBER = 'number'
const _OBJECT = 'object'

/* - - - - - Functions - - - - - */

/**
 * It gets the HTML DOM body object and sets to the body global variable.
 */
function setBody() {
    _body = $('body')
}
function getScreenWidth() {
    return $(window).width()
}
function isString(content) {
    return (typeof content) == _STRING
}
function isNumber(content) {
    return (typeof content) == _NUMBER
}
function isObject(content) {
    return (typeof content) == _OBJECT
}
function isArray(content) {
    return Array.isArray(content)
}
function isEmpty(array) {
    if (isArray(array)) {
        return array.length == 0
    } else { 
        return true
    }
}

function addIdAndClassToTag(tag, content) {
    if (tag != null && content != null) {
        const id = content.id
        const classes = content.class
        if (id != null && isString(id)) {
            tag.attr('id', id)
        }
        if (classes != null && isString(classes)) {
            tag.attr('class', classes)
        }
    }
}

function tagForObject(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) {
        if (type == _br_) {
            return _br()
        } 
        if (type == _menu_) {
            tag = _mn(object)
        } else if (content != null) { 
            if (type == _p_) {
                tag = _p(content)
            } else if (type == _a_) {
                tag = _a(content) 
            } else if (type == _h_) {
                tag = _h(content)
            } else if (type == _hgroup_) {
                tag = _hgroup(content)
            } else if (type == _ul_) {
                tag = _ul(content)
            } else if (type == _ol_) {
                tag = _ol(content)
            } else if (type == _figure_) {
                tag = _figure(content)
            } else if (type == _img_) {
                tag = _img(content) 
            } else if (type == _section_) {
                tag = _section(content)
            } else if (type == _nav_) {
                tag = _nav(content)
            } else if (type == _aside_) {
                tag = _aside(content)
            } else if (type == _form_) {
                tag = _form(content)
            } else if (type == _button) {
                tag = _button(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObjectInsideParagraph(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type) && 
        content != null) { 
        if (type == _i_) {
            tag = _i(content)
        } else if (type == _span_) {
            tag = _span(content) 
        } else if (type == _a_) {
            tag = _a(content)
        } else if (type == _abreviation_) {
            tag = _abbr(content)
        } else if (type == _abbr_) {
            tag = _abbr(content)
        } else if (type == _acronym_) {
            tag = _acronym(content)
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObjectInsideListItem(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) {
        if (content != null) { 
            if (type == _p_) {
                return _p(content)
            } else if (type == _a_) {
                return _a(content) 
            } else if (type == _h_) {
                return _h(content)
            } else if (type == _hgroup_) {
                return _hgroup(content)
            } else if (type == _ul_) {
                return _ul(content)
            } else if (type == _ol_) {
                return _ol(content)
            } else if (type == _figure_) {
                return _figure(content)
            } else if (type == _img_) {
                return _img(content) 
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObjectInsideSection(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) { 
        if (type == _br_) {
            return _br()
        } 
        if (content != null) { 
            if (type == _p_) {
                return _p(content)
            } else if (type == _a_) {
                return _a(content) 
            } else if (type == _h_) {
                return _h(content)
            } else if (type == _hgroup_) {
                return _hgroup(content)
            } else if (type == _ul_) {
                return _ul(content)
            } else if (type == _ol_) {
                return _ol(content)
            } else if (type == _figure_) {
                return _figure(content)
            } else if (type == _img_) {
                return _img(content) 
            } else if (type == _article_) {
                return _article(content)
            } else if (type == _nav_) {
                return _nav(content)
            } else if (type == _aside_) {
                return _aside(content)
            } else if (type == _form_) {
                return _form(content)
            } else if (type == _button) {
                return _button(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObjectInsideArticle(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) {
        if (type == _br_) {
            return _br()
        } 
        if (content != null) { 
            if (type == _p_) {
                tag = _p(content)
            } else if (type == _a_) {
                tag = _a(content) 
            } else if (type == _h_) {
                tag = _h(content)
            } else if (type == _hgroup_) {
                tag = _hgroup(content)
            } else if (type == _ul_) {
                tag = _ul(content)
            } else if (type == _ol_) {
                tag = _ol(content)
            } else if (type == _figure_) {
                tag = _figure(content)
            } else if (type == _img_) {
                tag = _img(content) 
            } else if (type == _nav_) {
                tag = _nav(content)
            } else if (type == _aside__) {
                tag = _aside(content)
            } else if (type == _form_) {
                tag = _form(content)
            } else if (type == _button) {
                tag = _button(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObejctInsideNav(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) {
        if (type == _br_) {
            return _br()
        } 
        if (content != null) { 
            if (type == _a_) {
                tag = _a(content) 
            } if (type == _ul_) {
                tag = _ul(content)
            } else if (type == _ol_) {
                tag = _ol(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObjectInsideAside(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) {
        if (type == _br_) {
            return _br()
        } 
        if (content != null) { 
            if (type == _a_) {
                tag = _a(content) 
            } if (type == _ul_) {
                tag = _ul(content)
            } else if (type == _ol_) {
                tag = _ol(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function tagForObjectInsideForm(object) {
    const type = object.type
    const content = object.content
    var tag = null
    if (type != null && isNumber(type)) {
        if (type == _br_) {
            return _br()
        } 
        if (content != null) { 
            if (type == _p_) {
                tag = _p(content)
            } else if (type == _a_) {
                tag = _a(content) 
            } else if (type == _h_) {
                tag = _h(content)
            } else if (type == _hgroup_) {
                tag = _hgroup(content)
            } else if (type == _ul_) {
                tag = _ul(content)
            } else if (type == _ol_) {
                tag = _ol(content)
            } else if (type == _figure_) {
                tag = _figure(content)
            } else if (type == _img_) {
                tag = _img(content) 
            } else if (type == _input_) {
                tag = _input(content)
            } else if (type == _checkbox_) {
                tag = _checkbox(content)
            } else if (type == _radio_) {
                tag = _radio(content)
            } else if (type == _button_) {
                tag = _button(content)
            } else if (type == _select_) {
                tag = _select(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

function print(content) {
    console.log(content)
}

/* - - - - - - - - - - Startup - - - - - - - - - - */

$(document).ready(function(){
    didStartSetup()

    setBody()

    var header = getHeaderObjects()
    var main = getMainObjects()
    var footer = getFooterObjects()

    if (!isEmpty(header)) { buildHeader(header) } else { print('Empty header') }
    if (!isEmpty(main)) { buildMain(main) } else { print('Empty main') }
    if (!isEmpty(footer)) { buildFooter(footer) } else { print('Empty footer') }

    didEndSetup()
})

$(window).resize(function() {
    var width = getScreenWidth()
    if (width <= 800) {
        $('.menu-open-close-button').removeClass('.menu-open-close-button')
    } else {
        
    }
}) 

function buildHeader(content) { 
    var header = $('<header>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array){
            header.append(tagForObject(object))
        })
    }
    _body.append(header)
}

function buildMain(content) { 
    var main = $('<main>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array){
            main.append(tagForObject(object))
        })
    }
    _body.append(main)
}

function buildFooter(content) { 
    var footer = $('<footer>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array){
            footer.append(tagForObject(object))
        })
    }
    _body.append(footer)
}

/* - - - - - - - - - - HTML builder functions - - - - - - - - - - */

/* Text component types */

function _p(content) {
    var p = $('<p>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array) {
            if (isString(object)) {
                p.append(object)
            } else { 
                p.append(tagForObjectInsideParagraph(object))
            }
        })
    } else if (isString(content)) {
        p.text(content)
    } else { 
        return null     
    }   
    addIdAndClassToTag(p, content)
    return p
} 

function _i(content) {
    if (isString(content)) {
        var i = $('<i>')
        i.text(content)
        addIdAndClassToTag(i, content)
        return i
    } else {
        return null
    }
} 

function _span(content) { 
    if (isString(content)) {
        var span = $('<span>')
        span.text(content)
        addIdAndClassToTag(span, content)
        return span
    } else { 
        return null
    }
} 

function _a(content) {
    const text = content.text
    const link = content.link
    if ((text != null && isString(text)) && 
        (link != null && isString(link))) {
        var a = $('<a>')
        a.text(text)
        a.attr('href', link)
        addIdAndClassToTag(a, content)
        return a
    } else {
        return null
    }
} 

function _h(content) {
    if (content != null, isString(content)) {
        var h = $('<h1>')
        h.text(content)
        return h
    }
    const text = content.text
    const level = content.level
    if (text != null, isString(text)) {
        var tagText = '<h1>'
        if (level != null && 
            (isNumber(level) || isString(level)) && 
            (Number(level) > 0 && Number(level) < 7)) {
            tagText = '<h' + level + '>'
        } 
        var h = $(tagText)
        h.text(text)
        return h
    } else {
        return null
    }
} 

function _hgroup(content) {
    if (!(isEmpty(content))) {
        var hgroup = $('<hgroup>')
        content.forEach(function(object, index, array){
            hgroup.append(_h(object))
        })
        return hgroup
    } else {
        return null
    }
} 

function _abreviation(content) { 
    return _abbr(content)
} 

function _abbr(content) { 
    const text = content.text
    const title = content.title
    if ((text != null && isString(text)) &&
        (title != null && isString(title))) {
        var abbr = $('<abbr>')
        abbr.text(text)
        abbr.attr('title', title)
        return abbr
    } else {
        return null
    }
} 

function _acronym(content) {
    const text = content.text
    const title = content.title
    if ((text != null && isString(text)) && 
        (title != null && isString(title))) {
        var acronym = $('<acronym>')
        acronym.text(text)
        acronym.attr('title', title)
        return acronym
    } else {
        return null
    }
} 

/* List component types */

function _ul(content) {
    if (!isEmpty(content)) {
        var ul = $('<ul>')
        content.forEach(function(object, index, array){
            ul.append(li(object))
        })
        return ul
    } else { 
        return null
    }
} 

function _ol(content) { 
    if (!isEmpty(content)) {
        var ul = $('<ol>')
        content.forEach(function(object, index, array){
            ul.append(li(object))
        })
        return ul
    } else { 
        return null
    }
} 

function li(content) { 
    var li = $('<li>')

    if (isString(content)) {
        li.text(content)
        return li
    } 

    const text = content.text
    const subItemContent = content.subcontent
    if (text != null) {
        if (isString(text)) {
            li.text(text)
            if (subItemContent != null) {
                const type = subItemContent.type
                if (type != null && (type == _ul_ || type == _ol_)) {
                    const tagForObject = tagForObjectInsideListItem(subItemContent)
                    if (tagForObject != null) {
                        li.append(tagForObject)
                    } 
                }
            } 
            return li
        } 
        return null
    }

    const tagForObject = tagForObjectInsideListItem(content)
    if (tagForObject != null) {
        li.append(tagForObject)
        return li
    } else {
        return null
    }
} 

/* Image component types */

function _figure(content) { 
    const image = content.img
    const caption = content.caption
    if (image != null && isObject(image)) {
        var figure = $('<figure>')
        const imgObject = _img(image)
        if (imgObject != null) {
            figure.append(imgObject)
            figure.append(figcaption(caption))
            return figure
        } else {
            return null
        }
    } else {
        return null
    }
} 

function _img(content) {
    const src = content.src
    const alt = content.alt
    if ((src != null && isString(src)) && 
        (alt != null && isString(alt))) {
        var img = $('<img/>')
        img.attr('src', src)
        img.attr('alt', alt)
        return img
    } else {
        return null
    }
} 

function figcaption(content) { 
    if (content != null && isString(content)) {
        var figcaption = $('<figcaption>')
        figcaption.text(content)
        return figcaption
    } else {
        return null
    }
} 

/* Structure component types */

function _br() {
    return $('<br>')
} 

function _section(content) {
    if (content != null) {
        var section = $('<section>')
        if (!isEmpty(content)) {
            content.forEach(function(object, index, array) {
                section.append(tagForObjectInsideSection(object))
            })
            return section
        }
        const tagObject = tagForObjectInsideSection(content)
        if (tagObject != null) {
            section.append(tagObject)
            return section
        }
        return null
    } else {
        return null
    }
} 

function _article(content) { 
    if (content != null) {
        var article = $('<article>')
        if (!isEmpty(content)) {
            content.forEach(function(object, index, array) {
                article.append(tagForObjectInsideArticle(object))
            })
            return article
        }
        const tagObject = tagForObjectInsideArticle(content)
        if (tagObject != null) {
            article.append(tagObject)
            return article
        }
        return null
    } else {
        return null
    }
} 

function _nav(content) { 
    if (!isEmpty(content)) {
        var navTag = $('<nav>')
        content.forEach(function(object, index, array) {
            navTag.append(tagForObejctInsideNav(object))
        })
        return navTag
    } else {
        return null
    }
} 

function _aside(content) { 
    if (!isEmpty(content)) {
        var asideTag = $('<aside>')
        content.forEach(function(object, index, array) {
            asideTag.append(tagForObjectInsideAside(object))
        })
        return asideTag
    } else {
        return null
    }
} 

/* Form component types */

function _form(content) {
   const action = content.action
   const method = content.method
   const inputs = content.inputs
   if ((action != null && isString(action)) && 
       (method != null && isString(method)) && 
       !isEmpty(inputs)) {
        var form = $('<form>')
        form.attr('action', action)
        form.attr('method', method)
        inputs.forEach(function(object, index, array) {
            const tagObject = tagForObjectInsideForm(object)
            if (!isEmpty(tagObject)) {
                tagObject.forEach(function(object, index, array){
                    form.append(object)
                })
            } else {
                form.append(tagObject)
            }
        })
        return form
   } else {
       return null
   }
} 

function _input(content) {
    const type = content.type
    const name = content.name
    const label = content.label
    const placeholder = content.placeholder
    const required = content.required
    if (type != null && isString(type)) {
        if (type == _submit || type == _reset) {
            var input = $('<input>')
            input.attr('type', type)
            const text = content.text
            if (text != null && isString(text)) {
                input.attr('value', text)
            }
            return input
        } else if (name != null && isString(name)) {
            var labelTag = $('<label>')
            var input = $('<input>')
            input.attr('name', name)
            input.attr('type', type)
            if (label != null && isString(label)) {
                labelTag.text(label)
            }
            if (placeholder != null && isString(placeholder)) {
                input.attr('placeholder', placeholder)
            }
            if (required != null) {
                input.prop('required', required == true)
            }
            labelTag.append(input)
            return labelTag
        } else {
            return null
        }
    } else {
        return null
    }
} 

function _checkbox(content) { 
    if (!isEmpty(content)) {
        var checkboxTags = []
        content.forEach(function(object, index, array){
            const name = object.name
            const text = object.text
            const checked = (object.checked == true)
            const id = object.id
            var idText = name
            if (id != null && isString(id)) {
                idText = id
            } 
            if ((name != null && isString(name)) && 
                (text != null && isString(text))) {

                var checkbox = $('<input>')
                checkbox.attr('type', 'checkbox')
                checkbox.attr('name', name)
                checkbox.attr('id', idText)
                checkbox.prop('checked', checked)
                
                var label = $('<label>')
                label.append(checkbox)
                label.append(text)
                label.attr('for', idText)

                checkboxTags.push(label)
            } 
        })
        return checkboxTags
    } else {
        return null
    }
} 

function _radio(content) { 
    const name = content.name
    const options = content.options
    if ((name != null && isString(name)) && 
        !isEmpty(options)) {
        var radioTags = []
        options.forEach(function(object, index, array){
            const text = object.text
            const id = object.id
            const value = object.value
            const checked = (object.checked == true)
            if ((text != null && isString(text)) &&
                (id != null && isString(id)) &&
                (value != null && (isNumber(value) || isString(value)))) {

                var radio = $('<input>')
                radio.attr('type', 'radio')
                radio.attr('name', name)
                radio.attr('id', id)
                radio.attr('value', value)
                radio.prop('checked', checked)
                
                var label = $('<label>')
                label.append(radio)
                label.append(text)
                label.attr('for', id)

                radioTags.push(label)
            } 
        })
        return radioTags
    } else {
        return null
    }
} 

function _button(content) { 
    const text = content.text
    const onclick = content.onclick
    if ((text != null && isString(text)) &&
        (onclick != null && isString(onclick))) {
        var button = $('<button>')
        button.text(text)
        button.attr('onclick', onclick)
        return button
    } else { 
        return null
    }
} 

function _select(content) {
   const label = content.label
   const name = content.name
   const required = content.required
   const options = content.options
    if ((name != null && isString(name)) && 
        !isEmpty(options)) {
        var selectTag = $('<select>')
        selectTag.attr('name', name)
        selectTag.attr('required', required == true)
        options.forEach(function (object, index, array) {
            const text = object.text
            const value = object.value
            const selected = object.selected
            if ((text != null && isString(text)) && 
                (value != null && (isNumber(value) || isString(value)))) {
                var option = $('<option>')
                option.text(text)
                option.attr('value', value)
                option.prop('selected', selected == true)
                selectTag.append(option)
            }
        })
        if (label != null && isString(label)) {
            var labelTag = $('<label>')
            labelTag.text(label)
            labelTag.append(selectTag)
            return labelTag
        } else {
            return selectTag
        }
    } else {
        return null
    }
}

/* Custom menu */

function mn(items) {
    if (!isEmpty(items)) {
        return {
            type: _menu_,
            content: items
        }
    }
}

function mi(text, link, icon, subitems) {
    if (isString(text)) {
        var menuItem = {
            text: text
        }
        if (isString(link)) {
            menuItem.link = link
        }
        if (isString(icon)) {
            menuItem.icon = icon
        }
        if (subitems != null) {
            if (isArray(subitems)) {
                menuItem.subitems = subitems
            } else if (isObject(subitems)) {
                menuItem.subitems = [ subitems ]
            } 
        }
        return menuItem
    }
}

var menuId = 0

function _mn(object) {
    const content = object.content
    const size = object.size
    const suboptionsIcon = object.suboptions_icon == true
    if (!isEmpty(content)) {
        var nav = $('<nav>') 
        nav.attr('aria-label', 'Main menu') 
        nav.addClass('menu-nav')

        var openCloseMenuButton = $('<button>')
        openCloseMenuButton.addClass('fa fa-bars fa-lg')
        openCloseMenuButton.addClass('menu-open-close-button')
        openCloseMenuButton.prop('aria-haspopup', 'true') 
        openCloseMenuButton.attr('aria-controls', 'menu-' + menuId) 
        openCloseMenuButton.attr('onclick', 'menuOpenCloseButtonOnClick(this)')
        nav.append(openCloseMenuButton)

        if (isString(size) && 
            (size == menu_small || 
             size == menu_medium ||
             size == menu_large ||
             size == menu_extra_large ||
             size == menu_extra_extra_large)) {
            nav.addClass(size)
        } else { nav.addClass(menu_small) }

        var ul = $('<ul>')
        ul.attr('id', 'menu-'+menuId)
        ul.attr('role', 'menubar')
        ul.addClass('menu-ul')
        content.forEach(function(obj, index, array) {
            obj.icon_side = object.icon_side
            ul.append(_mi(obj, suboptionsIcon))
        })
        nav.append(ul)
        return nav
    } else {
        return null
    }
}

function _mi(content, suboptionsIcon) {
    if (isObject(content)) {
        const text = content.text
        const link = content.link
        const icon = content.icon
        const side = content.icon_side
        const subitems = content.subitems
        if (isString(text) && isString(link)) {

            var li = $('<li>')
            li.attr('role', 'none')
            li.addClass('menu-li')
            li.attr('onkeydown', 'menuItemOnkeydown(this, event)')

            var iconSide = null
            var menuAIconClass = null

            var a = $('<a>')
            a.attr('role', 'menuitem')
            a.addClass('menu-a')
            a.attr('href', link)
            a.attr('tabindex', '0')
            a.text(text)

            if (isString(icon)) {
                if (isString(side) && (side == right || side == left)) {
                    iconSide = side
                } else { iconSide = left }

                var i = $('<i>')
                i.addClass('menu-a-i')
                i.addClass(icon)
                
                if (iconSide == right) {
                    a.append(i)
                } else {
                    a.prepend(i)
                }
                menuAIconClass = 'menu-a-icon-'+iconSide
                a.addClass(menuAIconClass)
            }

            li.append(a)

            if (!isEmpty(subitems)) {
                a.attr('aria-haspopup', 'true')
                a.attr('aria-expanded', 'false')
                li.removeClass()
                li.addClass('menu-item-with-suboptions')

                li.attr('onmouseover', 'onMouseHover(this)')
                li.attr('onmouseleave', 'onMouseLeave(this)')
                a.attr('onfocus', 'onFocus(this)')
                
                if (suboptionsIcon) {
                    var shrinkExpandIcon = $('<i>')
                    shrinkExpandIcon.addClass('fa fa-chevron-down fa-lg')
                    shrinkExpandIcon.addClass('menu-a-i-suboptions')
                    if (iconSide == left) {
                        a.append(shrinkExpandIcon)
                    } else {
                        a.prepend(shrinkExpandIcon)
                    }
                    if (isString(menuAIconClass)) {
                        a.removeClass(menuAIconClass)
                        a.addClass('menu-a-icon-both')
                    } else {
                        a.removeClass(menuAIconClass)
                        a.addClass('menu-a-icon-right')
                    }
                }

                var ul = $('<ul>')
                // ul.attr('role', 'menu')
                ul.attr('aria-label', text)
                ul.addClass('menu-submenu-ul')
                subitems.forEach(function(object, index, array) {
                    ul.append(_mi(object))
                })
                li.append(ul)
            }
            return li
        } else {
            return null
        }
    } else {
        return null
    }
}

function menuOpenCloseButtonOnClick(button) {
    const menuId = $(button).attr('aria-controls')
    const menu = $(button).siblings('.menu-ul')[0]
    if ($(menu).css('display') == 'grid') {
        $(menu).css('display', 'none')
        $(button).removeAttr('aria-expanded')
    } else {
        $(menu).css('display', 'grid')
        $(button).attr('aria-expanded', 'true')
    }
}

var expanded = false

function setExpandIcon(icon) {
    $(icon).removeClass('fa fa-chevron-up fa-lg')
    $(icon).addClass('fa fa-chevron-down fa-lg')
}

function setShrinkIcon(icon) {
    $(icon).removeClass('fa fa-chevron-down fa-lg')
    $(icon).addClass('fa fa-chevron-up fa-lg')
}

function onMouseHover(menuItem) {
    expanded = true
    $(menuItem).css('background-color', 'lightgray')
    const link = $(menuItem).children('a')
    $(link).attr('aria-expanded', 'true')
    $(link).css('background-color', 'lightgray')
    $(link).css('color', 'gray')
    const shrinkExpandIcon = $(link).children('.menu-a-i-suboptions')
    setShrinkIcon(shrinkExpandIcon)
    const subMenu = $(menuItem).children('ul')
    $(subMenu).css('display', 'block')
}

function onMouseLeave(menuItem) {
    expanded = false
    $(menuItem).css('background-color', 'gray')
    $(menuItem).attr('onkeydown', 'menuItemOnkeydown(this, event)')
    const link = $(menuItem).children('a')
    $(link).attr('aria-expanded', 'false')
    $(link).css('background-color', 'gray')
    $(link).css('color', 'lightgray')
    const shrinkExpandIcon = $(link).children('.menu-a-i-suboptions')
    setExpandIcon(shrinkExpandIcon)
    const subMenu = $(menuItem).children('ul')
    $(subMenu).css('display', 'none')
} 

function onFocus(link) {
    const menuItem = $(link).parent()
    if ($(menuItem).hasClass('menu-item-with-suboptions')) {
        $(menuItem).attr('onkeydown', 'menuItemOnkeydown(this, event)')
    }
}

var commingFromSubMenu = false

const left_arrow = 37
const up_arrow = 38
const right_arrow = 39
const down_arrow = 40
const tab = 9
const esc = 27
const enter = 13

function menuItemOnkeydown(menuItem, event) {

    const keycode = event.keyCode
    // const shift = event.shiftKey
    
    if (keycode == left_arrow || keycode == up_arrow || keycode == right_arrow || keycode == down_arrow || keycode == tab || keycode == esc || keycode == enter) {
        
        const link = $(menuItem).children('.menu-a')[0]
        const parent = $(menuItem).parent()

        if ($(parent).hasClass('menu-submenu-ul')) {
            
            const menuItemWithSuboptions = $(parent).parent()
            const allMenuItems = $(parent).children('.menu-li')
            const amountOfMenuItems = $(allMenuItems).length
            const indexOfMenuItem = $(allMenuItems).index(menuItem)
            
            if (keycode == down_arrow) {
                if (indexOfMenuItem < amountOfMenuItems-1) {
                    const nextMenuItemLink = $(allMenuItems[indexOfMenuItem+1]).children('.menu-a')[0]
                    $(nextMenuItemLink).focus()
                } else {
                    commingFromSubMenu = true
                    $(menuItemWithSuboptions).attr('onkeydown', 'menuItemOnkeydown(this, event)')
                    $(menuItemWithSuboptions).children('.menu-a')[0].focus()
                }
                return
            }

            if (keycode == up_arrow) {
                if (indexOfMenuItem > 0) {
                    const nextMenuItemLink = $(allMenuItems[indexOfMenuItem-1]).children('.menu-a')[0]
                    $(nextMenuItemLink).focus()
                } else {
                    commingFromSubMenu = true
                    $(menuItemWithSuboptions).attr('onkeydown', 'menuItemOnkeydown(this, event)')
                    $(menuItemWithSuboptions).children('.menu-a')[0].focus()
                }
                return
            }

            if (keycode == right_arrow || keycode == left_arrow) {
                const mainMenu = $(menuItemWithSuboptions).parent()
                const mainMenuItems = $(mainMenu).children('li')
                const amountOfMainMenuItems = $(mainMenuItems).length
                const indexOfMenuItemWithSuboptions = $(mainMenuItems).index(menuItemWithSuboptions)
                var nextMainMenuItem
                if (keycode == right_arrow) {
                    if (indexOfMenuItemWithSuboptions < amountOfMainMenuItems-1) {
                        nextMainMenuItem = mainMenuItems[indexOfMenuItemWithSuboptions+1]
                    } else {
                        nextMainMenuItem = mainMenuItems[0]
                    }
                } else {
                    if (indexOfMenuItemWithSuboptions > 0) {
                        nextMainMenuItem = mainMenuItems[indexOfMenuItemWithSuboptions-1]
                    } else {
                        nextMainMenuItem = mainMenuItems[amountOfMainMenuItems-1]
                    }
                }
                commingFromSubMenu = true
                $(menuItemWithSuboptions).attr('onkeydown', 'menuItemOnkeydown(this, event)')
                $(nextMainMenuItem).children('.menu-a')[0].focus()
                return
            }

            if (keycode == tab && indexOfMenuItem == amountOfMenuItems-1) {
                $(menuItemWithSuboptions).attr('onkeydown', 'menuItemOnkeydown(this, event)')
                return
            }

            if (keycode == esc) {
                expanded = false
                $(parent).css('display', 'none')
                const link = $(menuItemWithSuboptions).children('.menu-a')[0]
                $(link).attr('aria-expanded', 'false')
                setExpandIcon($(link).children('.menu-a-i-suboptions')[0])
                $(link).focus()
                return
            }

        }

        if ($(menuItem).hasClass('menu-item-with-suboptions')) {

            const shrinkExpandIcon = $(link).children('.menu-a-i-suboptions')
            const submenu = $(menuItem).children('.menu-submenu-ul')[0]
            const submenuFirstItem = $(submenu).children('.menu-li')[0]
            const submenuFirstLink = $(submenuFirstItem).children('.menu-a')[0]

            if ((keycode == up_arrow || keycode == esc) && expanded) {
                if (!commingFromSubMenu) {
                    expanded = false
                    $(submenu).css('display', 'none')
                    $(link).attr('aria-expanded', 'false')
                    setExpandIcon(shrinkExpandIcon)
                } else {
                    commingFromSubMenu = false
                }
                return
            }

            if ((keycode == down_arrow || keycode == enter) && !expanded) {
                expanded = true
                $(submenu).css('display', 'block')
                $(link).attr('aria-expanded', 'true')
                setShrinkIcon(shrinkExpandIcon)
                return
            }

            if (keycode == down_arrow && expanded) {
                if (!commingFromSubMenu) {
                    $(menuItem).removeAttr('onkeydown')
                    $(submenuFirstLink).focus()
                } else {
                    commingFromSubMenu = false
                }
                return
            }

        }

        const menuItems = $(parent).children('li')
        const amountOfMenuItems = $(menuItems).length
        const indexOfMenuitem = $(menuItems).index(menuItem)
        var next
        if (keycode == right_arrow) {
            if (indexOfMenuitem < amountOfMenuItems-1) {
                next = menuItems[indexOfMenuitem+1]
            } else {
                next = menuItems[0]
            }
        } else if (keycode == left_arrow) {
            if (indexOfMenuitem > 0) {
                next = menuItems[indexOfMenuitem-1]
            } else {
                next = menuItems[amountOfMenuItems-1]
            }
        } 

        if (isObject(next)) {
            if (!commingFromSubMenu) {
                $(next).children('.menu-a')[0].focus()
            } else {
                commingFromSubMenu = false
            }
        }

    }
}

/* - - - - - - - - - -  - - - - - - - - - - */
/* - - - - -  - - - - - */
/**
 * [someFunction description]
 * @param  {[type]} arg1 [description]
 * @param  {[type]} arg2 [description]
 * @return {[type]}      [description]
 */