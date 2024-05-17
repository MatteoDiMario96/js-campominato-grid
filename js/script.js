const sectionGridAppend = document.querySelector("section#grid");

const buttonAppend = document.querySelector("button#new-match")

for(let i = 0; i < 100; i++){
    const articleEl = document.createElement("article");
    articleEl.classList.add("square");
    articleEl.append([i + 1])
    sectionGridAppend.appendChild(articleEl)


    articleEl.addEventListener("click", function(){
        articleEl.classList.add("active");
        console.log(`This is the cell number: ${[i + 1]}`)
    })

    buttonAppend.addEventListener("click",function(){
    articleEl.classList.remove("active");
    console.clear();
})

}



