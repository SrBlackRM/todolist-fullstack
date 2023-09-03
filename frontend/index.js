const root = document.getElementById('root')

const url = 'http://localhost:3000/json'

const fetchUrl = async function(){
    const resp = await fetch(url)
    const respStr = await resp.json()

    const taskContainer = handleData(respStr)
    root.appendChild(taskContainer)
}

function handleData(objList){
    const divContainer = document.createElement('ul')

    for(obj of objList){
        const objectLi = document.createElement('li')
        
        const title = document.createElement('h2')
        const done = document.createElement('span')
        const descpt = document.createElement('p')

        title.innerText = obj.title
        done.innerText = obj.done
        descpt.innerText = obj.description

        objectLi.append(title, done, descpt)

        divContainer.appendChild(objectLi)
    }
    return divContainer
}

window.addEventListener('load', fetchUrl())