// carrito
let cartDisplay
let cartButton 

document.addEventListener("DOMContentLoaded", (event) => {
    cartDisplay = document.getElementsByClassName("cart-display") [0]
    cartButton = document.getElementsByClassName("cart-button") [0]

    cartButton.addEventListener("click", ()=>{
        if (cartDisplay.style.display != "flex")
        {
            cartDisplay.style.animation = "desplegable 1.5s"
            cartDisplay.style.display = "flex"
        } else {
            cartDisplay.style.animation = "none"
            cartDisplay.style.display = "none"
        }
    })
})



//
//fetch
const productsURL = "http://localhost:8080/VeggieBliss/Controller?action=products.find_all"

const burgerURL = "http://localhost:8080/VeggieBliss/Controller?action=products.burgers"

const saladURL = "http://localhost:8080/VeggieBliss/Controller?action=products.salads"

const razzionURL = "http://localhost:8080/VeggieBliss/Controller?action=products.razziones"

const dessertURL = "http://localhost:8080/VeggieBliss/Controller?action=products.desserts"

const drinkURL = "http://localhost:8080/VeggieBliss/Controller?action=products.drinks"

const fetchData = async() => 
    {
        const burgerRes = await fetch(burgerURL)
        const burgerData = await burgerRes.json()
        console.log("Data --> ", burgerData)

        const saladRes = await fetch(saladURL)
        const saladData = await saladRes.json()
        console.log("Data --> ", saladData)

        const razzionRes = await fetch(razzionURL)
        const razzionData = await razzionRes.json()
        console.log("Data --> ", razzionData)

        const dessertRes = await fetch(dessertURL)
        const dessertData = await dessertRes.json()
        console.log("Data --> ", dessertData)

        const drinkRes = await fetch(drinkURL)
        const drinkData = await drinkRes.json()
        console.log("Data --> ", drinkData)

        printBurguerData(burgerData)
        printRazzionesData(razzionData)
        printSaladsData(saladData)
        printDessertsData(dessertData)
        printDrinksData(drinkData)
    }



const printBurguerData = (burguerData) =>
    {
        const category = document.getElementsByClassName('categories')[0]
        Array.from(burguerData).forEach(burguer => {
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
                </div>
                    <div class="botones">
                        <button class="orange-button">+</button>
                        <button class="precio">${burguer.price.toFixed(2)}€</button>
                    </div>
                </div>
            `
        })
    }

const printRazzionesData = (razzionesData) =>
    {
        const category = document.getElementsByClassName('categories')[1]
        Array.from(razzionesData).forEach(razziones => {
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
                    <p></p>
                </div>
                    <div class="botones">
                        <button class="orange-button">+</button>
                        <button class="precio">${razziones.price.toFixed(2)}€</button>
                    </div>
                </div>
            `
        })
    }

const printSaladsData = (saladsData) =>
    {
        const category = document.getElementsByClassName('categories')[2]
        Array.from(saladsData).forEach(salads => {
            const container = document.createElement("div")
            container.classList.add("container")
            container.classList.add("salads")
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
                </div>
                    <div class="botones">
                        <button class="orange-button">+</button>
                        <button class="precio">${salads.price.toFixed(2)}€</button>
                    </div>
                </div>
            `
        })
    }
const printDessertsData = (dessertsData) =>
    {
        const category = document.getElementsByClassName('categories')[3]
        Array.from(dessertsData).forEach(desserts => {
            const container = document.createElement("div")
            container.classList.add("container")
            container.classList.add("desserts")
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
                </div>
                    <div class="botones">
                        <button class="orange-button">+</button>
                        <button class="precio">${desserts.price.toFixed(2)}€</button>
                    </div>
                </div>
            `
        })
    }

const printDrinksData = (drinksData) =>
    {
        const category = document.getElementsByClassName('categories')[4]
        Array.from(drinksData).forEach(drinks => {
            const container = document.createElement("div")
            container.classList.add("container")
            container.classList.add("drinks")
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
                    
                    
                </div>
                    <div class="botones">
                        <button class="orange-button">+</button>
                        <button class="precio">${drinks.price.toFixed(2)}€</button>
                    </div>
                </div>
            `
        })
    }
fetchData()