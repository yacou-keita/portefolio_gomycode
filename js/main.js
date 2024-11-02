
const sideBar = document.querySelector("aside")
const button = document.getElementById("sidebar-button")
const ACTIVE = "active"
const DESACTIVE = "desactive"


button.addEventListener("click", () => {
    const getClassNames = sideBar.classList
    const isDesactive = getClassNames.contains(DESACTIVE)
    if(isDesactive){
        activeSideBar(getClassNames)
    }else{
        desactiveSideBar(getClassNames)
    }
    
})

function activeSideBar(getClassNames) {
    getClassNames.remove(DESACTIVE)
    getClassNames.add(ACTIVE)
}

function desactiveSideBar(getClassNames) {
    getClassNames.remove(ACTIVE)
    getClassNames.add(DESACTIVE)
}