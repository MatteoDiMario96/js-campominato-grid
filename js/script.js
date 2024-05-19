const sectionGridAppend = document.querySelector("section#grid");
const mainAppend = document.querySelector("main");


const buttonAppend = document.querySelector("button#new-match")
const selectHardAppend = document.querySelector("#select-hard");
const selectVeryHardAppend = document.querySelector("#select-very-hard");
const selectCrazyAppend = document.querySelector("#select-crazy");

selectHardAppend.addEventListener("click",function(){
    document.sectionGridAppend.innerHTML = `${getSquare(100)}`;
})
selectVeryHardAppend.addEventListener("click",function(){
    getSquare(81);
})
selectCrazyAppend.addEventListener("click",function(){
    getSquare(49);
})

getSquare(100);
// document.querySelector("section#grid").innerHTML = getSquare(81);
// console.log(getSquare(49))

function getSquare (number){
    for(let i = 0; i < number; i++){
        const articleEl = document.createElement("article");
        articleEl.classList.add("square");
        articleEl.append([i + 1])
        sectionGridAppend.appendChild(articleEl)
    
    
        articleEl.addEventListener("click", function(){
            articleEl.classList.add("active");
            console.log(`This is the cell number: ${[i + 1]}`)
        })
        //Provare a mettere inner.HTML
        // document.articleEl.innerHTML = articleEl Da vedere
    //     
    buttonAppend.addEventListener("click",function(){
        articleEl.classList.remove("active");
        console.clear();
    // document.querySelector("section#grid").innerHTML  getSquare(100);
    })



    }
}



