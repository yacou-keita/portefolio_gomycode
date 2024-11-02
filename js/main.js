
const sideBar = document.querySelector("aside")
const button = document.getElementById("sidebar-button")
const ACTIVE = "active"
const DESACTIVE = "desactive"


button.addEventListener("click", () => {
    const classNames = sideBar.classList
    const isDesactive = classNames.contains(DESACTIVE)
    if(isDesactive){
        activeSideBar(classNames)
    }else{
        desactiveSideBar(classNames)
    }
    
})

function activeSideBar(classNames) {
    classNames.remove(DESACTIVE)
    classNames.add(ACTIVE)
}

function desactiveSideBar(classNames) {
    classNames.remove(ACTIVE)
    classNames.add(DESACTIVE)
}