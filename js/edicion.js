
//fetch
const productsURL = "http://localhost:8080/VeggieBliss/Controller?action=products.find_all"

const burgerURL = "http://localhost:8080/VeggieBliss/Controller?action=products.burgers"

const saladURL = "http://localhost:8080/VeggieBliss/Controller?action=products.salads"

const razzionURL = "http://localhost:8080/VeggieBliss/Controller?action=products.razziones"

const dessertURL = "http://localhost:8080/VeggieBliss/Controller?action=products.desserts"

const drinkURL = "http://localhost:8080/VeggieBliss/Controller?action=products.drinks"

const fetchData = async() => 
    {
        const [burgerRes, saladRes, razzionRes, dessertRes, drinkRes] = await Promise.all([fetch(burgerURL), fetch(saladURL), fetch(razzionURL), fetch(dessertURL), fetch(drinkURL)])

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

        printBurguerData(burgerData)
        printRazzionData(razzionData)
        printSaladData(saladData)
        printDessertData(dessertData)
        printDrinkData(drinkData)
    }

const printBurguerData = (burguerData) =>
    {
        const category = document.getElementsByClassName('categories')[0].getElementsByTagName("table")[0]
        Array.from(burguerData).forEach(burguer => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${burguer.product_id}</td>
            <td class ="name">${burguer.product_name}</td>
            <td class ="image">${burguer.product_image}</td>
            <td class ="des">${burguer.product_description}</td>
            <td class ="price">${burguer.price.toFixed(2)}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printRazzionData = (razzionData) =>
    {
        const category = document.getElementsByClassName('categories')[1].getElementsByTagName("table")[0]
        Array.from(razzionData).forEach(razzion => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${razzion.product_id}</td>
            <td class ="name">${razzion.product_name}</td>
            <td class ="image">${razzion.product_image}</td>
            <td class ="des">${razzion.product_description}</td>
            <td class ="price">${razzion.price.toFixed(2)}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printSaladData = (saladData) =>
    {
        const category = document.getElementsByClassName('categories')[2].getElementsByTagName("table")[0]
        Array.from(saladData).forEach(salad => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${salad.product_id}</td>
            <td class ="name">${salad.product_name}</td>
            <td class ="image">${salad.product_image}</td>
            <td class ="des">${salad.product_description}</td>
            <td class ="price">${salad.price.toFixed(2)}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printDessertData = (dessertData) =>
    {
        const category = document.getElementsByClassName('categories')[3].getElementsByTagName("table")[0]
        Array.from(dessertData).forEach(dessert => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${dessert.product_id}</td>
            <td class ="name">${dessert.product_name}</td>
            <td class ="image">${dessert.product_image}</td>
            <td class ="des">${dessert.product_description}</td>
            <td class ="price">${dessert.price.toFixed(2)}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printDrinkData = (drinkData) =>
    {
        const category = document.getElementsByClassName('categories')[4].getElementsByTagName("table")[0]
        Array.from(drinkData).forEach(drink => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${drink.product_id}</td>
            <td class ="name">${drink.product_name}</td>
            <td class ="image">${drink.product_image}</td>
            <td class ="des">${drink.product_description}</td>
            <td class ="price">${drink.price.toFixed(2)}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }
fetchData()