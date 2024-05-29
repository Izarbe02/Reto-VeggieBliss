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

            
            printBurguerData()
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

            
            printBurguerData()
        })

        deleteAcceptButton[0].getElementsByTagName("button")[0].addEventListener("click", async() => {
            const burger =
            {
                product_id: burguer.product_id
            }

            addProductFetch(burger).then(console.log("deleted"))

            
            printBurguerData()
        })
        /*
        const deleteButton = container.getElementsByClassName("delete")

        Array.from(deleteButton).forEach((button, index) => {
            button.addEventListener("click", () => {
                const deleteDiv = document.getElementsByClassName("suredelete")[0]
                deleteDiv.style.display = "flex"
            })
        })

        const editForm = document.getElementById("formedit")
        editForm.addEventListener("submit", () => {
            const burger =
            {
                product_id: document.getElementById("edit_product_id").value,
                product_image: document.getElementById("edit_product_image").value,
                product_name: document.getElementById("edit_product_name").value,
                product_description: document.getElementById("edit_product_description").value,
                price: document.getElementById("edit_price").value
            }

            editProductFetch(burger)
        })

        const addForm = document.getElementById("formadd")
        addForm.addEventListener("submit", () => {
            const burger =
            {
                product_id: document.getElementById("add_product_id").value,
                product_image: document.getElementById("add_product_image").value,
                product_name: document.getElementById("add_product_name").value,
                product_description: document.getElementById("add_product_description").value,
                price: document.getElementById("add_price").value
            }

            addProductFetch(burger)
        })*/
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
            const editButton = container.getElementsByClassName("edit")
/*
            Array.from(addButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const editDiv = document.getElementsByClassName("formedit")[0]
            editDiv.style.display = "flex"
                })
            })
            const deleteButton = container.getElementsByClassName("delete")

            Array.from(deleteButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const deleteDiv = document.getElementsByClassName("suredelete")[0]
            deleteDiv.style.display = "flex"
                })
            })

            const editForm = document.getElementById("formedit_razziones")
            editForm.addEventListener("submit", () => {
                const razzion = {
                    product_id: document.getElementById("edit_product_id_razziones").value,
                    product_image : document.getElementById("edit_product_image_razziones").value,
                    product_name : document.getElementById("edit_product_name_razziones").value,
                    product_description : document.getElementById("edit_product_description_razziones").value,
                    price : document.getElementById("edit_price_razziones").value
                }

                editProductFetch(razzion)
            })

            const addForm = document.getElementById("formadd_razziones")
            addForm.addEventListener("submit", () => {
                const razzion = {
                    product_id: document.getElementById("add_product_id_razziones").value,
                    product_image : document.getElementById("add_product_image_razziones").value,
                    product_name : document.getElementById("add_product_name_razziones").value,
                    product_description : document.getElementById("add_product_description_razziones").value,
                    price : document.getElementById("add_price_razziones").value
                }

                addProductFetch(razzion)
            })*/
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

            const editButton = container.getElementsByClassName("edit")
/*
            Array.from(addButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const editDiv = document.getElementsByClassName("formedit")[0]
            editDiv.style.display = "flex"
                })
            })
            const deleteButton = container.getElementsByClassName("delete")

            Array.from(deleteButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const deleteDiv = document.getElementsByClassName("suredelete")[0]
            deleteDiv.style.display = "flex"
                })
            })

            const editForm = document.getElementById("formedit_salads")
            editForm.addEventListener("submit", () => {
                const salad = {
                    product_id: document.getElementById("edit_product_id_salads").value,
                    product_image : document.getElementById("edit_product_image_salads").value,
                    product_name : document.getElementById("edit_product_name_salads").value,
                    product_description : document.getElementById("edit_product_description_salads").value,
                    price : document.getElementById("edit_price_salads").value
                }

                editProductFetch(salad)
            })

            const addForm = document.getElementById("formadd_salads")
            addForm.addEventListener("submit", () => {
                const salad = {
                    product_id: document.getElementById("add_product_id_salads").value,
                    product_image : document.getElementById("add_product_image_salads").value,
                    product_name : document.getElementById("add_product_name_salads").value,
                    product_description : document.getElementById("add_product_description_salads").value,
                    price : document.getElementById("add_price_salads").value
                }

                addProductFetch(salad)
            })*/
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

            const editButton = container.getElementsByClassName("edit")
/*
            Array.from(addButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const editDiv = document.getElementsByClassName("formedit")[0]
            editDiv.style.display = "flex"
                })
            })
            const deleteButton = container.getElementsByClassName("delete")

            Array.from(deleteButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const deleteDiv = document.getElementsByClassName("suredelete")[0]
            deleteDiv.style.display = "flex"
                })
            })

            const editForm = document.getElementById("formedit_dessert")
            editForm.addEventListener("submit", () => {
                const dessert = {
                    product_id: document.getElementById("edit_product_id_dessert").value,
                    product_image : document.getElementById("edit_product_image_dessert").value,
                    product_name : document.getElementById("edit_product_name_dessert").value,
                    product_description : document.getElementById("edit_product_description_dessert").value,
                    price : document.getElementById("edit_price_dessert").value
                }

                editProductFetch(dessert)
            })

            const addForm = document.getElementById("formadd_dessert")
            addForm.addEventListener("submit", () => {
                const dessert = {
                    product_id: document.getElementById("add_product_id_dessert").value,
                    product_image : document.getElementById("add_product_image_dessert").value,
                    product_name : document.getElementById("add_product_name_dessert").value,
                    product_description : document.getElementById("add_product_description_dessert").value,
                    price : document.getElementById("add_price_dessert").value
                }

                addProductFetch(dessert)
            })*/
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

            const editButton = container.getElementsByClassName("edit")
/*
            Array.from(addButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const editDiv = document.getElementsByClassName("formedit")[0]
            editDiv.style.display = "flex"
                })
            })
            const deleteButton = container.getElementsByClassName("delete")

            Array.from(deleteButton).forEach((button, index) => {
            button.addEventListener("click", () => {
            const deleteDiv = document.getElementsByClassName("suredelete")[0]
            deleteDiv.style.display = "flex"
                })
            })

            const editForm = document.getElementById("formedit_drink")
            editForm.addEventListener("submit", () => {
                const drink = {
                    product_id: document.getElementById("edit_product_id_drink").value,
                    product_image : document.getElementById("edit_product_image_drink").value,
                    product_name : document.getElementById("edit_product_name_drink").value,
                    product_description : document.getElementById("edit_product_description_drink").value,
                    price : document.getElementById("edit_price_drink").value
                }

                editProductFetch(drink)
            })

            const addForm = document.getElementById("formadd_drink")
            addForm.addEventListener("submit", () => {
                const drink = {
                    product_id: document.getElementById("add_product_id_drink").value,
                    product_image : document.getElementById("add_product_image_drink").value,
                    product_name : document.getElementById("add_product_name_drink").value,
                    product_description : document.getElementById("add_product_description_drink").value,
                    price : document.getElementById("add_price_drink").value
                }

                addProductFetch(drink)
            })*/
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
