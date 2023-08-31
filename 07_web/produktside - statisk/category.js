fetch("https://kea-alt-del.dk/t7/api/categories")
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

    const parent = document.querySelector(".categories-grid");
    parent.appendChild(copy);
}