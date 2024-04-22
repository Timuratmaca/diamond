let collections=document.getElementsByClassName("collection")
let images=document.getElementsByClassName("products")[0].getElementsByTagName("img")

for(let a of images){
    a.style.height=a.offsetWidth+"px"
}

for(let c of collections){
    c.style.height=c.offsetWidth+"px"
    //todo console.log(2);
}
