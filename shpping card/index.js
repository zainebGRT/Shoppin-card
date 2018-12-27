var incrBtn = document.querySelectorAll(".incriment-btn")
var decrBtn = document.querySelectorAll(".decriment-btn")
var removeBtn= document.querySelectorAll(".btnremove")
var likeBtn= document.querySelectorAll(".btnlike")
var products = document.querySelectorAll(".shopping-product")
console.log("test1"+products)
for (let btn of incrBtn){

    btn.onclick = function(event){
        var quantity = event.target.parentElement.querySelector(".product-qte");
        quantity.innerHTML++;
        calculate();
        
    };
}
for (let btn of decrBtn){
    btn.onclick = function(event){
        let quantity = event.target.parentElement.querySelector(".product-qte");
        if(quantity.innerHTML <= 0){
            return;}
            quantity.innerHTML--;
            
        
        calculate();
    };
}
function calculate(){
    let prixProduit =0
    for ( var product of products){
        var quantity= product.querySelector('.product-qte').innerHTML
     var price=product.querySelector('.prix-en-dinar').innerHTML
      prixProduit+=quantity * parseInt(price)
    }
document.querySelector(".totale").innerHTML=prixProduit;

}

 
for(let btn of removeBtn){
    btn.onclick=function(event){
        event.target.parentElement.parentElement.remove()     
}
calculate()
}

for (let btn of likeBtn){
  btn.onclick = function(event){
 event.target.style.color ="red"
  }
    } 

  


