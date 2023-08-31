const api = "https://kea-alt-del.dk/t7/api/products/";


fetch(api)
    .then((res) => res.json())
    .then(showItems)

function showItems(items) {
    //loop
    items.forEach(showItem);
}    


function showItem(item) {
    console.log(item);

    
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".productlist-card-title").textContent = item.productdisplayname;
    
    copy.querySelector(".productlist-card-type").textContent = item.articletype;
    copy.querySelector(".productlist-card-brand").textContent = item.brandname;
    
    copy.querySelector(".productlist-card-price").textContent = "Price: " + item.price;
    copy.querySelector(".productlist-card-discount-price").textContent = "Price: " + item.price;
    copy.querySelector(".productlist-card-category").textContent = item.category;
    

    //Price
    if(item.discount != null){
        copy.querySelector(".productlist-card-price").classList.add("displayLineThrough");
        let discount = item.discount;
        let price = item.price;
        price = price * ( discount / 100 );
        copy.querySelector(".productlist-card-discount-price").textContent = "Price: " + price;
        }
        else {
            copy.querySelector(".productlist-card-price").classList.add("displayNone");
    }
    if (item.soldout == 1) {
        copy.querySelector(".sold-out-text").classList.add("display");
        copy.querySelector(".productlist-card-image").classList.add("dim");
    }
        
    
    
    

     
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${item.id}.webp`;
    const parent = document.querySelector(".productlist-grid");
    parent.appendChild(copy);
    
}

