let manubar = document.querySelector(".manu");
let x = true
manubar.onclick = () => {
    manubar.classList.toggle("active")
    document.querySelector("nav").classList.toggle("active")
    document.querySelector("nav").classList.toggle("pro")
    console.log(manubar.firstElementChild)
    manubar.firstElementChild.classList.toggle("fa-x")
    if (x) {
        console.log(document.querySelector(".landing .container").style);
        document.querySelector(".landing .container").style.marginTop = "287px";
        x = false
    }
    else {

        document.querySelector(".landing .container").style.marginTop = "30px";
        x = true
    }

}


let next = document.querySelector(".right");
let prov = document.querySelector(".left");
let content = document.querySelector(".testimonial .container .contant");

next.onclick = () => {
    content.scrollLeft += 1000
}
prov.onclick = () => {

    content.scrollLeft -= 1000
}
