const getBasket = () => {
    // get the basket
    const basket = JSON.parse(localStorage.getItem("basket"))
    // get the stored items
    const storedItems = JSON.parse(localStorage.getItem("items"));
    console.log({storedItems})
    // get a id from the page

    const container = document.getElementById("container");

    let innerHtml = ``;

    // loop through our basket and add the details inside the innerHtml of the id
    for (let itemId in basket) {
        const quantity = basket[itemId];
        const item = storedItems.find((item) => item.id === Number(itemId));
        innerHtml += `
          <div class="col-sm">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${item.fileInput}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.descriptions}</p>
                <p class="card-text"><strong>Quantity:</strong> ${quantity}</p>
              </div>
            </div>
        </div>
        `
    }

    container.innerHTML = innerHtml;
}

getBasket();


const checkout = () => {
    // get basket
    const basket = JSON.parse(localStorage.getItem("basket"))
    // loop through our stored items and remove the amount from each one

    const storedItems = JSON.parse(localStorage.getItem("items"));


    for (let itemId in basket) {
        const quantity = basket[itemId];
        const itemIndex = storedItems.findIndex((item) => item.id === Number(itemId));
        const newAmount = storedItems[itemIndex].amount - quantity;
        if(newAmount > 0) {
            // stock availble, reduce amount
            storedItems[itemIndex].amount = storedItems[itemIndex].amount - quantity;
        } else {
            // no stock left
            storedItems.splice(itemIndex, 1);
        }
        
    }

    localStorage.clear("basket");
    if(!storedItems) {
        localStorage.clear("items");
    } else {
        localStorage.setItem("items", JSON.stringify(storedItems));
    }
    
    window.location.href = "/completed-checkout.html";
}


  