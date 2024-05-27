//event listener, click a submit, 
const url = "http://localhost:8080/VeggieBliss/Controller?action=clients.add"
let submit

document.addEventListener("DOMContentLoaded", (event) => {
    submit = document.getElementsByClassName("submit")[0]

    submit.addEventListener("submit", () => {
        const cliente = {
            client_id: 20,
            first_name: document.getElementById("username"),
            last_name: "null",
            mail: document.getElementById("email"),
            phone_number: document.getElementById("phone"),
            client_password: document.getElementById("password")
        }
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cliente)
        })
    })
})
