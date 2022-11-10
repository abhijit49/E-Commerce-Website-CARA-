const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

var removeCartItembtn = document.getElementsByClassName('remove')
console.log(removeCartItembtn)
for(var i=0; i<removeCartItembtn.length; i++){
    var button = removeCartItembtn[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

var quantityInputs = document.getElementsByClassName('quantity')
for(var i=0; i<quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantitychanged)
}

function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
     input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal(){
    var cartRows = document.getElementsByClassName('cart-row')
    var total = 0;
    var total1 = 0;
    for(i=0; i<cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total+(price * quantity)
        }
        total1 = total
        total = total+35
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementsByClassName('cart-subtotal-price')[0].innerText = '$'+total1
}
