let BagItems =[];
let wishlistItems = [];
onload();

function onload(){
  let bagItemStr = localStorage.getItem('BatItems');
  BagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  let wishlistItemsStr = localStorage.getItem('wishlist-items');
  wishlistItems = wishlistItemsStr ? JSON.parse(wishlistItemsStr) : [];
  displayItemsOnHomepage();
  displayBagIcon ();
  displayWishlistItems();
}


function addToBag(itemId){
  BagItems.push(itemId);
  localStorage.setItem('BagItems', JSON.stringify(BagItems));
  displayBagIcon ();
} 

function addToWishlist(itemId){
  wishlistItems.push(itemId);
  localStorage.setItem('wishlist-items', JSON.stringify(wishlistItems));
  displayWishlistItems();
}

function displayBagIcon (){
  let bagItemCountElement = document.querySelector('.bagItemCount');
  if(BagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = BagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
  
  
}

function displayWishlistItems(){
  let wishlistItemCountElement = document.querySelector('.wishlistItemCount');
  if(wishlistItems.length > 0){
    wishlistItemCountElement.style.visibility = 'visible';
    wishlistItemCountElement.innerText = wishlistItems.length;
  } else {
    wishlistItemCountElement.style.visibility = 'hidden';
  }
  
}




function displayItemsOnHomepage(){
  let itemsContainerElements = document.querySelector('.items-container');
  if(!itemsContainerElements){
    return;
  }

let innerHtml = '';
items.forEach(item => {
  innerHtml += `
  <div class="item-container">

  <img class="item-image" src="${item.image}" alt="item image">
  
  <div class="rating">
      ${item.rating.stars}⭐| ${item.rating.count}
  </div>
  
  <div class="company-name">${item.company}</div>
  
  <div class="item-name">${item.item_name}</div>
  
  <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">${item.discount_percentage}% off</span>
  </div>
  
  <button class="btn-add-bag" onclick = 
  addToBag(${item.id})>Add to Bag</button>

  <button class = "btn-add-wishlist " onclick = "
  addToWishlist(${item.id})">Add to wishlist</button>  
  </div>`
});

itemsContainerElements.innerHTML = innerHtml;
}
