// Check if productData array exists and is not empty
if (productData && productData.length > 0) {
    const mainDiv = document.getElementById("main");
  
    productData.forEach((product, index) => {
      // Create product card elements
      const boxDiv = document.createElement("div");
      boxDiv.classList.add("box");
  
      const imgInfoDiv = document.createElement("div");
      imgInfoDiv.classList.add("img-info");
      imgInfoDiv.addEventListener("mouseover", () => showDesc(index));
      imgInfoDiv.addEventListener("mouseout", () => hideDesc(index));
  
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = product.imgUrl;
      img.alt = product.title;
  
      const descriptionP = document.createElement("p");
      descriptionP.classList.add("description");
      descriptionP.id = `description-${index}`;
      descriptionP.textContent = product.description;
  
      const titleH1 = document.createElement("h1");
      titleH1.classList.add("title");
      titleH1.textContent = product.title;
  
      const priceP = document.createElement("p");
      priceP.classList.add("price");
      priceP.textContent = product.price;
  
      const availQuanP = document.createElement("p");
      availQuanP.classList.add("availQuan");
      availQuanP.textContent = product.availQuan;
  
      const quantitySelectorDiv = document.createElement("div");
      quantitySelectorDiv.classList.add("quantity-selector");
      quantitySelectorDiv.innerHTML = `
        Select Quantity
        <span class="decrease"> - </span>
        <span class="increase"> + </span>
      `;
  
      const addToCartDiv = document.createElement("div");
      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("add-to-cart");
      addToCartButton.textContent = "Add To Cart";
      addToCartDiv.appendChild(addToCartButton);
  
      // Append elements to the product card
      imgInfoDiv.appendChild(img);
      imgInfoDiv.appendChild(descriptionP);
      boxDiv.appendChild(imgInfoDiv);
      boxDiv.appendChild(titleH1);
      boxDiv.appendChild(priceP);
      boxDiv.appendChild(availQuanP);
      boxDiv.appendChild(quantitySelectorDiv);
      boxDiv.appendChild(addToCartDiv);
  
      // Append product card to the main container
      mainDiv.appendChild(boxDiv);
    });
  } else {
    console.error("Product data is missing or empty.");
  }
  
  function showDesc(index) {
    const descriptionP = document.getElementById(`description-${index}`);
    descriptionP.style.bottom = "0";
    descriptionP.style.opacity = "1";
  }
  
  function hideDesc(index) {
    const descriptionP = document.getElementById(`description-${index}`);
    descriptionP.style.bottom = "-100%";
    descriptionP.style.opacity = "0";
  }