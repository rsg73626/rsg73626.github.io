
function didStartSetup() {
    console.log('didStartSetup()')
    // alert('⚛️ DID START SETUP ⚛️')
}

const breakline = { type: _br_ }

function getHeaderObjects() {
    return []
}

function getMainObjects() {

    const navigation = {
        type: _nav_,
        id: 'navigation',
        class: 'nav-class-1 nav-class-2', 
        content: [
            {
                type: _a_,
                content: {
                    text: 'This a link from a navigaiton component (<nav>)',
                    link: '#'
                }
            }, breakline,
            {
                type: _a_,
                content: {
                    text: 'Link 2',
                    link: '#'
                }
            }, breakline, 
            {
                type: _a_,
                content: {
                    text: 'link 3',
                    link: '#'
                }
            }
        ]
    }

    const aside = {
        type: _aside_,
        content: [
            {
                type: _a_,
                content: {
                    text: 'This a link from an aside component (<aside>)',
                    link: '#'
                }
            }, breakline,
            {
                type: _a_,
                content: {
                    text: 'Link 2',
                    link: '#'
                }
            }, breakline, 
            {
                type: _a_,
                content: {
                    text: 'link 3',
                    link: '#'
                }
            }
        ]
    }
    
    const pageTitle = {
        type: _h_,
        content: 'This is the example of a page build completly with JSON objects (tag <h1>). '
    }
    const pageTitle2 = {
        type: _h_,
        content: {
            level: 2,
            text: 'This is the example of a page build completly with JSON objects (tag <h2>).'
        }
    }
    const pageTitle3 = {
        type: _h_,
        content: {
            level: 3,
            text: 'This is the example of a page build completly with JSON objects (tag <h3>).'
        }
    }
    const pageTitle4 = {
        type: _h_,
        content: {
            level: 4,
            text: 'This is the example of a page build completly with JSON objects (tag <h4>).'
        }
    }
    const pageTitle5 = {
        type: _h_,
        content: {
            level: 5,
            text: 'This is the example of a page build completly with JSON objects (tag <h5>).'
        }
    }
    const pageTitle6 = {
        type: _h_,
        content: {
            level: 6,
            text: 'This is the example of a page build completly with JSON objects (tag <h6>).'
        }
    }
    const simpleParagraph = {
        type: _p_,
        content: 'This is a simple paragraph containing only text.'
    }
    const composedParagraph = {
        type: _p_,
        content: [
            'This is another paragraph containing a ',
            {
                type: _a_,
                content: {
                    text: 'Link',
                    link: '#'
                }
            },
            ', a ',
            {
                type: _span_,
                content: 'Span'
            },
            ', an ',
            {
                type: _i_,
                content: 'Icon'
            }, 
            ', an ', 
            {
                type: _abbr_, 
                content: {
                    text: 'Abreviation',
                    title: 'This is an abbreviation.'
                }
            }, 
            ' and an ',
            {
                type: _acronym_,
                content: {
                    text: 'Anacronym',
                    title: 'This is an anacronym'
                }
            }, 
            '.'
        ]
    }
    const link = {
        type: _a_,
        content: {
            text: 'This is the example of a link.',
            link: '#'
        }
    }
    const hgroup = {
        type: _hgroup_,
        content: [
            {
                level: 1, 
                text: '<h1> inside <hgroup>'
            },
            {
                level: 2, 
                text: '<h2> inside <hgroup>'
            },
            {
                level: 3, 
                text: '<h3> inside <hgroup>'
            },
            {
                level: 4, 
                text: '<h4> inside <hgroup>'
            },
            {
                level: 5, 
                text: '<h5> inside <hgroup>'
            },
            {
                level: 6, 
                text: '<h6> inside <hgroup>'
            }
        ]
    }

    const simpleLI = 'Simple List Item'
    const paragraphLI = { type: _p_, content: 'Paragraph List Item' }
    const linkLI = { type: _a_, content: { text: 'Link List Item', link: '#' } }
    const headerLI = { type: _h_, content: { level: 4, text: 'Header List Item'} }
    const hgroupLI = { type: _hgroup_, content: [ { level: 5, text: 'Header List Item '}, { level: 5, text: 'Header List Item '} ] }
    const ulLI = { text: 'UL List Item ', subcontent: { type: _ul_, content: [ 'subitem 1', 'subitem 2', 'subitem 3' ] } }
    const olLI = { text: 'OL List Item ', subcontent: { type: _ol_, content: [ 'subitem', 'subitem', 'subitem' ] } }
    const figureLI = { type: _figure_, content: { img: { src: 'image.png', alt: 'alt text for img' }, caption: 'Figure List Item' } }
    const imgLI = { type: _img_, content: { src: 'image.png', alt: 'alt text for img' } } 

    const ulDesc = { type: _h_, content: { level: 4, text: 'This is an Unordered List Example ' } }
    const ul = {
        type: _ul_,
        content: [ simpleLI, paragraphLI, linkLI, headerLI, hgroupLI, ulLI, olLI, figureLI, imgLI ]
    }

    const olDesc = { type: _h_, content: { level: 4, text: 'This is an Ordered List Example ' } }
    const ol = {
        type: _ol_,
        content: [ simpleLI, paragraphLI, linkLI, headerLI, hgroupLI, ulLI, olLI, figureLI, imgLI ]
    }

    const section = {
        type: _section_,
        content: [
            {
                type: _h_,
                content: {
                    level: 3, 
                    text: 'This is a section, it supports the tags: <br>, <p>, <a>, <h>, <hgroup>, <ul>, <ol>, <figure>, <img>, <article>, <nav>, <aside>, <form> and <button>'
                }
            }, 
            {
                type: _article_, 
                content: [
                    {
                        type: _h_,
                        content: {
                            level: 4, 
                            text: 'This is an article, it supports the tags: <br>, <p>, <a>, <h>, <hgroup>, <ul>, <ol>, <figure>, <img>, <nav>, <aside>, <form> and <button>'
                        }
                    }
                ]
            }
        ]
    }

    const inputText = {
        type: _input_,
        content: {
            type: _text,
            label: 'Input Text: ',
            name: 'input_text'
        }
    }
    const inputNumber = {
        type: _input_,
        content: {
            type: _number,
            label: 'Input Number: ',
            name: 'input_number'
        }
    }
    const inputTel = {
        type: _input_,
        content: {
            type: _tel,
            label: 'Input Tel: ',
            name: 'input_tel'
        }
    }
    const inputEmail = {
        type: _input_,
        content: {
            type: _email,
            label: 'Input E-mail: ',
            name: 'input_email'
        }
    }
    const inputDate = {
        type: _input_,
        content: {
            type: _date,
            label: 'Input Date: ',
            name: 'input_date'
        }
    }
    const inputPassword = {
        type: _input_,
        content: {
            type: _password,
            label: 'Password: ',
            name: 'password'
        }
    }
    const select = {
        type: _select_,
        content: {
            label: 'Select input ',
            name: 'select_input',
            required: false,
            options: [
                {
                    text: 'Option 1',
                    value: 1,
                    selected: false
                },
                {
                    text: 'Option 2',
                    value: 2,
                    selected: false
                },
                {
                    text: 'Option 3',
                    value: 3,
                    selected: true
                }
            ]
        }
    }

    const checkbox = {
        type: _checkbox_,
        content:  [
            {
                name: 'checkboxname1',
                text: 'Checkbox 1',
                checked: true,
                id: 'checkboxid1'
            }, 
            {
                name: 'checkboxname2',
                text: 'Checkbox 2',
                checked: false
            },
            {
                name: 'checkboxname3',
                text: 'Checkbox 3',
                checked: true
            }
        ]
    }
    const radio = {
        type: _radio_,
        content: {
            name: 'radio_name',
            options: [
                {
                    text: 'Radio Button 1',
                    id: 'radiobutton1',
                    value: 1
                },
                {
                    text: 'Radio Button 2',
                    id: 'radiobutton2',
                    value: 2,
                },
                {
                    text: 'Radio Button 3',
                    id: 'radiobutton3',
                    value: 3,
                    checked: true
                }
            ]
        }
    }

    const button = {
        type: _button_,
        content: {
            text: 'Form button',
            onclick: 'alert("Button inside form presssed");'
        }
    }
    const submit = {
        type: _input_,
        content: {
            type: _submit,
            text: 'Submit!'
        }
    }
    const reset = {
        type: _input_,
        content: {
            type: _reset,
            text: 'Reset!'
        }
    }

    const form = {
        type: _form_,
        content: {
            action: '#', 
            method: 'GET',
            inputs: [
                checkbox, breakline,
                radio, breakline,
                inputText, breakline, 
                inputNumber, breakline,
                inputTel, breakline,
                inputEmail, breakline,
                inputDate, breakline, 
                inputPassword, breakline,
                select, breakline,
                button, submit, reset
            ]
        }
    }

    

    return [
        navigation, breakline, 
        aside, breakline, 
        pageTitle, pageTitle2, pageTitle3, pageTitle4, pageTitle5, pageTitle6,
        simpleParagraph,
        composedParagraph,
        link, breakline,
        hgroup,
        ulDesc, ul,
        olDesc, ol, 
        figureLI, 
        imgLI, breakline,
        section,
        form
    ]
}

function getFooterObjects() {
    return []
}



function didEndSetup() {
    console.log('didEndSetup()')
    // alert('⚛️ DID END SETUP ⚛️')
}

function didTapButton() {
    console.log('didTapButton()')
    alert('⚛️ DID START SETUP ⚛️')
}