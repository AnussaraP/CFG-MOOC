function store() {
  let name = document.getElementById("itemName").value;
  let description = document.getElementById("itemDescription").value;
  let amount = document.getElementById("itemAmount").value;
  let fileInput = document.getElementById("itemImage").files[0]; // Get the selected file



  if (fileInput) {
    const reader = new FileReader();

    reader.onload = function (e) {
      let imageDataUrl = e.target.result;
      console.log({ imageDataUrl });

      const itemList = {
        name: name,
        descriptions: description,
        amount: amount,
        fileInput: imageDataUrl, // Store the image as a data URL
        id:Math.random()
      };
      console.log({ itemList });



      // get the 'items' key from storage
      const items = window.localStorage.getItem("items");
      console.log({ items });
      // if it doesn't exist then create a new array and add the item into it

      let firstItem = [];

      if (items === null) {
        firstItem.push(itemList);
        console.log({ firstItem });
      }

      // if it exists then json.parse the data and do .push() and add the item onto the array
      if (items !== null) {
        const parsedItems = JSON.parse(items);
        firstItem = parsedItems; // Assign the parsed array to firstItem
        firstItem.push(itemList);
        console.log({ parsedItems });
      }

      // then json stringify the array and store back into the localStorage with the key 'items'
       window.localStorage.setItem(
        "items",
        JSON.stringify(firstItem)
      );

     

      //   window.localStorage.setItem('items', JSON.stringify(itemList));
    };

    reader.readAsDataURL(fileInput); // Convert the file to a data URL
  } else {
    // Handle the case where no file is selected
    alert("Please select an image file.");
  }
  console.log(window.location.href = "/");
}




