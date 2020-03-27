let callDropDown = document.getElementById("call-drop-down")
let dropDownMenu = document.getElementsByClassName("drop-down-box")[0]
let dropDownChild = document.querySelectorAll(".fix-menu")

callDropDown.addEventListener('mouseover', () => {
    dropDownMenu.style.transform = 'scale(1)'
})

callDropDown.addEventListener('mouseout', () => {
    dropDownMenu.style.transform = 'scale(0)'
})

dropDownChild.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        dropDownMenu.style.transform = 'scale(1)'
    })
})

dropDownChild.forEach(elem => {
    elem.addEventListener('mouseout', () => {
        dropDownMenu.style.transform = 'scale(0)'
    })
})