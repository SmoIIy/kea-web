fetch("https://kea-alt-del.dk/t7/superheroes/")
    .then((res) => res.json())
    .then(showSupes)

function showSupes(supes) {
    //loop
    supes.forEach(showSuper);
}    

/*
<article>
        <img src="" alt="">
        <h2 class="name">Ceva</h2>
        <h3 class="alias">Godcille</h3>
        <p class="powers"></p>
        <p class="weakness"></p>
        <p class="active"></p>
        <p class="isevil"></p>
        <p class="height"></p>
        <p class="birthday"></p>
        
    </article>
    */

function showSuper(suPer) {
    //console.log(suPer);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("img").src = suPer.image;
    copy.querySelector(".name").textContent = suPer.realName;
    copy.querySelector(".alias").textContent = suPer.alias;
    copy.querySelector(".powers").textContent = suPer.powers;
    copy.querySelector(".weakness").textContent = suPer.weaknesses;
    copy.querySelector(".active").textContent = "Active: " + suPer.active;
    copy.querySelector(".isevil").textContent = "Evil: " + suPer.isEvil;
    copy.querySelector(".height").textContent = suPer.heigth;
    copy.querySelector(".birthday").textContent = "Day: " + suPer.birthday.day + " ";
    copy.querySelector(".birthday").textContent += "Month: " + suPer.birthday.month + " ";
    copy.querySelector(".birthday").textContent += "Year: " + suPer.birthday.year;


    const parent = document.querySelector(".grid");
    parent.appendChild(copy);
}

