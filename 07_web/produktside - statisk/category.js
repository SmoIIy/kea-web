const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const api = "https://kea-alt-del.dk/t7/api/categories/"


fetch(api)
    .then((res) => res.json())
    .then(showCategories)


function showCategories(categories){
    categories.forEach(showCategory);
}

function showCategory(category){
    console.log(category);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".category-link").textContent = category.category;
    copy.querySelector(".category-link").href = `/productlist.html?category=${category.category}`;

    const parent = document.querySelector(".categories-grid");
    parent.appendChild(copy);
}