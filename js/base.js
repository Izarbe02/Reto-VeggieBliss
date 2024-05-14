let menuToggle
let primaryMenu
let buttonsMenu

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    menuToggle = document.getElementsByClassName("menu-toggle")[0]
    primaryMenu = document.getElementsByClassName("menu")[0]
    buttonsMenu = document.getElementsByClassName("buttons")[0]

    menuToggle.addEventListener("click", () => {
        if (primaryMenu.style.display != "flex") {
            primaryMenu.style.display = "flex"
            if (window.outerWidth<500) {
                buttonsMenu.style.display = "flex"
            }
        } else {
            primaryMenu.style.display = "none"
            if (window.outerWidth<500) {
                buttonsMenu.style.display = "none"
            }
        }
    })
})
