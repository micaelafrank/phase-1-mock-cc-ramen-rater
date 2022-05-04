// write your code here
document.addEventListener('DOMContentLoaded', addRamenImages)

function addRamenImages() {
return fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(json => renderImage(json))


function renderImage(ramens){
    const parentDiv = document.querySelector('#ramen-menu')
    let mainImage = document.querySelector('#ramen-detail img')
    mainImage.id = "itsRamenTime"
    let centerImage = document.querySelector('#itsRamenTime')
    let restaurant = document.querySelector('.restaurant')
    let nameOfRamen = document.querySelector('.name')

    ramens.forEach(ramen => {
        const img = document.createElement('img')
        img.src = ramen.image
        img.className = 'navbar-ramen-image'
        img.id = ramen.id.toString()
        parentDiv.appendChild(img)
        
        img.addEventListener('click', () => {
        console.log(`yummy ${img.id}`)
        centerImage = img.image
        nameOfRamen = img.name
        restaurant = img.restaurant
    })
}) 
}
}