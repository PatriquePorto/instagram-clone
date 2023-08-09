let image = document.querySelectorAll('#images img')

let index = 0
max = image.length

function slider(){

    image[index].classList.remove('selected')

    index++
    
    if(index >= max)
    index = 0

    image[index].classList.add('selected')


}

setInterval(slider, 4000) 