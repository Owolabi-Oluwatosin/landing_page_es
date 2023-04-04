const button = document.getElementById("menu-button");
const links = document.getElementById("nav_links");
const list = document.getElementById("list");
const closemenu = document.getElementById("close");

button.addEventListener("click", ()=>{
    if(links.classList.contains("hidden")){
        links.classList.remove("hidden");
        list.classList.add("hidden");
        closemenu.classList.remove("hidden");
    }else{
        links.classList.add("hidden");
        list.classList.remove("hidden");
        closemenu.classList.add("hidden");
    }
});


function myFunction(x) {
    if (x.matches) { // If media query matches
        const esdiac_map = document.getElementById("esdiac_map");

        const image = document.createElement("img");
        image.className = "map"
        image.src = "./assets/images/esdiac@2x-973x1024.png"
        image.alt = "Esdiac map"


        const div = document.createElement("div");
        div.className = ""
        // div.appendChild(  document.getElementById('footer_term_items') )
        esdiac_map.appendChild(div);

        div.appendChild(image);
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes