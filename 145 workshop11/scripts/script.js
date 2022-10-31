const nav = ["home", "about", "gallery", "contact"];

const links = ["index.html", "about.html", "gallery.htm", "contact.html"];

let navtext = "<ul>";
for(let i=0; i<nav.length; i++){
    navtext +='<li><a href="'+links[i]+'">' + nav[i] + "<a/></li>";
}

navtext + "</ul>"

document.getElementById("nav").innerHTML = navtext;
