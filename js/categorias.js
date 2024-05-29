// carrito
let cartDisplay
let cartButton
let totalPriceContainer
let cleanUp

document.addEventListener("DOMContentLoaded", (event) => {
    cartDisplay = document.getElementsByClassName("cart-display")[0]
    cartButton = document.getElementsByClassName("cart-button")[0]
    cleanUp = document.getElementsByClassName("clean-order")[0]
totalPriceContainer = document.getElementsByClassName("order-total-price")
    cartButton.addEventListener("click", () => {
        if (cartDisplay.style.display != "flex") {
            cartDisplay.style.animation = "desplegable 1.5s"
            cartDisplay.style.display = "flex"
        } else {
            cartDisplay.style.animation = "none"
            cartDisplay.style.display = "none"
        }
    })
    cleanUp.addEventListener("click", () => {
        let deleteDetails = cartDisplay.getElementsByClassName("order-card")
        Array.from(deleteDetails).forEach(detail => {
            detail.remove()            
        })
    })
})

let orderTotalPrice = 0
 

//
//fetch
const productsURL = "http://localhost:8080/VeggieBliss/Controller?action=products.find_all"

const burgerURL = "http://localhost:8080/VeggieBliss/Controller?action=products.burgers"

const saladURL = "http://localhost:8080/VeggieBliss/Controller?action=products.salads"

const razzionURL = "http://localhost:8080/VeggieBliss/Controller?action=products.razziones"

const dessertURL = "http://localhost:8080/VeggieBliss/Controller?action=products.desserts"

const drinkURL = "http://localhost:8080/VeggieBliss/Controller?action=products.drinks"

const allergenURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens.find_all"

const allergenProductURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens_products.find_all"

/*const orderPostURL = "http://localhost:8080/VeggieBliss/Controller?action=orders.add"

const detailPostURL = "http://localhost:8080/VeggieBliss/Controller?action=order_details.add"

const updatePost = "http://localhost:8080/VeggieBliss/Controller?action=order_details.update"*/

/*const orderPostFetch =  async(data) => {
    await fetch(orderPostURL,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
            
        })
    }

   

const detailsPostFetch =  async(data) => 
{  await fetch(detailPostURL,
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
        
    })
}*/



const fetchData = async () => {

    const [burgerRes, saladRes, razzionRes, dessertRes, drinkRes, allergenRes, allergenProductRes] = await Promise.all([fetch(burgerURL), fetch(saladURL), fetch(razzionURL), fetch(dessertURL), fetch(drinkURL), fetch(allergenURL), fetch(allergenProductURL)])

    const burgerData = await burgerRes.json()
    console.log("Data --> ", burgerData)

    const saladData = await saladRes.json()
    console.log("Data --> ", saladData)

    const razzionData = await razzionRes.json()
    console.log("Data --> ", razzionData)

    const dessertData = await dessertRes.json()
    console.log("Data --> ", dessertData)

    const drinkData = await drinkRes.json()
    console.log("Data --> ", drinkData)

    const allergenData = await allergenRes.json()
    console.log("Data --> ", allergenData)

    const allergenProductData = await allergenProductRes.json()
    console.log("Data --> ", allergenProductData)

    printAllergenData(allergenData)
    printBurguerData(burgerData, allergenProductData)
    printRazzionesData(razzionData, allergenProductData)
    printSaladsData(saladData, allergenProductData)
    printDessertsData(dessertData, allergenProductData)
    printDrinksData(drinkData, allergenProductData)
}

const printAllergenData = (allergenData) => {
    const category = document.getElementsByClassName('allergens')[0].getElementsByTagName("table")[0]
    Array.from(allergenData).forEach(allergen => {
        const container = document.createElement("tr")
        container.classList.add("allergen")
        category.appendChild(container)
        container.innerHTML =
            `
                    <td>${allergen.allergen_id}</td>
                    <td>${allergen.allergen_name}</td>
            `
    })
}
//burguer
const printBurguerData = (burguerData, allergenProductData) => {
    const category = document.getElementsByClassName('categories')[0]
    Array.from(burguerData).forEach((burguer, index) => {
        const container = document.createElement("div")
        container.classList.add("container")
        container.classList.add("burgers")
        category.appendChild(container)
        container.innerHTML =
        
            `
                <div class="category-card">
                <div class="category-header">
                    <h2>${burguer.product_name}</h2>
                </div>
                <img src= "${burguer.product_image}" alt= "${burguer.product_name}">
                <div class="description">
                    <p>${burguer.product_description}</p>
                    <span class="allergen_products_span"></span>
                </div>
                <button class="orange-button">+</button>
                <button class="precio">${burguer.price.toFixed(2)}€</button>
                </div>
            ` 
        
        const orangeButton = container.getElementsByClassName("orange-button")[0]
        const allergen_span = container.getElementsByClassName('allergen_products_span')[0]

        Array.from(allergenProductData.filter(product => product.product_id === burguer.product_id)).forEach(allergen_product => {
            allergen_span.innerText +=
                `${allergen_product.allergen_id} `
        })
        
    let currentdetail = {
        existence: false,
        product_name: null,
        product_quantity: 0,
        unitPrice: 0,
        totalPrice: 0
    }
    

    //order listener
    orangeButton.addEventListener("click", () => {
        /*let currentOrder = 
        {  order_id: 1,
            order_date: new Date(),
            direction: null,
            client_id: 1

        }
        let CurrentDetail = 
        {
            order_detail_id : 1,
            quantity_product: 0 ,
            sales_price: 0 ,
            product_id: null ,
            employee_id: 1 ,
            order_id: 1 ,
        }*/

        if (currentdetail.existence != true) {
            currentdetail.existence = true
            currentdetail.product_name = burguer.product_name
            currentdetail.product_quantity = 1
            currentdetail.unitPrice = burguer.price
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            const detail = document.createElement("div")
            detail.classList.add("order-card")
            cartDisplay.appendChild(detail)  
            detail.innerHTML = `
                    <div class="card-photo">
                    <img src="../images/flor.png" alt="order-image">
                </div>
            <div class="card-info">
                <p class="cart-text">${currentdetail.product_name}</p><br>
                <div class="price-quantity">
                <p class="card-price"> <strong>${currentdetail.totalPrice.toFixed(2)}€</strong></p>
                <p class="product-quantity">${currentdetail.product_quantity}</p>
                </div>
            </div>
            `
        }
        else {
            currentdetail.product_quantity += 1
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            const orderCards = document.getElementsByClassName("order-card")

                Array.from(orderCards).forEach(card => {
                if (burguer.productName === card.getElementsByClassName("cart-text")[0].innerText)
                {
                card.getElementsByClassName("card-price")[0].innerText = currentdetail.totalPrice.toFixed(2)+"€"
                card.getElementsByClassName("product-quantity")[0] = currentdetail.product_quantity
                }
                })
        }
        
    })
})

} //burguer
    
//razziones
const printRazzionesData = (razzionesData, allergenProductData) => {
    const category = document.getElementsByClassName('categories')[1]
    Array.from(razzionesData).forEach((razziones, index) => {
        const container = document.createElement("div")
        container.classList.add("container")
        container.classList.add("razziones")
        category.appendChild(container)
        container.innerHTML =
        
            `
                <div class="category-card">
                <div class="category-header">
                    <h2>${razziones.product_name}</h2>
                </div>
                <img src= "${razziones.product_image}" alt= "${razziones.product_name}">
                <div class="description">
                    <p>${razziones.product_description}</p>
                    <span class="allergen_products_span"></span>
                </div>
                <button class="orange-button">+</button>
                <button class="precio">${razziones.price.toFixed(2)}€</button>
                </div>
            ` 
        
        const orangeButton = container.getElementsByClassName("orange-button")[0]
        const allergen_span = container.getElementsByClassName('allergen_products_span')[0]

        Array.from(allergenProductData.filter(product => product.product_id === razziones.product_id)).forEach(allergen_product => {
            allergen_span.innerText +=
                `${allergen_product.allergen_id} `
        })
        
    let currentdetail = {
        existence: false,
        product_name: null,
        product_quantity: 0,
        unitPrice: 0,
        totalPrice: 0
    }
    

    //order listener
    orangeButton.addEventListener("click", () => {

        if (currentdetail.existence != true) {
            currentdetail.existence = true
            currentdetail.product_name = razziones.product_name
            currentdetail.product_quantity = 1
            currentdetail.unitPrice = razziones.price
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            const detail = document.createElement("div")
            detail.classList.add("order-card")
            cartDisplay.appendChild(detail)  
            detail.innerHTML = `
                    <div class="card-photo">
                    <img src="../images/flor.png" alt="order-image">
                </div>
            <div class="card-info">
                <p class="cart-text">${currentdetail.product_name}</p><br>
                <div class="price-quantity">
                <p class="card-price"> <strong>${currentdetail.totalPrice.toFixed(2)}€</strong></p>
                <p class="product-quantity">${currentdetail.product_quantity}</p>
                </div>
            </div>
            `
        }
        else {
            currentdetail.product_quantity += 1
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            cartDisplay.getElementsByClassName("card-price")[index].innerText = currentdetail.totalPrice.toFixed(2) + "€"
            cartDisplay.getElementsByClassName("product-quantity")[index].innerText = currentdetail.product_quantity
        }
        
    })
})
}




//Salads

const printSaladsData = (saladsData, allergenProductData) => {
    const category = document.getElementsByClassName('categories')[2]
    Array.from(saladsData).forEach((salads, index) => {
        const container = document.createElement("div")
        container.classList.add("container")
        container.classList.add("burgers")
        category.appendChild(container)
        container.innerHTML =
        
            `
                <div class="category-card">
                <div class="category-header">
                    <h2>${salads.product_name}</h2>
                </div>
                <img src= "${salads.product_image}" alt= "${salads.product_name}">
                <div class="description">
                    <p>${salads.product_description}</p>
                    <span class="allergen_products_span"></span>
                </div>
                <button class="orange-button">+</button>
                <button class="precio">${salads.price.toFixed(2)}€</button>
                </div>
            ` 
        
        const orangeButton = container.getElementsByClassName("orange-button")[0]
        const allergen_span = container.getElementsByClassName('allergen_products_span')[0]

        Array.from(allergenProductData.filter(product => product.product_id === salads.product_id)).forEach(allergen_product => {
            allergen_span.innerText +=
                `${allergen_product.allergen_id} `
        })
        
    let currentdetail = {
        existence: false,
        product_name: null,
        product_quantity: 0,
        unitPrice: 0,
        totalPrice: 0
    }
    

    //order listener
    orangeButton.addEventListener("click", () => {
        
        if (currentdetail.existence != true) {
            currentdetail.existence = true
            currentdetail.product_name = salads.product_name
            currentdetail.product_quantity = 1
            currentdetail.unitPrice = salads.price
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            const detail = document.createElement("div")
            detail.classList.add("order-card")
            cartDisplay.appendChild(detail)  
            detail.innerHTML = `
                    <div class="card-photo">
                    <img src="../images/flor.png" alt="order-image">
                </div>
            <div class="card-info">
                <p class="cart-text">${currentdetail.product_name}</p><br>
                <div class="price-quantity">
                <p class="card-price"> <strong>${currentdetail.totalPrice.toFixed(2)}€</strong></p>
                <p class="product-quantity">${currentdetail.product_quantity}</p>
                </div>
            </div>
            `
        }
        else {
            currentdetail.product_quantity += 1
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            cartDisplay.getElementsByClassName("card-price")[index].innerText = currentdetail.totalPrice.toFixed(2) + "€"
            cartDisplay.getElementsByClassName("product-quantity")[index].innerText = currentdetail.product_quantity
        }
        
    })
})

} 
    




//Desserts
const printDessertsData = (dessertsData, allergenProductData) => {
    const category = document.getElementsByClassName('categories')[3]
    Array.from(dessertsData).forEach((desserts, index) => {
        const container = document.createElement("div")
        container.classList.add("container")
        container.classList.add("burgers")
        category.appendChild(container)
        container.innerHTML =
        
            `
                <div class="category-card">
                <div class="category-header">
                    <h2>${desserts.product_name}</h2>
                </div>
                <img src= "${desserts.product_image}" alt= "${desserts.product_name}">
                <div class="description">
                    <p>${desserts.product_description}</p>
                    <span class="allergen_products_span"></span>
                </div>
                <button class="orange-button">+</button>
                <button class="precio">${desserts.price.toFixed(2)}€</button>
                </div>
            ` 
        
        const orangeButton = container.getElementsByClassName("orange-button")[0]
        const allergen_span = container.getElementsByClassName('allergen_products_span')[0]

        Array.from(allergenProductData.filter(product => product.product_id === desserts.product_id)).forEach(allergen_product => {
            allergen_span.innerText +=
                `${allergen_product.allergen_id} `
        })
        
    let currentdetail = {
        existence: false,
        product_name: null,
        product_quantity: 0,
        unitPrice: 0,
        totalPrice: 0
    }
    

    //order listener
    orangeButton.addEventListener("click", () => {
       

        if (currentdetail.existence != true) {
            currentdetail.existence = true
            currentdetail.product_name = desserts.product_name
            currentdetail.product_quantity = 1
            currentdetail.unitPrice = desserts.price
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            const detail = document.createElement("div")
            detail.classList.add("order-card")
            cartDisplay.appendChild(detail)  
            detail.innerHTML = `
                    <div class="card-photo">
                    <img src="../images/flor.png" alt="order-image">
                </div>
            <div class="card-info">
                <p class="cart-text">${currentdetail.product_name}</p><br>
                <div class="price-quantity">
                <p class="card-price"> <strong>${currentdetail.totalPrice.toFixed(2)}€</strong></p>
                <p class="product-quantity">${currentdetail.product_quantity}</p>
                </div>
            </div>
            `
        }
        else {
            currentdetail.product_quantity += 1
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            cartDisplay.getElementsByClassName("card-price")[index].innerText = currentdetail.totalPrice.toFixed(2) + "€"
            cartDisplay.getElementsByClassName("product-quantity")[index].innerText = currentdetail.product_quantity
        }
        
    })
})

} 


//Drinks
const printDrinksData = (drinksData, allergenProductData) => {
    const category = document.getElementsByClassName('categories')[4]
    Array.from(drinksData).forEach((drinks, index) => {
        const container = document.createElement("div")
        container.classList.add("container")
        container.classList.add("burgers")
        category.appendChild(container)
        container.innerHTML =
        
            `
                <div class="category-card">
                <div class="category-header">
                    <h2>${drinks.product_name}</h2>
                </div>
                <img src= "${drinks.product_image}" alt= "${drinks.product_name}">
                <div class="description">
                    <p>${drinks.product_description}</p>
                    <span class="allergen_products_span"></span>
                </div>
                <button class="orange-button">+</button>
                <button class="precio">${drinks.price.toFixed(2)}€</button>
                </div>
            ` 
        
        const orangeButton = container.getElementsByClassName("orange-button")[0]
        const allergen_span = container.getElementsByClassName('allergen_products_span')[0]

        Array.from(allergenProductData.filter(product => product.product_id === drinks.product_id)).forEach(allergen_product => {
            allergen_span.innerText +=
                `${allergen_product.allergen_id} `
        })
        
    let currentdetail = {
        existence: false,
        product_name: null,
        product_quantity: 0,
        unitPrice: 0,
        totalPrice: 0
    }
    

    //order listener
    orangeButton.addEventListener("click", () => {
       
        if (currentdetail.existence != true) {
            currentdetail.existence = true
            currentdetail.product_name = drinks.product_name
            currentdetail.product_quantity = 1
            currentdetail.unitPrice = drinks.price
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            const detail = document.createElement("div")
            detail.classList.add("order-card")
            cartDisplay.appendChild(detail)  
            detail.innerHTML = `
                    <div class="card-photo">
                    <img src="../images/flor.png" alt="order-image">
                </div>
            <div class="card-info">
                <p class="cart-text">${currentdetail.product_name}</p><br>
                <div class="price-quantity">
                <p class="card-price"> <strong>${currentdetail.totalPrice.toFixed(2)}€</strong></p>
                <p class="product-quantity">${currentdetail.product_quantity}</p>
                </div>
            </div>
            `
        }
        else {
            currentdetail.product_quantity += 1
            currentdetail.totalPrice = currentdetail.unitPrice * currentdetail.product_quantity

            cartDisplay.getElementsByClassName("card-price")[index].innerText = currentdetail.totalPrice.toFixed(2) + "€"
            cartDisplay.getElementsByClassName("product-quantity")[index].innerText = currentdetail.product_quantity
        }
        
    })
})

} 

fetchData()