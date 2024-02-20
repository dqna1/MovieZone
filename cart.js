let arrProd = JSON.parse(localStorage.getItem('arrProd')) || [];
let cont = document.querySelector(".cart-container");



cont.innerHTML = ``;
for(let i=0; i<arrProd.length; i++){    
    cont.innerHTML += `
    <div class="cart-item">
    <input type="checkbox" name="checkbox">
    <img src="${arrProd[i].Imagine}" class="item-cover">
    <p class="item-name">${arrProd[i].Denumire}</p>
    <p class="item-price">${arrProd[i].Pret} lei</p>
    <button class="delete"><i class="fa-solid fa-trash"></i> Delete</button>
</div>
`
}

let check = document.querySelectorAll('input[type="checkbox"]');
let arCh = Array.from(check);
let total = parseInt(document.getElementById('total').textContent);
let pret = document.querySelectorAll('.item-price');
let totall = document.getElementById('total');

total = 0;
arCh.forEach((arr, index) => {
    arr.addEventListener('click' , () =>{
        if (arr.checked) {
            total += parseInt(pret[index].textContent);
            totall.textContent = total + " lei";
        }   
            else{
                total -= parseInt(pret[index].textContent);
                totall.textContent = total;
                totall.textContent = total + " lei";
            }
    })
});

let deleteBtn = document.querySelectorAll('.delete'); 
let itemName = document.querySelectorAll('.item-name');

deleteBtn.forEach((e, index) => {
    e.addEventListener("click", ()=>{

        for(let i=0; i<arrProd.length+1; i++){
            console.log(arrProd)
            if(itemName[index].textContent == arrProd[i].Denumire)
            {
                document.querySelectorAll(".cart-item")[index].style.display = "none";
                arrProd.splice(i, 1);
                localStorage.setItem("arrProd", JSON.stringify(arrProd));  
          } 
        }
            
        
    })
});
