

let form 
document.addEventListener("DOMContentLoaded",  (event)=> {
    form = document.getElementsByClassName("emp-form")[0];

    form.addEventListener("submit", () =>{
        //objeto empleado
        const emp = {
            mail: document.getElementById("mail").value ,
            password: document.getElementById("password").value
        }
        const  loginResp = empLoginFetch(emp)
        if (loginResp != 1) {
            alert("Failed to log in!")
            console.error(new Error ("Failed to log in! "));
        }  

    })
})

//envnio de datos
const  empURL = "http://localhost:8080/VeggieBliss/Controller?action=employees.login" 
const empLoginFetch = async(object) => {
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
    
    