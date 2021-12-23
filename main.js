let cartBox = document.querySelector(".cart-box");
let cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click", () => {
    cartBox.classList.toggle("active");
});



let profileBox = document.querySelector(".profile-box");
let profileIcon = document.querySelector(".profile-icon");

profileIcon.addEventListener("click", () => {
     profileBox.classList.toggle("active1");
});



let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let numContanier = document.querySelector(".input");


increaseBtn.addEventListener("click", () => {
    numContanier.textContent++;
    if(numContanier.textContent >= 1) {
         decreaseBtn.classList.add("appear");
    }
});

decreaseBtn.addEventListener("click", () => {
    numContanier.textContent--;
    if(numContanier.textContent == 0) {
        decreaseBtn.classList.remove("appear");
    }
});



let imgs = document.querySelectorAll("img-container img");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let imgArea = document.querySelector(".img-area");


img1.addEventListener("click", () => {
    imgArea.src = "images/image-product-1.jpg"
})
img2.addEventListener("click", () => {
    imgArea.src = "images/image-product-2.jpg"
})
img3.addEventListener("click", () => {
    imgArea.src = "images/image-product-3.jpg"
})
img4.addEventListener("click", () => {
    imgArea.src = "images/image-product-4.jpg"
})





