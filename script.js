function productUpdate(product, isIncrease) {
    const productQuantity = getInputValue(product);
    let productNewQuantity = productQuantity;
    if (isIncrease == true) {
        productNewQuantity = productQuantity + 1;
    }
    if (isIncrease == false && productQuantity > 0) {
        productNewQuantity = productQuantity - 1;
    }
    document.getElementById(product + '-quantity').value = productNewQuantity;
    let totalProduct = 0;
    if (product == 'iphone') {
        totalProduct = productNewQuantity * 1219;
    }
    if (product == 'case') {
        totalProduct = productNewQuantity * 59;
    }
    document.getElementById(product + '-price').innerText =  totalProduct;
    calculateTotal();
}

function calculateTotal() {
    const phoneQuantity = getInputValue('iphone');
    const caseQuantity = getInputValue('case');
    const totalPrice = phoneQuantity * 1219 + caseQuantity * 59;
    document.getElementById('subtotal').innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('total').innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function removeItem(item) {
    const productArea = document.getElementById(item + '-cart');
    productArea.style.display = "none";
    if (item == 'iphone') {
        const caseQuantity = getInputValue('case');
        const totalPrice = caseQuantity * 59;
        document.getElementById('subtotal').innerText = totalPrice;
        const tax = Math.round(totalPrice * 0.1);
        document.getElementById('tax').innerText = tax;
        const grandTotal = totalPrice + tax;
        document.getElementById('total').innerText = grandTotal;
        document.getElementById('iphone-quantity').value = 0;
        calculateTotal();
    }
    else if (item == 'case') {
        const phoneQuantity = getInputValue('iphone');
        const totalPrice = phoneQuantity * 1219;
        document.getElementById('subtotal').innerText = totalPrice;
        const tax = Math.round(totalPrice * 0.1);
        document.getElementById('tax').innerText = tax;
        const grandTotal = totalPrice + tax;
        document.getElementById('total').innerText = grandTotal;
        document.getElementById('case-quantity').value = 0;
        calculateTotal();
    }
}


/* // iPhone Plus Button Event Handler
const iphonePlusBtn = document.getElementById("iphone-plus-btn");
iphonePlusBtn.addEventListener("click", function () {
    QuantityUpdate("iphone-quantity", 1);
    PriceUpdate("iphone-quantity", "iphone-price", 1219, 1219);
})

// iPhone Minus Button Event Handler
const iphoneMinusBtn = document.getElementById("iphone-minus-btn");
iphoneMinusBtn.addEventListener("click", function () {
    QuantityUpdate("iphone-quantity", -1);
    PriceUpdate("iphone-quantity", "iphone-price", 1219, -1219);
})

// iPhone Case Plus Button Event Handler
const casePlusBtn = document.getElementById("case-plus-btn");
casePlusBtn.addEventListener("click", function () {
    QuantityUpdate("case-quantity", 1);
    PriceUpdate("case-quantity", "case-price", 59, 59);
})

// iPhone Case Minus Button Event Handler
const caseMinusBtn = document.getElementById("case-minus-btn");
caseMinusBtn.addEventListener("click", function () {
    QuantityUpdate("case-quantity", -1);
    PriceUpdate("case-quantity", "case-price", 59, -59);
})

// Function For Quantity Update
function QuantityUpdate(quantityId, added) {
    const currentQuantity = parseFloat(document.getElementById(quantityId).value);
    const updateQuantity = currentQuantity + added;
    document.getElementById(quantityId).value = updateQuantity;
}

// Function For Price Update
function PriceUpdate(quantityId, priceId, priceOne, priceTow) {
    const currentQuantity = parseFloat(document.getElementById(quantityId).value);
    const updatePrice = currentQuantity * priceOne;
    document.getElementById(priceId).innerText = updatePrice;

    const currentSubtotal = parseFloat(document.getElementById("subtotal").innerText);
    const updateSubtotal = currentSubtotal + priceTow;
    document.getElementById("subtotal").innerText = updateSubtotal;

    const total = parseFloat(document.getElementById("total").innerText);
    const updateTotal = total + priceTow;
    document.getElementById("total").innerText = updateTotal;
}
 */

/*
//select elements
const iphonePlusBtn = document.getElementById("iphone-plus-btn");

//addEventListener & function
iphonePlusBtn.addEventListener("click", function(){
  //console.log("+ clicked");
  //console.log(countQuantity);
  const iphoneQuantity = document.getElementById("iphone-quantity");
  const countQuantity = parseInt(iphoneQuantity.value);
  const newcountQuantity = countQuantity + 1;
  iphoneQuantity.value= newcountQuantity;

  const totaliphonePrice = newcountQuantity * 1219;
  document.getElementById("iphone-price").innerText = totaliphonePrice;
})


const iphoneMinusBtn = document.getElementById("iphone-minus-btn");

//addEventListener & function
iphoneMinusBtn.addEventListener("click", function(){
    //console.log("- clicked");
    //console.log(countQuantity);
    const iphoneQuantity = document.getElementById("iphone-quantity");
    const countQuantity = parseInt(iphoneQuantity.value);
    const newcountQuantity = countQuantity - 1;
    iphoneQuantity.value= newcountQuantity;
  
    const totaliphonePrice = newcountQuantity * 1219;
    document.getElementById("iphone-price").innerText = totaliphonePrice;
  })
  */