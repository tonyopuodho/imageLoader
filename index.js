const productContainer = document.querySelector(".product-container")

async function fetchProducts(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/products')
        const apiResult = await apiResponse.json()
        if (apiResult && apiResult.products) displayProducts(apiResult.products)        
    } catch (error) {
        console.log(error)
    }
}


fetchProducts()