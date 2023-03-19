const params = new URLSearchParams(window.location.search);
      const productId = params.get("productId");
      // Renders product to view via productId
      async function getProduct() {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/product/${productId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE ",
            
            },
          }
        );
        const product = await response.json();
        return product;
      }

      function renderProduct(product) {
        document.querySelector("#product-details").innerHTML = `
        <img src="${product.imageUrl}" alt="Image of the product" style="width: 100%; object-fit:cover"/>
        <h1 class="display-4">${product.name}</h1>
      <p class="text-monospace">${product.brand}</p>
      <p class="mt-0">${product.description}</p>
      <h3 class="mb-3">${product.price}€<h3>
      <h6 class="pl-2 py-3 bg-dark text-white">Server Details</h6>
      <ul class="list-group list-group-flush mb-4">
        <li class="list-group-item pl-2"><b>id: </b>${product._id}</li>
        <li class="list-group-item pl-2"><b>createdAt: </b>${product.createdAt}</li>
        <li class="list-group-item pl-2"><b>updatedAt: </b>${product.updatedAt}</li>
      </ul>`;
      }

      window.onload = async () => {
        const product = await getProduct();
        renderProduct(product);
      };
      // Deleting Product
      async function deleteProduct() {
        try {
          if (confirm("Do you really want to delete this product?")) {
            const options = {
              method: "DELETE",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0N2RkZmY4MWI0MjAwMTM5YjJjMmEiLCJpYXQiOjE2NzkwNjQ3ODgsImV4cCI6MTY4MDI3NDM4OH0.CPrXtCQ0ixdGKs4yPeL83Ayb9gPUCOLWzEnGs-Zv2JE ",
                
              },
            };
            const response = await fetch(
              `https://striveschool-api.herokuapp.com/api/product/${productId}`,
              options
            );
            if (response.ok) {
              window.location.assign("index.html");
            } else {
              alert("Error while deleting!");
            }
          }
        } catch (error) {
          alert(`Some error occured: ${error}`);
        }
      }
    
    
    