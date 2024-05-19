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
                <button class="orange-button">+</button>
                </div>
            `
        })
    }
fetchData()