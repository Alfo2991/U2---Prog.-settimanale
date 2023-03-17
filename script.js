window.onload = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE ",
  };

  let currentProducts = document.querySelector("#currentProducts");

  try {
    let response = await fetch(url, { headers }); // this is getting the response from the API for a fetch request
    let products = await response.json(); // this is transforming the response in a json, asyncronous operation!
    console.log(products);
    if (products.length > 0) {
      products.forEach((product) => {
        console.log(product);

        let productItem = document.createElement("div");
        productItem.classList.add("col", "mb-4");
        productItem.innerHTML = `<div class="card p-3">
                    <div class="box" ><img
                      src=${product.imageUrl}
                      alt=${product.name}
                      class="img-fluid"
                    /></div>
                    <h6 class="pt-3">${product.name}</h6>
                    <p>Brand: ${product.brand}</p>
                    <p class="price">Price: <span>$${product.price}<span></p>
                    <p>${
                      product.description.length < 100
                        ? product.description
                        : product.description.substring(0, 100) + " ..."
                    }</p>
                    <p>
                     <a class="btn btn-dark w-100 py-2" href="detail.html?id=${
                       product._id
                     }">View Details</a>
                    </p>
                  </div>`;
        currentProducts.appendChild(productItem);
      });
    } else {
      currentProducts.innerHTML = "<h1>No Products Available</h1>";
    }
  } catch (error) {
    console.log(error);
  }
};
console.log(`current url: ${window.location.href}`);
