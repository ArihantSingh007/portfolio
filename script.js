function scrollToSection(){
    document.getElementById("projects")
    .scrollIntoView({behavior:"smooth"});
}

function reveal(){
    let reveals=document.querySelectorAll(".reveal");

    reveals.forEach(el=>{
        let windowHeight=window.innerHeight;
        let elementTop=el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll",reveal);
reveal();
