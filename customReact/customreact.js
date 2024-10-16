
function customRender(reactElement , container){
    const docElement = document.createElement(reactElement.type)
    docElement.innerHTML = reactElement.children
    docElement.setAttribute('href' , reactElement.props.href)
    docElement.setAttribute('target' , reactElement.props.target)

    container.appendChild(docElement)
}

const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target: '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement , mainContainer)