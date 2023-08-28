fetch("https://kea-alt-del.dk/t7/api/products/")
    .then((res) => res.json())
    .then(showItems)

function showItems(items) {
    //loop
    items.forEach(showItem);
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

function showItem(item) {
    console.log(item);

    
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".productlist-card-title").textContent = item.productdisplayname;
    
    copy.querySelector(".productlist-card-type").textContent = item.articletype;
    copy.querySelector(".productlist-card-brand").textContent = item.brandname;
    
    copy.querySelector(".productlist-card-price").textContent = "Price: " + item.price;
    copy.querySelector(".productlist-card-discount-price").textContent = "Price: " + item.price;

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

