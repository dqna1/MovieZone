let Imagine = document.getElementById("image").src;
let Denumire = document.getElementById("denumire").textContent;
let Pret = parseInt(document.getElementsByClassName("price-num")[0].textContent);
let btn = document.querySelector(".buy-btn");

let arrProd = JSON.parse(localStorage.getItem('arrProd')) || [];
btn.addEventListener("click", ()=>{
    let Prod = {
        Denumire : Denumire,
        Imagine : Imagine,
        Pret : Pret,
    }
    if(localStorage.getItem("arrProd") == null || JSON.parse(localStorage.getItem("arrProd")).length == 0){
        arrProd.push(Prod)
        localStorage.setItem("arrProd", JSON.stringify(arrProd));
    } 
    else {
    
        let allPro = JSON.parse(localStorage.getItem("arrProd"))
        let exist = 0;

        allPro.forEach(element => {
            if(element.Denumire == Prod.Denumire)
            {
                exist = 1;
            } 
        });
        if(exist == 0){
            arrProd.unshift(Prod)
            localStorage.setItem("arrProd", JSON.stringify(arrProd));   
       }                       
 }

document.querySelector('.red-dot').style.display = "block";
});


//image magnifier
const container = document.getElementById('image-container');
const img = document.getElementById('image');

container.addEventListener('mousemove', (e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

container.addEventListener('mouseleave', ()=>{
    img.style.transform = "scale(1)";
})