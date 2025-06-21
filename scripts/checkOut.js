import { cart, removeProduct } from '../data/cart.js';
import { products } from '../data/products.js';
import { moneyFormatter } from './utils/moneyFormatter.js'

let productDets;
cart.forEach((product)=>{
    
    let matchingProduct;
    products.forEach((item)=>{
        if(item.id === product.productId){
          matchingProduct = item  
        }
    })

    console.log(matchingProduct, 'matchingProduct');
    

    productDets +=
    `
    <div class="cart-item-container
     js-cart-item-container-${matchingProduct.id}
    ">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${moneyFormatter(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${product.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
})

let productList = document.querySelector('.order-summary');
productList.innerHTML = productDets

let deleteItem = document.querySelectorAll('.js-delete-link');
deleteItem.forEach((item)=> {
  item.addEventListener('click', ()=> {
    const productId = item.dataset.productId;
    removeProduct(productId)

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove()
  })


})