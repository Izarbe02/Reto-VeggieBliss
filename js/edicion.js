//fetch
const productsURL = "http://localhost:8080/VeggieBliss/Controller?action=products.find_all"

const burgerURL = "http://localhost:8080/VeggieBliss/Controller?action=products.burgers"

const saladURL = "http://localhost:8080/VeggieBliss/Controller?action=products.salads"

const razzionURL = "http://localhost:8080/VeggieBliss/Controller?action=products.razziones"

const dessertURL = "http://localhost:8080/VeggieBliss/Controller?action=products.desserts"

const drinkURL = "http://localhost:8080/VeggieBliss/Controller?action=products.drinks"

const allergenURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens.find_all"

const allergenProductURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens_products.find_all"



const printBurguerData = (burguerData, allergenProductData) => {
    const category = document.getElementsByClassName('categories')[0]
    Array.from(burguerData).forEach((burguer, i) => {
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
                </div>
            ` 
        })
    }