window.onload = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE ",
  };

  let currentProducts = document.querySelector(".currentProducts");

  try {
    let response = await fetch(url, { headers });
    let products = await response.json();
    console.log(products);
    if (products.length > 0) {
      products.forEach((product) => {
        console.log(product);

        let productItem = document.createElement("div");
        productItem.classList.add("col", "mb-4");
        productItem.innerHTML = `<div class="card p-3 bg-success">
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
                     }">View More</a> 
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

async function modify(id) {
  let myProduct = {
    name: document.querySelector("#productname").value,
    description: document.querySelector("#productdescription").value,
    brand: document.querySelector("#productbrand").value,
    imageUrl: document.querySelector("#productimageUrl").value,
    price: document.querySelector("#productprice").value,
  };

  try {
    let response;

    if (id) {
      response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(myProduct),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE",
        }),
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    spinner.classList.add("d-none");
  }
}
