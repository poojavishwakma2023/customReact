
const userName = 'hey this is pooja '
const reactElement = {
    //take three keys
    // type-which tag 
    type: 'a',
    // props-attribute
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    // html-text
    children: `click to visit google wwwab,${userName}`
    // Note-{userName}-varible can't take like {if(true)userName}-bcoz it is initialized inside object ,like reactElement in react
    //so - need to take evaluated value -no loop or itrations
    // this is ,how a variable append in dom 


}

// function customRender(reactElement, container) {
//     //1.need to create domElement
//     const domElement = document.createElement(reactElement.type)
//     // 2.assign text-innnerHTLM

//     domElement.innerHTML = reactElement.children
//     //3.setAttribute

//     domElement.setAttribute("href", reactElement.props.href)
//     domElement.setAttribute("target", reactElement.props.target)

//     // 4.need to append this domElement in container -root
//     container.appendChild(domElement)

// }

// but manually setting attribute is not possible

function customRender(reactElement, container) {
    //1.need to create domElement
    const domElement = document.createElement(reactElement.type)
    // 2.assign text-innnerHTLM

    domElement.innerHTML = reactElement.children
    //3.setAttribute

    for (let prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    // 4.need to append this domElement in container -root
    container.appendChild(domElement)

}

// creating root element  
const mainContainer = document.querySelector("#root")

//custom render method for render root elemet 

customRender(reactElement, mainContainer)


