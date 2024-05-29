let deleteDiv
let editDiv
let formAdd
let formEdit
let deleteAcceptButton

document.addEventListener("DOMContentLoaded", (event) => {
    deleteDiv = document.getElementsByClassName("suredelete")
    editDiv = document.getElementsByClassName("formedit")
    formAdd = document.getElementsByClassName("formadd")
    formEdit = document.getElementsByClassName("formedit")
    deleteAcceptButton = document.getElementsByClassName("suredelete-button")

    const addButton = document.getElementsByClassName("add")
    const closeButton = document.getElementsByClassName("close")
    Array.from(closeButton).forEach(e => {
        e.addEventListener("click", () => {
            document.body.style.overflow = "visible"
            document.body.style.pointerEvents = "all"
            e.parentElement.style.display = "none"
        })
    })

    Array.from(addButton).forEach((button, index) => {
        button.getElementsByTagName("button")[0].addEventListener("click", () => {
            const addDiv = formAdd[index]
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            addDiv.style.display = "flex"
            addDiv.style.pointerEvents = "all"
        })
    })
})

const productsURL = "http://localhost:8080/VeggieBliss/Controller?action=products.find_all"

const productsDeleteURL = "http://localhost:8080/VeggieBliss/Controller?action=products.delete"

const productsAddURL = "http://localhost:8080/VeggieBliss/Controller?action=products.add"

const productsEditURL = "http://localhost:8080/VeggieBliss/Controller?action=products.update"

const burgerURL = "http://localhost:8080/VeggieBliss/Controller?action=products.burgers"

const saladURL = "http://localhost:8080/VeggieBliss/Controller?action=products.salads"

const razzionURL = "http://localhost:8080/VeggieBliss/Controller?action=products.razziones"

const dessertURL = "http://localhost:8080/VeggieBliss/Controller?action=products.desserts"

const drinkURL = "http://localhost:8080/VeggieBliss/Controller?action=products.drinks"

const allergenURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens.find_all"

const allergenProductURL = "http://localhost:8080/VeggieBliss/Controller?action=allergens_products.find_all"

const employeeURL = "http://localhost:8080/VeggieBliss/Controller?action=employees.find_all"

const fetchData = async () => {
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

const deleteProductFetch = async (object) => {
    await fetch(productsDeleteURL,
        {
            method: "post",
            body: JSON.stringify(object),
            headers: { "Content-Type": "application/json" }
        })
}

const addProductFetch = async (object) => {
    const res = await fetch(productsAddURL,
        {
            method: "post",
            body: JSON.stringify(object),
            headers: { "Content-Type": "application/json" }
        })
    console.log(res)
}

const editProductFetch = async (object) => {
    await fetch(productsEditURL,
        {
            method: "post",
            body: JSON.stringify(object),
            headers: { "Content-Type": "application/json" }
        })
}
//burger
const printBurguerData = (burguerData) => {
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
          
        const editButton = container.getElementsByClassName("edit")[0]
        editButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            editDiv[0].style.display = "flex"
            editDiv[0].style.pointerEvents = "all"
        })
        const deleteButton = container.getElementsByClassName("delete")[0]
        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv[0].style.display = "flex"
            deleteDiv[0].style.pointerEvents = "all"
        })

        
        formAdd[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            const burger =
            {
                product_id: document.getElementById("add_product_id").value,
                product_image: document.getElementById("add_product_image").value,
                product_name: document.getElementById("add_product_name").value,
                product_description: document.getElementById("add_product_description").value,
                price: document.getElementById("add_price").value,
                category_id: burguer.category_id
            }
            console.log(burger)

            addProductFetch(burger).then(console.log("added"))

            
            fetchData()
        })

        formEdit[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            document.getElementById("add_product_id").value = burguer.product_id
            document.getElementById("add_product_image").value = burguer.product_image
            document.getElementById("add_product_name").value = burguer.product_name
            document.getElementById("add_product_description").value = burguer.product_description
            document.getElementById("add_price").value = burguer.price
            
            const burger =
            {
                product_id: document.getElementById("add_product_id").value,
                product_image: document.getElementById("add_product_image").value,
                product_name: document.getElementById("add_product_name").value,
                product_description: document.getElementById("add_product_description").value,
                price: document.getElementById("add_price").value,
                category_id: "2"
            }

            editProductFetch(burger).then(console.log("edited"))

            fetchData()
        })

        deleteAcceptButton[0].getElementsByTagName("button")[0].addEventListener("click", async() => {
            const burger =
            {
                product_id: burguer.product_id
            }

            addProductFetch(burger).then(console.log("deleted"))

            fetchData()
        })
    })
}


//razzion
const printRazzionesData = (razzionesData) => {
    const category = document.getElementsByClassName('categories')[0].getElementsByTagName("table")[0]
    Array.from(razzionesData).forEach(razziones => {
        const container = document.createElement("tr")
        category.appendChild(container)
        container.innerHTML =
            `
            <td class ="id">${razziones.product_id}</td>
            <td class ="name">${razziones.product_name}</td>
            <td class ="image">${razziones.product_image}</td>
            <td class ="des">${razziones.product_description}</td>
            <td class ="price">${razziones.price}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>
            `
          
        const editButton = container.getElementsByClassName("edit")[0]
        editButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            editDiv[0].style.display = "flex"
            editDiv[0].style.pointerEvents = "all"
        })
        const deleteButton = container.getElementsByClassName("delete")[0]
        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv[0].style.display = "flex"
            deleteDiv[0].style.pointerEvents = "all"
        })

        
        formAdd[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            const razzion =
            {
                product_id: document.getElementById("add_product_id_razziones").value,
                product_image: document.getElementById("add_product_image_razziones").value,
                product_name: document.getElementById("add_product_name_razziones").value,
                product_description: document.getElementById("add_product_description_razziones").value,
                price: document.getElementById("add_price_razziones").value,
                category_id: razziones.category_id
            }
            console.log(razzion)

            addProductFetch(razzion).then(console.log("added"))

            
            fetchData()
        })

        formEdit[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            document.getElementById("add_product_id_razziones").value = razziones.product_id
            document.getElementById("add_product_image_razziones").value = razziones.product_image
            document.getElementById("add_product_name_razziones").value = razziones.product_name
            document.getElementById("add_product_description_razziones").value = razziones.product_description
            document.getElementById("add_price_razziones").value = razziones.price
            
            const razzion =
            {
                product_id: document.getElementById("add_product_id_razziones").value,
                product_image: document.getElementById("add_product_image_razziones").value,
                product_name: document.getElementById("add_product_name_razziones").value,
                product_description: document.getElementById("add_product_description_razziones").value,
                price: document.getElementById("add_price_razziones").value,
                category_id: "2"
            }

            editProductFetch(razzion).then(console.log("edited"))

            fetchData()
        })

        deleteAcceptButton[0].getElementsByTagName("button")[0].addEventListener("click", async() => {
            const razzion =
            {
                product_id: razziones.product_id
            }

            addProductFetch(razzion).then(console.log("deleted"))

            fetchData()
        })
    })
}

//salad
    const printSaladasData = (saladsData) => {
    const category = document.getElementsByClassName('categories')[0].getElementsByTagName("table")[0]
    Array.from(saladsData).forEach(salads => {
        const container = document.createElement("tr")
        category.appendChild(container)
        container.innerHTML =
            `
            <td class ="id">${salads.product_id}</td>
            <td class ="name">${salads.product_name}</td>
            <td class ="image">${salads.product_image}</td>
            <td class ="des">${salads.product_description}</td>
            <td class ="price">${salads.price}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>
            `
          
        const editButton = container.getElementsByClassName("edit")[0]
        editButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            editDiv[0].style.display = "flex"
            editDiv[0].style.pointerEvents = "all"
        })
        const deleteButton = container.getElementsByClassName("delete")[0]
        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv[0].style.display = "flex"
            deleteDiv[0].style.pointerEvents = "all"
        })

        
        formAdd[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            const salad =
            {
                product_id: document.getElementById("add_product_id").value,
                product_image: document.getElementById("add_product_image").value,
                product_name: document.getElementById("add_product_name").value,
                product_description: document.getElementById("add_product_description").value,
                price: document.getElementById("add_price").value,
                category_id: salads.category_id
            }
            console.log(salad)

            addProductFetch(salad).then(console.log("added"))

            
            fetchData()
        })

        formEdit[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            document.getElementById("add_product_id_salads").value = salads.product_id
            document.getElementById("add_product_image_salads").value = salads.product_image
            document.getElementById("add_product_name_salads").value = salads.product_name
            document.getElementById("add_product_description_salads").value = salads.product_description
            document.getElementById("add_price_salads").value = salads.price
            
            const salad =
            {
                product_id: document.getElementById("add_product_id_salads").value,
                product_image: document.getElementById("add_product_image_salads").value,
                product_name: document.getElementById("add_product_name_salads").value,
                product_description: document.getElementById("add_product_description_salads").value,
                price: document.getElementById("add_price_salads").value,
                category_id: "2"
            }

            editProductFetch(salad).then(console.log("edited"))

            fetchData()
        })

        deleteAcceptButton[0].getElementsByTagName("button")[0].addEventListener("click", async() => {
            const salad =
            {
                product_id: salads.product_id
            }

            addProductFetch(salad).then(console.log("deleted"))

            fetchData()
        })
    })
}

//desssert
const printDessertsData = (dessertsData) => {
    const category = document.getElementsByClassName('categories')[0].getElementsByTagName("table")[0]
    Array.from(dessertsData).forEach(desserts => {
        const container = document.createElement("tr")
        category.appendChild(container)
        container.innerHTML =
            `
            <td class ="id">${desserts.product_id}</td>
            <td class ="name">${desserts.product_name}</td>
            <td class ="image">${desserts.product_image}</td>
            <td class ="des">${desserts.product_description}</td>
            <td class ="price">${desserts.price}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>
            `
          
        const editButton = container.getElementsByClassName("edit")[0]
        editButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            editDiv[0].style.display = "flex"
            editDiv[0].style.pointerEvents = "all"
        })
        const deleteButton = container.getElementsByClassName("delete")[0]
        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv[0].style.display = "flex"
            deleteDiv[0].style.pointerEvents = "all"
        })

        
        formAdd[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            const dessert =
            {
                product_id: document.getElementById("add_product_id").value,
                product_image: document.getElementById("add_product_image").value,
                product_name: document.getElementById("add_product_name").value,
                product_description: document.getElementById("add_product_description").value,
                price: document.getElementById("add_price").value,
                category_id: desserts.category_id
            }
            console.log(dessert)

            addProductFetch(dessert).then(console.log("added"))

            
            fetchData()
        })

        formEdit[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            document.getElementById("add_product_id_dessert").value = desserts.product_id
            document.getElementById("add_product_image_dessert").value = desserts.product_image
            document.getElementById("add_product_name_dessert").value = desserts.product_name
            document.getElementById("add_product_description_dessert").value = desserts.product_description
            document.getElementById("add_price_dessert").value = desserts.price
            
            const dessert =
            {
                product_id: document.getElementById("add_product_id_dessert").value,
                product_image: document.getElementById("add_product_image_dessert").value,
                product_name: document.getElementById("add_product_name_dessert").value,
                product_description: document.getElementById("add_product_description_dessert").value,
                price: document.getElementById("add_price_dessert").value,
                category_id: "2"
            }

            editProductFetch(dessert).then(console.log("edited"))

            fetchData()
        })

        deleteAcceptButton[0].getElementsByTagName("button")[0].addEventListener("click", async() => {
            const dessert =
            {
                product_id: desserts.product_id
            }

            addProductFetch(dessert).then(console.log("deleted"))

            fetchData()
        })
    })
}

//drink
    const printDrinksData = (drinksData) => {
    const category = document.getElementsByClassName('categories')[0].getElementsByTagName("table")[0]
    Array.from(drinksData).forEach(drinks => {
        const container = document.createElement("tr")
        category.appendChild(container)
        container.innerHTML =
            `
            <td class ="id">${drinks.product_id}</td>
            <td class ="name">${drinks.product_name}</td>
            <td class ="image">${drinks.product_image}</td>
            <td class ="des">${drinks.product_description}</td>
            <td class ="price">${drinks.price}</td>
            <td class ="edit"><img src = "../images/editar.png" alt="edit"></td>
            <td class ="delete"><img src = "../images/eliminar.png" alt="delete"></td>
            `
          
        const editButton = container.getElementsByClassName("edit")[0]
        editButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            editDiv[0].style.display = "flex"
            editDiv[0].style.pointerEvents = "all"
        })
        const deleteButton = container.getElementsByClassName("delete")[0]
        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv[0].style.display = "flex"
            deleteDiv[0].style.pointerEvents = "all"
        })

        
        formAdd[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            const drink =
            {
                product_id: document.getElementById("add_product_id").value,
                product_image: document.getElementById("add_product_image").value,
                product_name: document.getElementById("add_product_name").value,
                product_description: document.getElementById("add_product_description").value,
                price: document.getElementById("add_price").value,
                category_id: drinks.category_id
            }
            console.log(drink)

            addProductFetch(drink).then(console.log("added"))

            
            fetchData()
        })

        formEdit[0].getElementsByTagName("form")[0].addEventListener("submit", async() => {
            document.getElementById("add_product_id_drink").value = drinks.product_id
            document.getElementById("add_product_image_drink").value = drinks.product_image
            document.getElementById("add_product_name_drink").value = drinks.product_name
            document.getElementById("add_product_description_drink").value = drinks.product_description
            document.getElementById("add_price_drink").value = drinks.price
            
            const drink =
            {
                product_id: document.getElementById("add_product_id_drink").value,
                product_image: document.getElementById("add_product_image_drink").value,
                product_name: document.getElementById("add_product_name_drink").value,
                product_description: document.getElementById("add_product_description_drink").value,
                price: document.getElementById("add_price_drink").value,
                category_id: "2"
            }

            editProductFetch(drink).then(console.log("edited"))

            fetchData()
        })

        deleteAcceptButton[0].getElementsByTagName("button")[0].addEventListener("click", async() => {
            const drink =
            {
                product_id: drinks.product_id
            }

            addProductFetch(drink).then(console.log("deleted"))

            fetchData()
        })
    })
    
}
fetchData()
