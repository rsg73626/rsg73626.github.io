
/* - - - - - - - - - - Types - - - - - - - - - - */

/* - - - - - Text component types - - - - - */

const _p = 0
const _i = 1
const _span = 2
const _a = 3
const _h = 4
const _hgroup = 5
const _abreviation = 6
const _abbr = 7
const _acronym = 8

/* - - - - - List component types - - - - - */

const _ul = 9
const _ol = 10

/* - - - - - Image component types - - - - - */

const _figure = 11
const _img = 12

/* - - - - - Structure component types - - - - - */

const _br = 13
const _section = 14
const _article = 15
const _nav = 16
const _aside = 17

/* - - - - - Form component types - - - - - */

const _form = 18
const _input = 19
const _checkbox = 20
const _radio = 21
const _button = 22
const _select = 23

/* - - - - - Input types - - - - - */

const _text = 'text'
const _number = 'number'
const _tel = 'tel'
const _email = 'email'
const _date = 'date'
const _submit = 'submit'
const _reset = 'reset'
const _password = 'password'

/* - - - - - - - - - - Aux functions - - - - - - - - - - */

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
        if (type == _br) {
            return br()
        } 
        if (type == _menu) {
            tag = _mn(object)
        } else if (content != null) { 
            if (type == _p) {
                tag = p(content)
            } else if (type == _a) {
                tag = a(content) 
            } else if (type == _h) {
                tag = h(content)
            } else if (type == _hgroup) {
                tag = hgroup(content)
            } else if (type == _ul) {
                tag = ul(content)
            } else if (type == _ol) {
                tag = ol(content)
            } else if (type == _figure) {
                tag = figure(content)
            } else if (type == _img) {
                tag = img(content) 
            } else if (type == _section) {
                tag = section(content)
            } else if (type == _nav) {
                tag = nav(content)
            } else if (type == _aside) {
                tag = aside(content)
            } else if (type == _form) {
                tag = form(content)
            } else if (type == _button) {
                tag = button(content)
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
        if (type == _i) {
            tag = i(content)
        } else if (type == _span) {
            tag = span(content) 
        } else if (type == _a) {
            tag = a(content)
        } else if (type == _abreviation) {
            tag = abbr(content)
        } else if (type == _abbr) {
            tag = abbr(content)
        } else if (type == _acronym) {
            tag = acronym(content)
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
            if (type == _p) {
                return p(content)
            } else if (type == _a) {
                return a(content) 
            } else if (type == _h) {
                return h(content)
            } else if (type == _hgroup) {
                return hgroup(content)
            } else if (type == _ul) {
                return ul(content)
            } else if (type == _ol) {
                return ol(content)
            } else if (type == _figure) {
                return figure(content)
            } else if (type == _img) {
                return img(content) 
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
        if (type == _br) {
            return br()
        } 
        if (content != null) { 
            if (type == _p) {
                return p(content)
            } else if (type == _a) {
                return a(content) 
            } else if (type == _h) {
                return h(content)
            } else if (type == _hgroup) {
                return hgroup(content)
            } else if (type == _ul) {
                return ul(content)
            } else if (type == _ol) {
                return ol(content)
            } else if (type == _figure) {
                return figure(content)
            } else if (type == _img) {
                return img(content) 
            } else if (type == _article) {
                return article(content)
            } else if (type == _nav) {
                return nav(content)
            } else if (type == _aside) {
                return aside(content)
            } else if (type == _form) {
                return form(content)
            } else if (type == _button) {
                return button(content)
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
        if (type == _br) {
            return br()
        } 
        if (content != null) { 
            if (type == _p) {
                tag = p(content)
            } else if (type == _a) {
                tag = a(content) 
            } else if (type == _h) {
                tag = h(content)
            } else if (type == _hgroup) {
                tag = hgroup(content)
            } else if (type == _ul) {
                tag = ul(content)
            } else if (type == _ol) {
                tag = ol(content)
            } else if (type == _figure) {
                tag = figure(content)
            } else if (type == _img) {
                tag = img(content) 
            } else if (type == _nav) {
                tag = nav(content)
            } else if (type == _aside) {
                tag = aside(content)
            } else if (type == _form) {
                tag = form(content)
            } else if (type == _button) {
                tag = button(content)
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
        if (type == _br) {
            return br()
        } 
        if (content != null) { 
            if (type == _a) {
                tag = a(content) 
            } if (type == _ul) {
                tag = ul(content)
            } else if (type == _ol) {
                tag = ol(content)
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
        if (type == _br) {
            return br()
        } 
        if (content != null) { 
            if (type == _a) {
                tag = a(content) 
            } if (type == _ul) {
                tag = ul(content)
            } else if (type == _ol) {
                tag = ol(content)
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
        if (type == _br) {
            return br()
        } 
        if (content != null) { 
            if (type == _p) {
                tag = p(content)
            } else if (type == _a) {
                tag = a(content) 
            } else if (type == _h) {
                tag = h(content)
            } else if (type == _hgroup) {
                tag = hgroup(content)
            } else if (type == _ul) {
                tag = ul(content)
            } else if (type == _ol) {
                tag = ol(content)
            } else if (type == _figure) {
                tag = figure(content)
            } else if (type == _img) {
                tag = img(content) 
            } else if (type == _input) {
                tag = input(content)
            } else if (type == _checkbox) {
                tag = checkbox(content)
            } else if (type == _radio) {
                tag = radio(content)
            } else if (type == _button) {
                tag = button(content)
            } else if (type == _select) {
                tag = select(content)
            }
        }
    }
    addIdAndClassToTag(tag, object)
    return tag
}

/* - - - - - - - - - - HTML builder functions - - - - - - - - - - */

/* Text component types */

function p(content) {
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

function i(content) {
    if (isString(content)) {
        var i = $('<i>')
        i.text(content)
        addIdAndClassToTag(i, content)
        return i
    } else {
        return null
    }
} 

function span(content) { 
    if (isString(content)) {
        var span = $('<span>')
        span.text(content)
        addIdAndClassToTag(span, content)
        return span
    } else { 
        return null
    }
} 

function a(content) {
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

function h(content) {
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

function hgroup(content) {
    if (!(isEmpty(content))) {
        var hgroup = $('<hgroup>')
        content.forEach(function(object, index, array){
            hgroup.append(h(object))
        })
        return hgroup
    } else {
        return null
    }
} 

function abreviation(content) { 
    return abbr(content)
} 

function abbr(content) { 
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

function acronym(content) {
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

function ul(content) {
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

function ol(content) { 
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
                if (type != null && (type == _ul || type == _ol)) {
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

function figure(content) { 
    const image = content.img
    const caption = content.caption
    if (image != null && isObject(image)) {
        var figure = $('<figure>')
        const imgObject = img(image)
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

function img(content) {
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

function br() {
    return $('<br>')
} 

function section(content) {
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

function article(content) { 
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

function nav(content) { 
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

function aside(content) { 
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

function form(content) {
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

function input(content) {
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

function checkbox(content) { 
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

function radio(content) { 
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

function button(content) { 
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

function select(content) {
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

