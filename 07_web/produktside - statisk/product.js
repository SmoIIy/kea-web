
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const api = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(api)
    .then((res) => res.json())
    .then(showItem)
 
function showItem(item) {
    console.log(item);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".product-card-title").textContent = item.productdisplayname;
    
    copy.querySelector(".product-card-type").textContent = item.articletype;
    copy.querySelector(".product-card-brand").textContent = item.brandname;
    
    copy.querySelector(".product-card-price").textContent = "Price: " + item.price;
    copy.querySelector(".product-card-discount-price").textContent = "Price: " + item.price;
    copy.querySelector(".product-card-category").textContent = item.category;
    

    //Price
    if(item.discount != null){
        copy.querySelector(".product-card-price").classList.add("displayLineThrough");
        let discount = item.discount;
        let price = item.price;
        price = price * ( discount / 100 );
        copy.querySelector(".product-card-discount-price").textContent = "Price: " + price;
        }
        else {
            copy.querySelector(".product-card-price").classList.add("displayNone");
    }
    if (item.soldout == 1) {
        copy.querySelector(".sold-out-text").classList.add("display");
        copy.querySelector(".product-card-image").classList.add("dim");
    }
        
    
    
    

     
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    const parent = document.querySelector(".product-card-template");
    parent.appendChild(copy);
}