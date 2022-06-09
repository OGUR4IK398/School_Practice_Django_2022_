"use strict";

const allImages = document.querySelectorAll("img");
console.log(allImages);
// console.log("123");
for (let i = 0;i < allImages.length;i++){
    allImages[i].style = "display: block; margin-bottom: 20px";
    console.log("done");
}

