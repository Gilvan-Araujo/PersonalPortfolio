function rotateImageOnRight(element, deg) {
    let img = element.parentElement.parentElement.children[1]
    img.style.transform = `rotate(${deg}deg)`;
}

function rotateImageOnLeft(element, deg) {
    let img = element.parentElement.parentElement.children[0]
    img.style.transform = `rotate(${deg}deg)`;
}

function changeImages(){
    var images = document.getElementsByTagName('img')
    var url = document.getElementById('url-input').value

    for(var i = 0; i < images.length; i++){
        images[i].src = `${url}`
    }
}