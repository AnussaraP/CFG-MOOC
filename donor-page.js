//Link to homepage 

let count = 0;

//data parameter got id and amount
const addToBasket = (data) => {
    console.log("data",{data})
    // Get current Basket (the basket button at homepage)
    let basket = JSON.parse(localStorage.getItem("basket"));
    let totalAmount = 1;
    
    if(basket && basket[data.id]) {
        totalAmount += Number(basket[data.id]);
    }
    // Check there is the 1 + basket amount availble in the storedItems.
    // If not, then don't add it and return empty
    if(totalAmount > data.amount) {
        return;
       
    }

    // if yes then... 

    // If no basket exists then create one
    if(!basket) {
        basket = {
            [data.id]: 1
        }
    } else if(basket) {
        // Check if the item is already in the basket

        // If the item exists in the basket then increase the amount by 1
        if(basket[data.id]) {
            basket[data.id] = basket[data.id] + 1;
        } else {
            // If not then add the item to the basket.
            basket[data.id] = 1;
        }
    }

    // Then save the basket back into localStorage.

    localStorage.setItem("basket", JSON.stringify(basket));

    count++;
    const basketAmount = document.getElementById("basketAmount");
    basketAmount.style.display = "block"
    basketAmount.innerHTML = count;
  
}

function retrieveRecords() {
  // Retrieve the stored data from localStorage
  const storedData = JSON.parse(window.localStorage.getItem("items"));
  console.log({ storedData });

  if (storedData === null) {
    return;
  }

  // get the html element by id "container"
  const containerItemElement = document.getElementById("container"); //div 1  container
  // loop through the stored data
  for (i = 0; i < storedData.length; i++) {
    // inside the loop, create a new div element
    const div2Element = document.createElement("div");
    div2Element.style.marginTop = "20px"
    const card = document.createElement("div");
    card.style.width = "18rem";
    card.style.marginBottom = "4rem";
    const cardBody = document.createElement("div");

    const nameElement = document.createElement("h5");
    const pElement = document.createElement("p");
    const amountElement = document.createElement("p");
    const imgElement = document.createElement("img");
    imgElement.style.maxWidth = "100%"; // Set the style attribute
    imgElement.attributes = "Card image cap";

    //button
    const addtobasketButton = document.createElement("button");
    addtobasketButton.type = "button";
    addtobasketButton.style.borderRadius = "5px";
    addtobasketButton.style.padding="5px 5px"


    div2Element.classList.add("col-md-4");
    card.classList.add("card");
    imgElement.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    nameElement.classList.add("card-title");
    pElement.classList.add("card-text");

    imgElement.getAttribute(imgElement);

    addtobasketButton.classList.add("btn-secondary");

    // set the new div element innerHtml to name or description

    nameElement.innerHTML = `Name: ${storedData[i].name}`;
    pElement.innerHTML = `Description: ${storedData[i].descriptions}`;
    amountElement.innerHTML = `Amount: ${storedData[i].amount}`;
    imgElement.src = storedData[i].fileInput;
    imgElement.alt = "Displayed Image";
    addtobasketButton.innerHTML = `Add to Basket`;

    const index = i;
    const clickHandler = () => {
        addToBasket(storedData[index]);
    };

    addtobasketButton.addEventListener("click", clickHandler);


    containerItemElement.appendChild(div2Element);
    div2Element.appendChild(card);
    card.appendChild(imgElement);
    cardBody.appendChild(nameElement);
    cardBody.appendChild(pElement);
    cardBody.appendChild(amountElement);
    cardBody.appendChild(addtobasketButton);

    card.appendChild(cardBody);
  }
}

retrieveRecords();
addToBasket()


