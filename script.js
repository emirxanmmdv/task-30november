const icon = document.getElementById('icon')
const menu = document.querySelector('.hamburger_menu')
icon.addEventListener('click', ()=>{
    menu.classList.toggle("dropdown")
    icon.classList.toggle("fa-x")
})
const accordions = document.getElementsByClassName("accordion-item");
const accordioncontents = document.getElementsByClassName("accordion-content");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', () => {
        const accordioncontent = accordioncontents[i];
        accordioncontent.classList.toggle("active");
        for (let j = 0; j < accordioncontents.length; j++) {
            if (j !== i) {
                accordioncontents[j].classList.remove("active");
            }
        }
    });
}