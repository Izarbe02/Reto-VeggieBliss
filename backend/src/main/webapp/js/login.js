

let form 
document.addEventListener("DOMContentLoaded",  (event)=> {
    form = document.getElementsByClassName("client-form")[0];

    form.addEventListener("submit", () =>{
        //objeto cliente
        const client = {
            mail: document.getElementById("mail").value ,
            password: document.getElementById("password").value
        }
        const  loginResp = clientLoginFetch(emp)
        if (loginResp != 1) {
            alert("Failed to log in!")
            console.error(new Error ("Failed to log in! "));
        }  

    })
})

//enviar datos 
const  empURL = "http://localhost:8080/VeggieBliss/Controller?action=clients.login" 
const clientLoginFetch = async(object) => {
    const response = await fetch(empURL,
    {
    method: "get",
    body: JSON.stringify(object)
    }
    )
    const data = await response.json()
    console.log("login data = ", data)
    return data;
    } 
    