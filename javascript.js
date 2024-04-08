


function closehome() {
    var myDiv = document.getElementById("navbar-mobile-div");


    var computedStyle = window.getComputedStyle(myDiv);

    if (computedStyle.display === "flex") {

        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
}


function openhome() {
    var myDiv = document.getElementById("navbar-mobile-div");


    var computedStyle = window.getComputedStyle(myDiv);

    if (computedStyle.display === "none") {
        myDiv.style.display = "flex";
    }
}




let cart = [];

function addToCart(element) {
  const productBox = element.parentElement.parentElement;
  const title = productBox.querySelector("h2").innerText;
  const price = productBox.querySelector("h3").innerText;

  const product = {
    title,
    price
  };

  cart.push(product);
  updateCart();
}




function updateCart() {
    const cartContainer = document.getElementById("cart-stored");
    cartContainer.innerHTML = "";
  
    cart.forEach((product, index) => {
      cartContainer.innerHTML += `
        <p>${index + 1}. ${product.title} - $${product.price}</p>
      `;
    });
  
    cartContainer.innerHTML += `
      <p>Total: $${cart.reduce((total, product) => total + Number(product.price.replace("$", "")), 0)}</p>
    `;
  }





  var mainimg = document.getElementById("main-img");
  var smallimg = document.getElementsByClassName("small-img");
  
  smallimg[0].onclick = function() {
      mainimg.src = smallimg[0].src;
  }
  
  smallimg[1].onclick = function() {
      mainimg.src = smallimg[1].src;
  }
  
  smallimg[2].onclick = function() {
      mainimg.src = smallimg[2].src;
  }
  
  smallimg[3].onclick = function() {
      mainimg.src = smallimg[3].src;
  }
