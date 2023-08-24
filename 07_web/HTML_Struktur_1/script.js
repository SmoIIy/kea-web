const title = document.querySelector("h1");
const articleCont = document.querySelector(".articlecontainer");
const art = document.querySelector("article");
const pic = document.querySelector("article img");
const undertitel = document.querySelector("main h2")



console.log(title);
console.log(articleCont);
console.log(art);
console.log(pic);

let newElement = document.createElement("article");


title.innerHTML = "Hvad er det der foregår";
undertitel.innerHTML = "Oh my god, please";
pic.src = "https://picsum.photos/300/300";
articleCont.appendChild(newElement);

