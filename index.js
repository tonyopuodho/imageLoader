const productContainer = document.querySelector(".product-container")
const loadBtn = document.querySelector(".loadBtn")

async function fetchProducts(getCurrent){
    try {
        const apiResponse = await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrent === 0 ? 0 : getCurrent * 10}`)
        const apiResult = await apiResponse.json()
        if (apiResult && apiResult.products) displayProducts(apiResult.products)        
    } catch (error) {
        console.log(error)
    }
}


function displayProducts(products){
    products.forEach((items) => {

        const itemWrapper = document.createElement("div")
        const productTitle = document.createElement("p")
        const productImage = document.createElement("img")
        const productDescription = document.createElement("p")
        const productPrice = document.createElement("p")

        productTitle.textContent = items.title
        productImage.src = items.thumbnail
        productDescription.textContent = items.description
        productPrice.textContent = items.price

        productTitle.classList.add("product-title")
        productImage.classList.add("product-image")
        productDescription.classList.add("product-description")
        productPrice.classList.add("product-price")
        itemWrapper.classList.add("item")

        itemWrapper.appendChild(productImage)
        itemWrapper.appendChild(productTitle)
        itemWrapper.appendChild(productPrice)
        itemWrapper.appendChild(productDescription)

        productContainer.appendChild(itemWrapper)

    })
   
}

fetchProducts()