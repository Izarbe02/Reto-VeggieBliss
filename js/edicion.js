JS

//fetch
const productsURL = "http://localhost:8080/VeggieBliss/Controller?action=products.find_all"

const productsDeleteURL = "http://localhost:8080/VeggieBliss/Controller?action=products.delete"

const productsAddURL = "http://localhost:8080/VeggieBliss/Controller?action=products.add"


const productsUpdateURL = "http://localhost:8080/VeggieBliss/Controller?action=products.update"



const burgerURL = "http://localhost:8080/VeggieBliss/Controller?action=products.burgers"

const saladURL = "http://localhost:8080/VeggieBliss/Controller?action=products.salads"

const razzionURL = "http://localhost:8080/VeggieBliss/Controller?action=products.razziones"

const dessertURL = "http://localhost:8080/VeggieBliss/Controller?action=products.desserts"

const drinkURL = "http://localhost:8080/VeggieBliss/Controller?action=products.drinks"

const allergenURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens.find_all"

const allergenProductURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens_products.find_all"

const employeeURL = "http://localhost:8080/VeggieBliss/Controller?action=employees.find_all"

const fetchData = async() => 
    {
        const [burgerRes, saladRes, razzionRes, dessertRes, drinkRes, allergenRes, allergenProductRes, employeeRes] = await Promise.all([fetch(burgerURL), fetch(saladURL), fetch(razzionURL), fetch(dessertURL), fetch(drinkURL), fetch(allergenURL), fetch(allergenProductURL), fetch(employeeURL)])

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

        const employeeData = await employeeRes.json()
        console.log("Data --> ", employeeData)
    
        printBurguerData(burgerData)
        printRazzionData(razzionData)
        printSaladData(saladData)
        printDessertData(dessertData)
        printDrinkData(drinkData)
        printAllergenData(allergenData)
        printAllergenProductData(allergenProductData)
        printEmployeeData(employeeData)
    }

const deleteProductFetch = async(object) => {
    await fetch(productsDeleteURL,
        {
            method: "post",
            body: JSON.stringify(object),
            headers: { "Content-Type": "application/json" }
        })
}

const addProductFetch = async(object) => {
    await fetch(productsAddURL,
        {
            method: "post",
            body: JSON.stringify(object),
            headers: { "Content-Type": "application/json" }
        })
}

const updateProductFetch = async(object) => {
    await fetch(productsUpdateURL,
        {
            method: "post",
            body: JSON.stringify(object),
            headers: { "Content-Type": "application/json" }
        })
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
            <td class ="price">${burguer.price}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
            const deleteButton = container.getElementsByClassName("delete")[0]
            deleteButton.addEventListener("click", () => {
                deleteDiv.style.display = "flex"
                //deleteProductFetch(burguer)
            })
            
            const editButton = container.getElementsByClassName("edit")[0]
            editButton.addEventListener("click", () => {
                editDiv.style.display = "flex"
                //updateProductFetch(burguer)
            })

            const addButton = container.getElementsByClassName("add")[0]
            addButton.addEventListener("click", () => {
                addDiv.style.display = "flex"
                //addProductFetch(burguer)
            })
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
            <td class ="price">${razzion.price}</td>
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
            <td class ="price">${salad.price}</td>
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
            <td class ="price">${dessert.price}</td>
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
            <td class ="price">${drink.price}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printAllergenData = (allergenData) =>
    {
        const category = document.getElementsByClassName('categories')[5].getElementsByTagName("table")[0]
        Array.from(allergenData).forEach(allergen => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${allergen.allergen_id}</td>
            <td class ="name">${allergen.allergen_name}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printAllergenProductData = (allergenProductData) =>
    {
        const category = document.getElementsByClassName('categories')[6].getElementsByTagName("table")[0]
        Array.from(allergenProductData).forEach(allergenProduct => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${allergenProduct.allergen_id}</td>
            <td class ="id">${allergenProduct.product_id}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

const printEmployeeData = (employeeData) =>
    {
        const category = document.getElementsByClassName('categories')[7].getElementsByTagName("table")[0]
        Array.from(employeeData).forEach(employee => {
            const container = document.createElement("tr")
            category.appendChild(container)
            container.innerHTML = 
            `
            <td class ="id">${employee.employee_ID}</td>
            <td class ="name">${employee.first_name}</td>
            <td class ="name">${employee.last_name}</td>
            <td class ="mail">${employee.mail}</td>
            <td class ="phone">${employee.phone_number}</td>
            <td class ="id">${employee.department_id}</td>
            <td class ="id">${employee.job_id}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>

            `
        })
    }

fetchData()