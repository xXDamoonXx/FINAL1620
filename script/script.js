let button = document.querySelector(".submit");
function removetext() {
    document.getElementById("effect").value = " ";
}
button.addEventListener("click", removetext)


let thumbnailShow = document.querySelector(".thumb-image")
let mainImage = document.querySelector(".displayed-img")
function onHoverShow() {
    footer.style.visibility = "visible"

}
thumbnailShow.addEventListener("mouseover", onHoverShow)


let footer = document.querySelector("#form-elements")
window.onload = function defaultLoading() {
    let image1 = document.querySelector('#img1');
    image1.src = "images/pic1.jpg";
    image1.alt = "Picture 1";
    image1.width = 13
    image1.height = 90

    let image2 = document.querySelector('#img2');
    image2.src = "images/pic2.jpg";
    image2.alt = "Picture 2";
    image2.width = 13
    image2.height = 90

    let image3 = document.querySelector('#img3');
    image3.src = "images/pic3.jpg";
    image3.alt = "Picture 3";
    image3.width = 13
    image3.height = 90

    let image4 = document.querySelector('#img4');
    image4.src = "images/pic4.jpg";
    image4.alt = "Picture 4";
    image4.width = 13
    image4.height = 90

    let image5 = document.querySelector('#img5');
    image5.src = "images/pic5.jpg";
    image5.alt = "Picture 5";
    image5.width = 13
    image5.height = 90

    footer.style.visibility = "hidden"
}



// let thumbnailHide = document.querySelector("#thumb-bar")
// function onHoverHide() {
//     footer.style.visibility = "hidden"

// }
// thumbnailHide.addEventListener("mouseout", onHoverHide)
